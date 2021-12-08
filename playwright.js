const playwright = require('playwright');

(async () => {
    for (const browserType of ['chromium', 'firefox', 'webkit']) { // 確認対象のブラウザリスト
        const browser = await playwright[browserType].launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('http://localhost:3000'); // 試験対象ページへアクセス
        await page.screenshot({
          path: `example-${browserType}.png`,
          fullPage: true,
        });
        await browser.close(); // ブラウザを閉じる
    }
})();