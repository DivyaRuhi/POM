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
    await this.page.goto(url);
    }

    async login(UN,Pwd,result){
await this.username.fill(UN);
await this.password.fill(Pwd);
await this.loginbutton.click();
if (result == "Pass"){
    await expect(this.page).toHaveURL("https://adactinhotelapp.com/SearchHotel.php");
    
}
else{
await expect(this.page).toHaveTitle("Adactin.com - Hotel Reservation System");

}    
} 
}