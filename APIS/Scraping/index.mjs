import {chromium} from "playwright"

const browser = await chromium.launch({
    headless: true, // Set to true if you want to run in headless mode
})

const page = await browser.newPage()
await page.goto("https://developer.chrome.com/docs/ai/summarizer-api?hl=es-419") 

const mainContent = await page.$$eval("devsite-nav-title", elements => {
    console.log(elements)
    return elements.map(element => element.querySelector("span").innerText.trim())
})

console.log(mainContent)
await browser.close()