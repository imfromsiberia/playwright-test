const {chromium} = require('playwright');

(async () => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://beta.bcs-express.ru/signup');
    await page.click('[placeholder="Имя"]');
    await page.fill('[placeholder="Имя"]', 'Александр');
    await page.click('[placeholder="Фамилия"]');
    await page.fill('[placeholder="Фамилия"]', 'Фурсов');
    await page.click('[placeholder="Телефон"]');
    await page.fill('[placeholder="Телефон"]', '+7 913 489 4665_');
    await page.click('[placeholder="E-mail"]');
    await page.fill('[placeholder="E-mail"]', 'Sasha.fursof@gmail.com');
    await page.click('[placeholder="Пароль"]');
    await page.fill('[placeholder="Пароль"]', '123qwe');
    await page.click('button:has-text("Зарегистрироваться")');
    await page.click('[placeholder="SMS-код"]');
    await page.click('text=Подтверждение');
    await browser.close();
    
})();
