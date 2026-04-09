//
import {test} from '@playwright/test';
import { LoginPage } from './pages/loginpage';
import data from '../TestData/AdactinTestData.json';
import logindata from '../TestData/DataDrivenTestData.json';
import {excelReader} from "../utility/excelReader";
import { LoginPageDD } from './pages/loginDD';

const logindata1 = excelReader();
for (let DD of logindata1){
    
    test (`Data Driven Test using ${DD.UserName} and ${DD.Password}`, async ({page})=>{

    const loginDDObj = new LoginPage(page);

    await loginDDObj.navigate(data.url);
    await loginDDObj.login(DD.UserName,DD.Password,DD.Remark);
    
    
});
}
