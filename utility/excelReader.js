//
import XLSX from 'xlsx';

export function excelReader(){

const path = "TestData/UtilityDD.xlsx";
const workbook= XLSX.readFile(path);
const sheetname = workbook.SheetNames[0];
const worksheet= workbook.Sheets[sheetname];
const data= XLSX.utils.sheet_to_json(worksheet);
return data;

}
