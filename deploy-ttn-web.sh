#!/bin/bash

# TTN Web Deployment Script
# This script deploys the TTN web application to your MicroK8s cluster

set -e

KUBECONFIG_PATH="/Users/arnebartelt/.kube/config"
NAMESPACE="website"
CHART_PATH="./helm-charts/ttn-web"
RELEASE_NAME="ttn-web"

echo "🚀 Starting TTN Web Deployment..."
echo "📋 Using kubeconfig: $KUBECONFIG_PATH"
echo "📦 Deploying to namespace: $NAMESPACE"
echo ""

# Step 1: Verify cluster connectivity
echo "1️⃣ Verifying cluster connectivity..."
kubectl --kubeconfig="$KUBECONFIG_PATH" cluster-info
kubectl --kubeconfig="$KUBECONFIG_PATH" get nodes
echo "✅ Cluster is accessible"
echo ""

# Step 2: Create namespace if it doesn't exist
echo "2️⃣ Creating namespace '$NAMESPACE'..."
kubectl --kubeconfig="$KUBECONFIG_PATH" create namespace "$NAMESPACE" --dry-run=client -o yaml | \
  kubectl --kubeconfig="$KUBECONFIG_PATH" apply -f -
echo "✅ Namespace '$NAMESPACE' ready"
echo ""

# Step 3: Verify required components are running
echo "3️⃣ Verifying required cluster components..."

echo "   Checking Traefik ingress controller..."
kubectl --kubeconfig="$KUBECONFIG_PATH" get pods -n kube-system -l app.kubernetes.io/name=traefik
if [ $? -ne 0 ]; then
    echo "❌ Traefik not found. Please ensure Traefik is installed."
    exit 1
fi

echo "   Checking cert-manager..."
kubectl --kubeconfig="$KUBECONFIG_PATH" get pods -n cert-manager
if [ $? -ne 0 ]; then
    echo "❌ cert-manager not found. Please ensure cert-manager is installed."
    exit 1
fi

echo "✅ All required components are running"
echo ""

# Step 4: Deploy using Helm
echo "4️⃣ Deploying TTN Web with Helm..."
helm install "$RELEASE_NAME" "$CHART_PATH" \
  --namespace "$NAMESPACE" \
  --kubeconfig="$KUBECONFIG_PATH" \
  --wait \
  --timeout=600s \
  --debug
echo "✅ Helm deployment completed"
echo ""

# Step 5: Verify deployment
echo "5️⃣ Verifying deployment..."

echo "   Checking pods..."
kubectl --kubeconfig="$KUBECONFIG_PATH" get pods -n "$NAMESPACE" -l app.kubernetes.io/name=ttn-web

echo "   Checking services..."
kubectl --kubeconfig="$KUBECONFIG_PATH" get svc -n "$NAMESPACE"

echo "   Checking ingress..."
kubectl --kubeconfig="$KUBECONFIG_PATH" get ingress -n "$NAMESPACE"

echo "   Checking certificates..."
kubectl --kubeconfig="$KUBECONFIG_PATH" get certificates -n "$NAMESPACE"

echo ""
echo "🎉 Deployment completed successfully!"
echo ""
echo "📋 Next steps:"
echo "   1. Ensure der-ttn.de DNS points to your cluster IP"
echo "   2. Wait for SSL certificate to be issued (may take 2-5 minutes)"
echo "   3. Test: curl -I https://der-ttn.de"
echo ""
echo "🔍 Monitoring commands:"
echo "   kubectl --kubeconfig='$KUBECONFIG_PATH' get pods -n $NAMESPACE -w"
echo "   kubectl --kubeconfig='$KUBECONFIG_PATH' describe certificate ttn-web-tls -n $NAMESPACE"
echo ""
