/* //
import {test,expect} from "@playwright/test";
import { LoginPage } from "./pages/loginpage";
import { SearchPage } from "./pages/searchpage";
import { SelectPage } from "./pages/selectpage";
import { BookingPage } from "./pages/bookingpage";

test ("Adactin Hotel App", async ({page})=>{

    const loginobj= new LoginPage(page);
    const searchobj= new SearchPage(page);
    const selectobj= new SelectPage(page);
    const bookobj= new BookingPage(page);

await loginobj.navigate();
await loginobj.login();

await searchobj.searchpage(
    {loc:{value:"Sydney"},
    hotel:{value:"Hotel Sunshine"},
    roomtype:{value:"Standard"},
    noofrooms: {value: "2"},
    adult: {value:"2"},
    cr: {value:"0"}}
);

await selectobj.selectpage();
await bookobj.booking(
    {cc: {value:"VISA"},
    expm: {value:"5"},
    expy: {value:"2028"}}
);
await page.waitForTimeout(5000);
}) */