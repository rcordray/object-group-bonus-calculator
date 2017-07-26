var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);




//bonus% = reviewrating% + employeenumber% + thisrating%



// function Bonus(emp) {
//     this.name = emp.name;
    
    
//     this.bonus% = function {
//         return this.rate% + this.employ#% - this.annsal%
    
//     }

// }

// var jemBonus = new Bonus(jem);
// console.log(jemBonus);

function calculateBonus (employee) {
    var bonusPercentage = 0;
    console.log(employee.annualSalary);
    

    if (employee.reviewRating <= 2) {
        bonusPercentage += 0;
    } else if (employee.reviewRating === 3 ){
        bonusPercentage += 0.04;
    } else if (employee.reviewRating === 4 ){
        bonusPercentage += 0.06;
    } else if (employee.reviewRating === 5 ){
        bonusPercentage += 0.10;
    };

    if (employee.employeeNumber.length === 4) {
        bonusPercentage += 0.05;
    }

    if (employee.annualSalary > 65000) {
        bonusPercentage -= 0.01;
    }

    var bonus = bonusPercentage * employee.annualSalary;
    console.log(bonus);
    
    bonus += parseInt(employee.annualSalary);

    return bonus; // .05
}

console.log(calculateBonus(atticus));