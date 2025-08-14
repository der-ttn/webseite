# TTN Web Helm Chart

This Helm chart deploys the TTN Web application (Bass.Liebe.Sicherheit.) on Kubernetes with HTTPS support and automatic HTTP to HTTPS redirect.

## Prerequisites

- Kubernetes cluster (tested with MicroK8s)
- Traefik ingress controller installed
- cert-manager for SSL certificates
- Helm 3.x

## Configuration for MicroK8s Cluster

This chart is optimized for deployment on the MicroK8s cluster configuration from [sense-of-community](https://github.com/ABartelt/sense-of-community/tree/release/k8s-helm-ansible/).

### Required MicroK8s Add-ons

Ensure these add-ons are enabled on your MicroK8s cluster:

```bash
microk8s enable dns
microk8s enable ingress
microk8s enable cert-manager
microk8s enable traefik
```

## Installation

### 1. Create the namespace

```bash
kubectl create namespace website
```

### 2. Install the chart

```bash
helm install ttn-web ./helm-charts/ttn-web -n website
```

### 3. Verify deployment

```bash
kubectl get pods -n website
kubectl get ingress -n website
kubectl get certificates -n website
```

## Configuration

### SSL/TLS Configuration

The chart automatically:

- Requests SSL certificates from Let's Encrypt
- Redirects HTTP traffic to HTTPS
- Configures secure headers

### Scaling

By default, the application runs with 2 replicas for high availability. You can enable autoscaling:

```yaml
autoscaling:
  enabled: true
  minReplicas: 2
  maxReplicas: 10
  targetCPUUtilizationPercentage: 80
```

### Custom Values

Create a `values-production.yaml` file for production overrides:

```yaml
image:
  tag: '0.0.2' # Update to latest version

ingress:
  annotations:
    traefik.ingress.kubernetes.io/router.middlewares: 'website-redirect-https@kubernetescrd'

resources:
  limits:
    cpu: 500m
    memory: 512Mi
  requests:
    cpu: 250m
    memory: 256Mi
```

Then deploy with:

```bash
helm upgrade ttn-web ./helm-charts/ttn-web -f values-production.yaml -n website
```

## Monitoring

The chart includes:

- Liveness and readiness probes
- Resource limits and requests
- Pod anti-affinity for better distribution

## DNS Configuration

Point your domain `der-ttn.de` to your cluster's external IP:

```bash
# Get your cluster's external IP
kubectl get nodes -o wide

# Configure DNS A record:
# der-ttn.de -> YOUR_CLUSTER_EXTERNAL_IP
```

## Troubleshooting

### Check pod status

```bash
kubectl describe pod -l app.kubernetes.io/name=ttn-web -n website
```

### Check ingress

```bash
kubectl describe ingress ttn-web -n website
```

### Check certificate

```bash
kubectl describe certificate ttn-web-tls -n website
```

### Check Traefik logs

```bash
kubectl logs -l app.kubernetes.io/name=traefik -n kube-system
```

## Security Features

- Non-root container execution
- Read-only root filesystem
- Dropped capabilities
- Resource limits
- Network policies (when enabled)
- HTTPS-only with secure headers

## Upgrade

```bash
helm upgrade ttn-web ./helm-charts/ttn-web -n website
```

## Uninstall

```bash
helm uninstall ttn-web -n website
kubectl delete namespace website  # Optional: removes namespace and all resources
```
