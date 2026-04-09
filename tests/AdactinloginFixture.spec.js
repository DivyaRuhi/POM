
import {test,expect} from "@playwright/test";
//import { LoginPage } from "./pages/loginpage";
import { SearchPage } from "./pages/searchpage";
import data from '../TestData/AdactinTestData.json';
import { mytest } from "../fixture/loginfixture";

mytest ("Adactin login", async ({loginfixture})=>{

    //const loginobj= new LoginPage(page);
    const searchobj= new SearchPage(loginfixture);
  

//await loginobj.navigate();
//await loginobj.login();
await searchobj.searchpage();

//await page.waitForTimeout(3000);

})