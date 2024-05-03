import * as fs from 'fs';
import * as XLSX from 'xlsx';

interface DataItem {
    id: number;
    name: string;
}

function createExcelFromJSON(jsonFilePath: string, excelFilePath: string) {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');

    try {
        const data: DataItem[] = JSON.parse(jsonData);
        const workbook = XLSX.utils.book_new();

        const worksheet = XLSX.utils.json_to_sheet(data);

        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        XLSX.writeFile(workbook, excelFilePath);

        console.log(`Excel file "${excelFilePath}" created successfully.`);
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}


const jsonFilePath: string = "./ecs-fields.json";
const excelFilePath: string = "./Book.xlsx";


createExcelFromJSON(jsonFilePath, excelFilePath);
