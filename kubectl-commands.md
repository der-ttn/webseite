# TTN Web Deployment Commands

All commands using your specific kubeconfig: `/Users/arnebartelt/.kube/config`

## Pre-deployment Verification

### 1. Check cluster status

```bash
kubectl --kubeconfig /Users/arnebartelt/.kube/config cluster-info
kubectl --kubeconfig /Users/arnebartelt/.kube/config get nodes
```

### 2. Verify required components

```bash
# Check Traefik (should be running from your sense-of-community setup)
kubectl --kubeconfig /Users/arnebartelt/.kube/config get pods -n kube-system -l app.kubernetes.io/name=traefik

# Check cert-manager
kubectl --kubeconfig /Users/arnebartelt/.kube/config get pods -n cert-manager

# Check ingress classes available
kubectl --kubeconfig /Users/arnebartelt/.kube/config get ingressclass
```

## Deployment Commands

### 3. Create namespace

```bash
kubectl --kubeconfig /Users/arnebartelt/.kube/config create namespace website
```

### 4. Deploy with Helm

```bash
helm install ttn-web ./helm-charts/ttn-web \
  --namespace website \
  --kubeconfig /Users/arnebartelt/.kube/config \
  --wait \
  --timeout=600s
```

### 5. Verify deployment

```bash
# Check all resources
kubectl --kubeconfig /Users/arnebartelt/.kube/config get all -n website

# Check pods specifically
kubectl --kubeconfig /Users/arnebartelt/.kube/config get pods -n website -l app.kubernetes.io/name=ttn-web

# Check services
kubectl --kubeconfig /Users/arnebartelt/.kube/config get svc -n website

# Check ingress
kubectl --kubeconfig /Users/arnebartelt/.kube/config get ingress -n website

# Check certificates
kubectl --kubeconfig /Users/arnebartelt/.kube/config get certificates -n website
```

## Monitoring & Troubleshooting

### Watch deployment progress

```bash
# Watch pods come online
kubectl --kubeconfig /Users/arnebartelt/.kube/config get pods -n website -w

# Watch certificate creation
kubectl --kubeconfig /Users/arnebartelt/.kube/config get certificates -n website -w
```

### Check detailed status

```bash
# Pod details
kubectl --kubeconfig /Users/arnebartelt/.kube/config describe pod -l app.kubernetes.io/name=ttn-web -n website

# Service details
kubectl --kubeconfig /Users/arnebartelt/.kube/config describe svc ttn-web -n website

# Ingress details
kubectl --kubeconfig /Users/arnebartelt/.kube/config describe ingress ttn-web -n website

# Certificate details
kubectl --kubeconfig /Users/arnebartelt/.kube/config describe certificate ttn-web-tls -n website
```

### Check logs

```bash
# Application logs
kubectl --kubeconfig /Users/arnebartelt/.kube/config logs -l app.kubernetes.io/name=ttn-web -n website

# Traefik logs (for ingress troubleshooting)
kubectl --kubeconfig /Users/arnebartelt/.kube/config logs -l app.kubernetes.io/name=traefik -n kube-system

# cert-manager logs (for SSL troubleshooting)
kubectl --kubeconfig /Users/arnebartelt/.kube/config logs -n cert-manager deployment/cert-manager
```

### Check events

```bash
# Namespace events
kubectl --kubeconfig /Users/arnebartelt/.kube/config get events -n website --sort-by='.lastTimestamp'

# Certificate events
kubectl --kubeconfig /Users/arnebartelt/.kube/config get events -n website --field-selector involvedObject.kind=Certificate
```

## Testing & Validation

### Test internal connectivity

```bash
# Port-forward to test the app directly
kubectl --kubeconfig /Users/arnebartelt/.kube/config port-forward -n website deployment/ttn-web 8080:80

# Then in another terminal: curl http://localhost:8080
```

### Test ingress and SSL

```bash
# Get cluster external IP
kubectl --kubeconfig /Users/arnebartelt/.kube/config get nodes -o wide

# Test HTTP redirect (should redirect to HTTPS)
curl -I http://der-ttn.de

# Test HTTPS (should return 200 after certificate is ready)
curl -I https://der-ttn.de

# Test with verbose SSL info
curl -vI https://der-ttn.de
```

### Check certificate status

```bash
# Certificate ready status
kubectl --kubeconfig /Users/arnebartelt/.kube/config get certificate ttn-web-tls -n website -o jsonpath='{.status.conditions[?(@.type=="Ready")].status}'

# Certificate details
kubectl --kubeconfig /Users/arnebartelt/.kube/config get certificate ttn-web-tls -n website -o yaml
```

## Management Commands

### Update deployment

```bash
# Upgrade with new values
helm upgrade ttn-web ./helm-charts/ttn-web \
  --namespace website \
  --kubeconfig /Users/arnebartelt/.kube/config \
  --set image.tag=0.0.2

# Restart deployment (if needed)
kubectl --kubeconfig /Users/arnebartelt/.kube/config rollout restart deployment/ttn-web -n website
```

### Scale deployment

```bash
# Scale to 3 replicas
kubectl --kubeconfig /Users/arnebartelt/.kube/config scale deployment ttn-web --replicas=3 -n website

# Check scaling status
kubectl --kubeconfig /Users/arnebartelt/.kube/config get deployment ttn-web -n website
```

### Debug pod issues

```bash
# Execute into pod for debugging
kubectl --kubeconfig /Users/arnebartelt/.kube/config exec -it deployment/ttn-web -n website -- /bin/sh

# Run a debug pod in the same namespace
kubectl --kubeconfig /Users/arnebartelt/.kube/config run debug-pod --image=busybox --rm -it -n website -- /bin/sh
```

## Cleanup Commands

### Remove deployment

```bash
# Uninstall Helm release
helm uninstall ttn-web --namespace website --kubeconfig /Users/arnebartelt/.kube/config

# Remove namespace (optional - removes everything)
kubectl --kubeconfig /Users/arnebartelt/.kube/config delete namespace website
```

### Clean up certificates (if needed)

```bash
# Delete certificate (will be recreated automatically)
kubectl --kubeconfig /Users/arnebartelt/.kube/config delete certificate ttn-web-tls -n website

# Delete certificate secret
kubectl --kubeconfig /Users/arnebartelt/.kube/config delete secret ttn-web-tls -n website
```

## Quick Status Check

Single command to check everything:

```bash
kubectl --kubeconfig /Users/arnebartelt/.kube/config get pods,svc,ingress,certificates -n website
```

## DNS Configuration Reminder

Make sure your DNS is configured:

```bash
# Get your cluster's external IP
kubectl --kubeconfig /Users/arnebartelt/.kube/config get nodes -o wide

# Configure DNS A record:
# der-ttn.de -> YOUR_CLUSTER_EXTERNAL_IP
```
