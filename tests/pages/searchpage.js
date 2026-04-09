//
import {expect} from "@playwright/test";
import data from '../../TestData/AdactinTestData.json';
export class SearchPage{
    constructor(page){
        this.page= page;
        this.location= page.locator("#location");
        this.Hotels= page.locator('[name="hotels"]');
        this.roomtype= page.locator("#room_type");
        this.noOfrooms= page.locator("#room_nos");
        this.checkindate= page.locator('#datepick_in');
        this.checkoutdate= page.locator("#datepick_out");
        this.adults= page.locator('[name="adult_room"]');
        this.childroom= page.locator("#child_room");
        this.search= page.locator("#Submit");
        this.reset= page.locator("#Reset");
    }


async searchpage(){

await this.location.selectOption(data.location);
await this.Hotels.selectOption(data.HotelName);
await this.roomtype.selectOption(data.Roomtype);
await this.noOfrooms.selectOption(data.noofRooms);
await this.checkindate.fill(data.checkin);
await this.checkoutdate.fill(data.checkout);
await this.adults.selectOption(data.Adults);
await this.childroom.selectOption(data.Child);
await this.search.click();
}
}

/* await searchobj.searchpage(
    {loc:{value:"Sydney"},
    hotel:{value:"Hotel Sunshine"},
    roomtype:{value:"Standard"},
    noofrooms: {value: "2"},
    adult: {value:"2"},
    cr: {value:"0"}}
); */


/* async searchpage({loc,roomtype,noofrooms,adult,cr}){

await this.location.selectOption(loc);
await this.Hotels.selectOption("Hotel Sunshine");
await this.roomtype.selectOption(roomtype);
await this.noOfrooms.selectOption(noofrooms);
await this.checkindate.fill("01/04/2026");
await this.checkoutdate.fill("02/04/2026");
await this.adults.selectOption(adult);
await this.childroom.selectOption(cr);
await this.search.click();
//await expect(this.page).toHaveURL("https://adactinhotelapp.com/SelectHotel.php");
}
} */