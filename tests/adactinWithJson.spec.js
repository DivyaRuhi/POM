//
import {test,expect} from "@playwright/test";
import { LoginPage } from "./pages/loginpage";
import { SearchPage } from "./pages/searchpage";
import { SelectPage } from "./pages/selectpage";
import { BookingPage } from "./pages/bookingpage";
import data from '../TestData/AdactinTestData.json';

test ("Adactin Hotel App", async ({page})=>{

    const loginobj= new LoginPage(page);
    const searchobj= new SearchPage(page);
    const selectobj= new SelectPage(page);
    const bookobj= new BookingPage(page);

await loginobj.navigate();
await loginobj.login();
await searchobj.searchpage();
await selectobj.selectpage();
await bookobj.booking();

await page.waitForTimeout(3000);

})