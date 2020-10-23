# Spotlightme

## How to configure your own site with this template

1. Fork this repository
2. If you don't already, install npm using `brew install node` or [here](https://www.npmjs.com/get-npm)
3. Install the Severless framework with `npm install -g serverless`
4. While the installation runs, make an account on [serverless](https://www.serverless.com/), [airtable](https://airtable.com/), [aws](https://console.aws.amazon.com/console)
5. Make a duplicate of the following airtable [base](https://airtable.com/invite/l?inviteId=invONU6OCnLDCzX4y&inviteToken=da7ded239d759cc6c2de664057fd5d78e68d248af8425e5d19926b14ed283d5c)
6. Open this project in your terminal and run: `cd client; sls`
7. Follow the instructions from serverless to configure your environment and create aws credentials on your machine
8. Go to serverless dashboard and create app and go to `serverless framework` to deploy an existing project
9. Choose an app name and hit deploy. 8 8. There should be 2 lines that resemble:

```
app: spotlightme
org: abhi5415
```

on the deployment page. Open `server/severless.yml` and replace the keys shown there.

9. Do the same for `client/serverless.yml`.
10. cd to the server folder and run `npm install`

11. Create a serverless service under your project called `backend`.
12. Go to the Airtable account settings and copy the API key into the Serverless `backend` service settings.
13. Go to [AWS Route 53](console.aws.amazon.com/route53) and buy a domain name.
14. cd to the client folder and run

```
yarn install
yarn build
sls deploy
```

# 13. Go to AWS console, setup an IAM key thingie.

15.

## Setting Up Icons in Airtable

### You may have noticed the icon section in Airtable. In order to have your own custom icons, you'll need to do the following.

1. Go to [fontawesome](https://fontawesome.com/) and search for the icon you want. Then in Airtable under the icon section, write the prefix (e.g. fas, fab etc.) followed by the name of icon without the fa- seperated by a comma and space (`fab, linkedin`)

_Note that the icons you select must part be either fas or fab and must be part of the free version of fontawesome._

For example, after selecting the [github](https://fontawesome.com/icons/github?style=brands) icon and clicking on "start using this icon", you need to input `fab, github` into the icon column
