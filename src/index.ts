import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

// Inheritance approach
// const reader = new MatchReader('football.csv')
// reader.read()
// console.log(reader.data[0][0])

// Interface approach
// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and pass in something satisfying 
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load()

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
    manUnitedWins++;
}

console.log(`Man United won ${manUnitedWins} games`)