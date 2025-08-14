# TTN Web Deployment Guide

This guide provides step-by-step instructions to deploy the TTN Web application on your MicroK8s cluster.

## Prerequisites

Based on your [MicroK8s cluster configuration](https://github.com/ABartelt/sense-of-community/tree/release/k8s-helm-ansible/), ensure the following are installed:

- MicroK8s cluster running
- Traefik ingress controller
- cert-manager for SSL certificates
- DNS pointing `der-ttn.de` to your cluster

## Deployment Steps

### 1. Verify MicroK8s Status

```bash
microk8s status --wait-ready
microk8s kubectl get nodes
```

### 2. Enable Required Add-ons

```bash
# Enable core services (if not already enabled)
microk8s enable dns
microk8s enable ingress
microk8s enable cert-manager

# Verify Traefik is running (from your sense-of-community setup)
microk8s kubectl get pods -n kube-system | grep traefik
```

### 3. Create Namespace

```bash
microk8s kubectl create namespace website
```

### 4. Configure DNS

Ensure `der-ttn.de` points to your cluster's external IP:

```bash
# Get your cluster IP
microk8s kubectl get nodes -o wide

# Configure your DNS provider to point:
# der-ttn.de A YOUR_CLUSTER_EXTERNAL_IP
```

### 5. Deploy TTN Web

```bash
# Install the Helm chart
microk8s helm3 install ttn-web ./helm-charts/ttn-web \
  --namespace website \
  --wait \
  --timeout=600s
```

### 6. Verify Deployment

```bash
# Check pods
microk8s kubectl get pods -n website

# Check services
microk8s kubectl get svc -n website

# Check ingress
microk8s kubectl get ingress -n website

# Check certificate (may take a few minutes)
microk8s kubectl get certificates -n website
```

### 7. Test HTTPS and Redirect

```bash
# Test HTTP redirect (should redirect to HTTPS)
curl -I http://der-ttn.de

# Test HTTPS (should return 200)
curl -I https://der-ttn.de
```

## Integration with Existing Infrastructure

### Traefik Configuration

The chart is configured to work with your existing Traefik setup:

- Uses `traefik` ingress class
- Configures automatic HTTP to HTTPS redirect
- Integrates with Let's Encrypt for SSL certificates

### Resource Management

Optimized for your cluster:

- 2 replicas for high availability
- Resource limits to prevent resource exhaustion
- Pod anti-affinity for better distribution

### Monitoring Integration

If you have monitoring in your cluster:

```bash
# Check if monitoring namespace exists
microk8s kubectl get namespace monitoring

# The chart includes standard labels for Prometheus scraping
```

## Production Considerations

### 1. Resource Scaling

For production loads, consider updating resources:

```yaml
# values-production.yaml
resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 250m
    memory: 256Mi

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 10
```

### 2. Security Hardening

The chart includes security best practices:

- Non-root containers
- Read-only filesystem
- Dropped capabilities
- Resource limits

### 3. Backup Strategy

Consider backing up:

- Helm values
- SSL certificates
- Application configuration

## Troubleshooting

### Certificate Issues

```bash
# Check certificate status
microk8s kubectl describe certificate ttn-web-tls -n website

# Check cert-manager logs
microk8s kubectl logs -n cert-manager deployment/cert-manager

# Manual certificate request debug
microk8s kubectl describe certificaterequest -n website
```

### Ingress Issues

```bash
# Check Traefik logs
microk8s kubectl logs -n kube-system deployment/traefik

# Check ingress details
microk8s kubectl describe ingress ttn-web -n website

# Test internal connectivity
microk8s kubectl run test-pod --image=nginx --rm -it -- /bin/bash
# Then inside pod: curl http://ttn-web.website.svc.cluster.local
```

### Pod Issues

```bash
# Check pod logs
microk8s kubectl logs -l app.kubernetes.io/name=ttn-web -n website

# Check pod events
microk8s kubectl describe pod -l app.kubernetes.io/name=ttn-web -n website

# Access pod for debugging
microk8s kubectl exec -it deployment/ttn-web -n website -- /bin/sh
```

## Maintenance

### Updates

```bash
# Update to new image version
microk8s helm3 upgrade ttn-web ./helm-charts/ttn-web \
  --set image.tag=0.0.2 \
  --namespace website
```

### Health Checks

```bash
# Check application health
microk8s kubectl get pods -n website
curl -f https://der-ttn.de

# Check certificate expiry
microk8s kubectl get certificate ttn-web-tls -n website -o yaml
```

### Cleanup

```bash
# Remove application
microk8s helm3 uninstall ttn-web -n website

# Remove namespace (optional)
microk8s kubectl delete namespace website
```

## Integration with sense-of-community

This deployment complements your existing [sense-of-community infrastructure](https://github.com/ABartelt/sense-of-community/tree/release/k8s-helm-ansible/):

- Uses the same Traefik ingress controller
- Follows the same namespace conventions
- Compatible with existing SSL certificate management
- Integrates with the existing monitoring stack (if deployed)

The TTN web application will be available at `https://der-ttn.de` alongside your other applications.
