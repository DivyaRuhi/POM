import {expect} from "@playwright/test";
export class SelectPage{
    constructor(page){
        this.page= page;
        this.select= page.locator("#radiobutton_0");
        this.continuebutton= page.locator('[name="continue"]');
    }

    async selectpage(){
        await this.select.click();
        await this.continuebutton.click();
        //await expect(this.page).toHaveURL("https://adactinhotelapp.com/BookHotel.php");


    }
}