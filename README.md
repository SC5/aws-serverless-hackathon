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
To deploy frontend web application to S3 run
```bash
npm run deploy-stack
```
which creates a S3 bucket with website hosting to your default region.

To create bucket to custom region with custom CloudFormation stack name, 
use parameter `-r` for region and `-n` for stack name e.g.

```bash
npm run deploy-stack -- -r eu-west-1 -n my-blog-workshop-frontend
```

### Remove from S3
To remove deployed web application from S3 run 

```bash
npm run remove-stack
```

If you've defined custom region or stack name, same `-r` and `-n` parameters
should be used when removing application.

### Feedback
mikael.puittinen@sc5.io