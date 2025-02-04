// original data from NASA
const messyNasaData = [
    ['ufos', 7, '7th July, 1982'],
    ['asteroids', 3, '16th March, 2019'],
    ['intergalactic dolphins', 1, '27th April, 2015'],
    ['solar flare', 1, '17th March, 2019'],
    ['radioactive space tyrannosaurus', 14, '1st January, 1912'],
];

/*
We have to prepare reports for the American President. Her name is 
Dr. Yamoto, first ever female president of America and she needs it now
and in a clean and organised manner. First structure the messy data NASA
gave us and create an urgent report class that has a info about how many
are coming, when and what is coming. We need to have an instance of every
class of the info we got from NASA then reorganise it into an array.
Solve it with reduce, then map, then foreach.
*/
// starting with the class
class urgentReports {
    constructor(whatsComing, howmany, when){
        this.whatsComing = whatsComing;
        this.howmany = howmany;
        this.when = when;
    }
}
const cleanData = messyNasaData.reduce((acc, el) => {
    // create report
    const what = el[0];
    const howMany = el[1];
    const when = el[2];
    const nextReport = new urgentReports(what, howMany, when);
    // store the information
    acc[what] = nextReport; 
    return acc;
}, {});
console.log(cleanData)

// using map
// const map =  messyNasaData.map(( el) => {
//     const newReport = new urgentReports(el[0], el[1], el[2]); // creating a new instance
//     return newReport;
// });
// console.log(map);

// // using foreach.
// let finalReport = []
// const foreach =  messyNasaData.forEach(( el) => {
//     const newReport = new urgentReports(el[0], el[1], el[2]); // creating a new instance
//     finalReport.push(newReport);
// });
// console.log(finalReport);
