To run tests on Browserstack:
npm i -D browserstack-node-sdk@latest
npx setup --username "BROWSERSTACK_USERNAME" --key "BROWSERSTACK_ACCESS_KEY"

npx browserstack-node-sdk <Your existing command for running your test suite>

For this repo: npx browserstack-node-sdk playwright test
