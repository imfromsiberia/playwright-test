const { LoginPage } = require('loginpage');

const page = await browser.newPage();
const searchPage = new LoginPage(page);
await searchPage.navigate();
await searchPage.getStarted();