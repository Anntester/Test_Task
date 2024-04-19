const puppeteer = require('puppeteer');

async function googleSearch(query) {
  // Launch a new browser session, change headless to true to hide the progress
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to Google
  await page.goto('https://www.google.com');

  // Click the "Accept all" button if it exists
  const acceptCookiesSelector = '#L2AGLb';
  await page.waitForSelector(acceptCookiesSelector);
  await page.click(acceptCookiesSelector);

  // Enter the search query
  const searchInputSelector = '[aria-label="Search"]';
  await page.waitForSelector(searchInputSelector);
  await page.type(searchInputSelector, query);

  // Submit the search form
  await page.keyboard.press('Enter');

  const firstSearchResultSelector =
    '#tads > div:nth-child(3) > div > div > div > div.v5yQqb > a';
  await page.waitForSelector(firstSearchResultSelector);
  await page.click(firstSearchResultSelector);

  // Uncomment fot automatic browser close
  // await browser.close();
}

// Replace 'example search' with your search query
googleSearch('samsung galaxy');
