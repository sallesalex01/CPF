const puppeteer = require('puppeteer');

module.exports = async function(cpf)
{
    // Verifica se o CPF é válido   
    
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto('https://www.situacao-cadastral.com/');
    await page.screenshot({ path: 'example.png' });
  
    await browser.close();
}