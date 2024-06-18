## Running Tests on BrowserStack

**Installation:**

1. Install the `browserstack-node-sdk` package as a development dependency:

   ```bash
   npm install -D browserstack-node-sdk@latest
   ```

2. Setup browserstack configurations in `browserstack.yml` file

   ```bash
   npx setup --username "BROWSERSTACK_USERNAME" --key "BROWSERSTACK_ACCESS_KEY"
   ```

3. Run your tests

   ```bash
   npx browserstack-node-sdk <Your existing command for running your test suite>
   ```

   ```bash
   npx browserstack-node-sdk playwright test
   ```
