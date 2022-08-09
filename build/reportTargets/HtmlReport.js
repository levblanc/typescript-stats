"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
const fs_1 = __importDefault(require("fs"));
class HtmlReport {
    print(report) {
        const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;
        try {
            fs_1.default.writeFileSync('report.html', html);
            console.log('Html Report generated');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.HtmlReport = HtmlReport;
