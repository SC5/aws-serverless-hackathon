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

# Get bucket name from stack
BUCKET="$(aws cloudformation describe-stack-resource --stack-name $STACK_NAME --logical-resource-id BlogBucket --query 'StackResourceDetail.PhysicalResourceId')"

# Remove files from bucket
echo "removing files from $BUCKET"
aws s3 rm s3://"${BUCKET//\"}" --recursive --region $REGION

# Delete stack
echo "remove stack \"$STACK_NAME\" from $REGION"
aws cloudformation delete-stack --stack-name $STACK_NAME --region $REGION

aws cloudformation wait stack-delete-complete --stack-name $STACK_NAME
