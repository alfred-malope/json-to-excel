"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const XLSX = __importStar(require("xlsx"));
function createExcelFromJSON(jsonFilePath, excelFilePath) {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
    try {
        const data = JSON.parse(jsonData);
        const workbook = XLSX.utils.book_new();
        // Convert JSON data to a worksheet
        const worksheet = XLSX.utils.json_to_sheet(data);
        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        // Write the workbook to an Excel file
        XLSX.writeFile(workbook, excelFilePath);
        console.log(`Excel file "${excelFilePath}" created successfully.`);
    }
    catch (error) {
        console.error('Error parsing JSON:', error);
    }
}
const jsonFilePath = "./your file path.json";
const excelFilePath = "./your file path.xlsx";
createExcelFromJSON(jsonFilePath, excelFilePath);
//# sourceMappingURL=index.js.map
