//
import { test as base } from "@playwright/test";
import { LoginPage } from "../tests/pages/loginpage";
import data from "../TestData/AdactinTestData.json";

export const mytest = base.extend({
    loginfixture: async ({page},use) => {
        
        const loginobjF= new LoginPage(page);
        await loginobjF.navigate(data.url);
        await loginobjF.login(data.username,data.password);
        await use(page);

    }
 }
 )
 