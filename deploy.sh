#!/usr/bin/env bash
npm run dist
STACK_NAME=blog-workshop-stack
STACKS="$(aws cloudformation describe-stacks --query 'Stacks[*].StackName')"
if [[ ! " ${STACKS[*]} " == *"${STACK_NAME}"* ]]; then
  echo create $STACK_NAME
  STACK="$(aws cloudformation create-stack --stack-name $STACK_NAME --template-body file://./stack.yml)"
else
  echo update $STACK_NAME
  STACK="$(aws cloudformation update-stack --stack-name $STACK_NAME --template-body file://./stack.yml)"
fi

BUCKET="$(aws cloudformation describe-stack-resource --stack-name $STACK_NAME --logical-resource-id BlogBucket --query 'StackResourceDetail.PhysicalResourceId')"

aws s3 cp ./dist s3://"${BUCKET//\"}" --recursive --exclude ".git/*"

WEBSITE="$(aws cloudformation describe-stacks --stack-name $STACK_NAME --query 'Stacks[0].Outputs[1].OutputValue')"
echo "website url: ${WEBSITE//\"}"