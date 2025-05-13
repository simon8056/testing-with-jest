// Jag har inte firefox så kör det i separat fil

const { Builder } = require('selenium-webdriver');

test('mitt test: öppna sidan', async () => {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('file:///Users/simonsjoholm/projekt/testing-with-jest/src/index.html');
    await driver.quit();
})