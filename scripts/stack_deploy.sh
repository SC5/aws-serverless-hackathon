#!/bin/bash

STACK_NAME=blog-workshop-frontend
REGION=us-east-1

while getopts ":r:n:" opt; do
  case $opt in
    r)
      REGION=$OPTARG
      ;;
    n)
      STACK_NAME=$OPTARG
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      ;;
  esac
done

echo "building package"

npm run dist

echo "deploying stack \"$STACK_NAME\" to $REGION"

aws cloudformation deploy --stack-name $STACK_NAME --region $REGION --template-file stack.yml

# Get bucket name from stack
BUCKET="$(aws cloudformation describe-stack-resource --stack-name $STACK_NAME --logical-resource-id BlogBucket --query 'StackResourceDetail.PhysicalResourceId')"

# Copy files to bucket
aws s3 cp ./dist s3://"${BUCKET//\"}" --recursive --exclude ".git/*" --region $REGION

# Get website url from stack
WEBSITE="$(aws cloudformation describe-stacks --stack-name $STACK_NAME --region $REGION --query 'Stacks[0].Outputs[1].OutputValue')"
echo "website url: ${WEBSITE//\"}"