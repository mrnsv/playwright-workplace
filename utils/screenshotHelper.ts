import { Page, TestInfo } from '@playwright/test';
import fs from 'fs';
import path from 'path';

/**
 * Captures a screenshot of the current page.
 * Saves to ./screenshots/[test-title]/[timestamp]-[name].png
 */
export async function captureScreenshot(
  page: Page,
  name: string,
  testInfo?: TestInfo
): Promise<void> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const testDir = testInfo?.title
    ? path.join('screenshots', sanitizeFilename(testInfo.title))
    : 'screenshots';

  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir, { recursive: true });
  }

  const filePath = path.join(testDir, `${timestamp}-${name}.png`);

  await page.screenshot({
    path: filePath,
    fullPage: true
  });

  console.log(`✅ Screenshot saved: ${filePath}`);
}

/**
 * Sanitizes file and directory names for cross-platform compatibility.
 */
function sanitizeFilename(name: string): string {
  return name.replace(/[<>:"/\\|?*]+/g, '-');
}
