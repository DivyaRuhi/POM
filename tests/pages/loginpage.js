//
import {expect} from "@playwright/test";
import data from '../../TestData/AdactinTestData.json'
export class LoginPage{
    constructor(page){
        this.page=page;
        this.username= page.locator("#username");
        this.password= page.locator("#password");
        this.loginbutton= page.locator('[class="login_button"]');

    }

    async navigate(){
    await this.page.goto(data.url);
    }

    async login(){
await this.username.fill(data.username);
await this.password.fill(data.password);
await this.loginbutton.click();
//await expect(this.page).toHaveURL("https://adactinhotelapp.com/SearchHotel.php");
    } 
}