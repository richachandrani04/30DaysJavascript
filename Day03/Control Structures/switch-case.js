// Activity 3 -> Switch case
//Task 4 ->Determine day of weeks(1-7).

const dayOfWeek = (n) => {
    switch(n) {
        case 1: console.log("Monday");
        break;
        case 2: console.log("Tuesday");
            break;
        case 3: console.log("Wednesday");
            break;
        case 4: console.log("Thursday");
            break;
        case 5: console.log("Friday");
            break;
        case 6: console.log("Saturday");
            break;
        case 7: console.log("Sunday");
            break;
    }
}
dayOfWeek(6)

//Task 5 ->Mark sheet.
const marksheet = (score) => {
    switch(true) {
        case (score >= 90 && score <=100):
            console.log("A grade")
            break;
        case (score >= 80 && score <90):
            console.log("B grade")
            break;
        case (score >= 70 && score <80):
            console.log("C grade")
            break;
        case (score >= 60 && score <70):
            console.log("D grade")
            break;
        case (score >= 35 && score <60):
            console.log("E grade")
            break;
        case (score >= 0 && score <35):
            console.log("F grade")
            break;
    }
}
marksheet(89)