import { MatchReader } from "./MatchReader";
// import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { HtmlReport } from "./reportTargets/HtmlReport";

// Inheritance approach
// const reader = new MatchReader('football.csv')
// reader.read()
// console.log(reader.data[0][0])

// Interface approach
// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satisfying 
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
//   // new HtmlReport()
// )

const summary = Summary.winsAnalysisWithHtmlReport('Man United')
summary.buildAndPrintReport(matchReader.matches)