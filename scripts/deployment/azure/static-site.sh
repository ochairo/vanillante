#!/bin/bash

echo "TODO: Deploying a static website to Azure Storage Account"

# Variables
storageAccount="storage_account_name"
containerName="container_name"
location="location"

# Log in to Azure (if necessary)
az login

# Create a storage account
az storage account create --name $storageAccount --location $location --resource-group $resourceGroup --sku Standard_LRS

# Create a storage container
az storage container create --name $containerName --account-name $storageAccount

# Enable static websites on the storage account
az storage blob service-properties update --account-name $storageAccount --static-website --index-document index.html

# Upload SPA files to the storage container
az storage blob upload-batch --destination $containerName --source . --account-name $storageAccount

# Get the URL of the static website
staticWebsiteUrl=$(az storage account show --name $storageAccount --query primaryEndpoints.web --output tsv)
echo "SPA has been deployed at: $staticWebsiteUrl"
