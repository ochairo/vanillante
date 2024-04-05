#!/bin/bash

echo "TODO: Pushing a Docker image to Azure Container Registry (ACR)"

# Variables
registryName="registry_name"
imageName="image_name"
imageTag="latest"             # Example: "v1.0"
filePath="path_to_dockerfile" # Example: "./Dockerfile"

# Log in to Azure (if necessary)
az login

# Get the credentials for the container registry
az acr login --name $registryName

# Build the Docker image
docker build -t $imageName:$imageTag -f $filePath .

# Tag the Docker image for the container registry
docker tag $imageName:$imageTag $registryName.azurecr.io/$imageName:$imageTag

# Push the Docker image to the container registry
docker push $registryName.azurecr.io/$imageName:$imageTag

echo "Docker image has been pushed to Azure Container Registry: $registryName.azurecr.io/$imageName:$imageTag"
