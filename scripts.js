// console.log('veikia')

// const car = "Mini"
// switch (car) {
//     case "VW":
//     case "Audi":
//     case "Bentley":
//     case "Bugatti":
//         console.log("VW gruop")
//         break
//     case "BMW":
//     case "Mini":
//     case "Rolls-Royce":
//         console.log("BMW group")
//         break
//     default:
//         console.log("I dont know")
// }

// const userInput = "Morka"
// switch (userInput) {
//     case "Slyva":
//     case "Apelsinas":
//     case "Obuolys":
//     case "Kriause":
//         console.log("Tai yra vaisius")
//         break;
//     case "Agurkas":
//     case "Bulve":
//     case "Morka":
//     case "Brokolis":
//         console.log("Tai yra darzove")
//         break;
// }

// const weekDay = "6"
// switch (weekDay) {
//     case "0":
//         console.log("Pirmadienis")
//         break;
//     case "1":
//         console.log("Antradienis")
//         break;
//     case "2":
//         console.log("Treciadienis")
//         break;
//     case "3":
//         console.log("Ketvirtadienis")
//         break;
//     case "4":
//         console.log("Penktadienis")
//         break;
//     case "5":
//         console.log("Sestadienis")
//         break;
//     case "6":
//         console.log("Sekmadienis")
//         break;
//     default:
//         console.log("nera tokios dienos")
// }

let weekDay = new Date().getDay();
switch (weekDay) {
  case 0:
    weekDay = 'Sekmadienis';
    break;
  case 1:
    weekDay = 'Pirmadienis';
    break;
  case 2:
    weekDay = 'Antradienis';
    break;
  case 3:
    weekDay = 'Trečiadienis';
    break;
  case 4:
    weekDay = 'Ketvirtadienis';
    break;
  case 5:
    weekDay = 'Penktadienis';
    break;
  case 6:
    weekDay = 'Šeštadienis';
    break;
}
console.log(weekDay);


//Pratimas 1
const myName = "Emma"
myName.length < 5 ? console.log("Short name") : console.log("Long name")

//Pratimas 2
const clientAge = 18
const legalAge = 18
clientAge >= legalAge ? console.log("Can Drive") : console.log("Cant Drive")

// //Pratimas 3
const clientAge1 = 135
const legalAge1 = 18
clientAge1 < 0 || clientAge1 > 120 ? console.log("Invalid age") : clientAge1 >= legalAge1 ? console.log("Can Drive") : console.log("Cant Drive")


//Pratimas 4
const phone = "iPhone"
const isIphoneUser = phone === "iPhone" ? console.log("True"): console.log("False")

// const phone1 = 'iPhone';
// const isIphoneUser1 = phone === 'iPhone';

