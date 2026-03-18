import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../testdata/data5.json'), 'utf-8')
);

test('Upload file using JSON data and validate uploaded file', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

  const filePath = path.join(__dirname, '..', data.filepath);

  await page.setInputFiles('#file-upload', filePath);

  await page.click('#file-submit');

  await page.waitForURL('**/upload');

  const uploadedFileName = await page.locator('#uploaded-files').textContent();

  await expect(uploadedFileName?.trim()).toBe(data.expectedName);

 
  await page.screenshot({ path: 'upload-success.png', fullPage: true });

});