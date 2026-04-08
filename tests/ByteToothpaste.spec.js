import { test, expect} from "@playwright/test"

test ("bite", async({page})=>{

    await page.goto("https://bitetoothpastebits.com/");

    await page.locator(".hero__title.heroTitle_ohkl");
        console.log('Step: Verify the title is Located');
        await expect(page.locator(".hero__title.heroTitle_ohkl"))
        .toHaveText("Playwright enables reliable web automation for testing, scripting, and AI agents.");
        console.log('Step: Verify the title is visible');
        await page.locator(".getStarted_Sjon").click();
        await expect(page).toHaveURL("https://playwright.dev/docs/intro");
        console.log("URL validated")
        await expect(page.locator("h1")).toHaveText("Installation");
        console.log("Successfully navigated to installation Page.")


})