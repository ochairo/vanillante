#!/bin/bash

echo "TODO: Deploying a container to Azure Container Instances (ACI)"

# Variables
resourceGroup="resource_group_name"
containerName="container_name"
imageName="container_image_name"
registryName="container_registry_name"
location="location"
registryLoginServer="registry_server_name"
registryUsername="registry_username"
registryPassword="registry_password"
dnsNameLabel="dns_label_name"

# Log in to Azure (if necessary)
az login

# Create a resource group (if it doesn't exist)
az group create --name $resourceGroup --location $location

# Log in to the container registry
az acr login --name $registryName

# Deploy the container to Azure Container Instances (ACI)
az container create \
  --resource-group $resourceGroup \
  --name $containerName \
  --image $imageName \
  --cpu 1 \
  --memory 1.5 \
  --registry-login-server $registryLoginServer \
  --registry-username $registryUsername \
  --registry-password $registryPassword \
  --dns-name-label $dnsNameLabel \
  --ports 80

# Check the deployment status
az container show --resource-group $resourceGroup --name $containerName --query instanceView.state
