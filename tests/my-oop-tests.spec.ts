import {test, expect} from '@playwright/test'
import { HomePage } from './page_objects/homepage.pom'
import { LoginPage } from './page_objects/loginPage.pom'

let shop_homepage: HomePage
let login_page: LoginPage

test.describe("My suite", () => {
    test.beforeEach(async({page}) => {
          shop_homepage = new HomePage(page)
          login_page = new LoginPage(page)
        await shop_homepage.visit()
    })

    test('Smoke test', async({page}) => {
        await expect(page).toHaveTitle("PrestaShop")
    })
    
    test('Login test', async () => {
        await shop_homepage.navigate_to_login()
        await login_page.login_process()
        await shop_homepage.check_user_is_logged_in()
        })

})