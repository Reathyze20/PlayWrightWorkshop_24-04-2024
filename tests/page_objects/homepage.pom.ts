import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    
    homepage: Page;
    url: string;
    menu_login_button: Locator;
    logged_user_button: Locator;

    constructor(page: Page){
        this.homepage=page
        this.url = 'http://37.27.17.198:8084/cs/'
        this.menu_login_button = page.locator("//div[@class='user-info']/a[@title='Přihlášení k vašemu zákaznickému účtu']")
        this.logged_user_button = page.locator("//div[@class='user-info']/a[@class='account']")
    }

    async visit(){
       await this.homepage.goto(this.url)
    }

    async navigate_to_login(){
        await this.menu_login_button.click()
    }

    async check_user_is_logged_in(){
        await expect(this.logged_user_button).toBeVisible;
    }
}