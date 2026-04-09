import {expect} from "@playwright/test";
import data from '../../TestData/AdactinTestData.json';
export class BookingPage{
    constructor(page){
        this.page=page;
        this.fname= page.locator('[name="first_name"]');
        this.lname= page.locator("#last_name");
        this.address= page.locator("#address");
        this.CCno= page.locator("#cc_num");
        this.cctype= page.locator('[name="cc_type"]');
        this.expmonth= page.locator("#cc_exp_month");
        this.expyear= page.locator("#cc_exp_year");
        this.CCVno= page.locator("#cc_cvv");
        this.book= page.locator("#book_now");
        this.bookingID = page.locator("#order_no");
    }

async booking(){

        await this.fname.fill(data.FirstName);
        await this.lname.fill(data.LastName);
        await this.address.fill(data.Address);
        await this.CCno.fill(data.CCno);
        await this.cctype.selectOption(data.CCType);
        await this.expmonth.selectOption(data.ExpMonth);
        await this.expyear.selectOption(data.ExpYear);
        await this.CCVno.fill(data.CCVno);
        await this.book.click();
        console.log(" BookingID: ", await this.bookingID.inputValue());

}
}

    /* async booking(cc,expm,expy){

        await this.fname.fill("Maya");
        await this.lname.fill("Shree");
        await this.address.fill("Chennai");
        await this.CCno.fill("1234678900001111");
        await this.cctype.selectOption(cc);
        await this.expmonth.selectOption(expm);
        await this.expyear.selectOption(expy);
        await this.CCVno.fill("123");
        await this.book.click(); */


    