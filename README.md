#Blog workshop frontend

### What you need
* Node.js and npm: https://nodejs.org/en/


### Installation
* Clone GIT repository
```bash
git clone git@github.com:SC5/aws-serverless-hackathon.git
```
* Install packages
```bash
npm install
```
* Now you ready to go!!!

### Run it
```bash
npm start
```

### Deploy to S3
```bash
npm run deploy -- -r eu-west-1 -n blog-workshop-frontend
```
where -r is the region and -n is the CloudFormation stack name

### Remove from S3
```bash
npm run remove -- -r eu-west-1 -n blog-workshop-frontend
```
where -r is the region and -n is the CloudFormation stack name

### Feedback
mikael.puittinen@sc5.io