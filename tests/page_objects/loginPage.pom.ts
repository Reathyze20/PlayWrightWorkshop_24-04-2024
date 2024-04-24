import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    
    loginPage: Page;
    url: string;
    email:string;
    password: string;
    emailInput: Locator;
    passwordInput: Locator;
    button: Locator;

    constructor(page: Page){
        this.loginPage = page;
        this.url = 'http://37.27.17.198:8084/cs/p%C5%99ihl%C3%A1sit?back=http%3A%2F%2F37.27.17.198%3A8084%2Fcs%2Fp%25C5%2599ihl%25C3%25A1sit%3Fback%3Dmy-account'
        this.email = 'Tomas.Rambousek@tesena.com'
        this.password = 'Mjiq33R41993'
        this.emailInput = page.locator("//input[@id='field-email']")
        this.passwordInput = page.locator("//input[@id='field-password']")
        this.button = page.locator("//button[@id='submit-login']")
    }

    async fill_email(){
       await this.emailInput.fill(this.email)
    }

    async fill_password(){
        await this.emailInput.fill(this.password)
     }

    async click_loginButton(){
        await this.button.click()
    }

    async login_process(){
        await this.fill_email();
        await this.fill_password()
        await this.click_loginButton()

    }

}
