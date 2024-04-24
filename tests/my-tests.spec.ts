import { expect, test } from '@playwright/test'

test.describe("PrestaShop suit", () => {

    test.beforeEach(async({page}) =>{
        await page.goto('http://37.27.17.198:8084/cs/')
    })

    test('Smoke test', async ({page}) => {
    await expect(page).toHaveTitle("PrestaShop")
    await page.waitForTimeout(5000)
    });

    test('Login test', async ({page}) => {

    const loginTitle = page.locator("//div[@class='user-info']/a[@title='Přihlášení k vašemu zákaznickému účtu']")
    const loginName = page.locator("//input[@id='field-email']")
    const loginPassword = page.locator("//input[@id='field-password']")
    const loginButtonSubmit = page.locator("//button[@id='submit-login']")

    await loginTitle.click()
    await loginName.fill('Tomas.Rambousek@tesena.com')
    await loginPassword.fill('Mjiq33R41993')
    await loginButtonSubmit.click()

    await page.waitForTimeout(5000)
    })
})
