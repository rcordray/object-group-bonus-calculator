var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "96000", reviewRating: 5 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
// robert's rating was too low, as was his salary

console.log(employees);

console.log(employees[0].employeeNumber);

function compensationCalculator(employee) {
console.log(employee);
  var employeeCompensation = {};
  employeeCompensation.name = employee.name;
  employeeCompensation.bonusPercentageCalculator = bonusPercentageCalculator(employee);


  return employeeCompensation;
}

function bonusPercentageCalculator(employee) {
  var bonusPercentage;

  //creating base bonusPercentage based on reviewRating
  if (employee.reviewRating == 5) {
    bonusPercentage = 0.1;
  } else if (employee.reviewRating == 4) {
    bonusPercentage = 0.06;
  } else if (employee.reviewRating == 3) {
    bonusPercentage = 0.04;
  } else if (employee.reviewRating <= 2) {
    bonusPercentage = 0;
  }
  //employees five percent bonus for employees with four digit employee numbers
  if (employee.employeeNumber.length == 4) {
    bonusPercentage += .05;
  }
  //removing one percent of bonus for making over 65k
  if (employee.annualSalary > 65000) {
    bonusPercentage -= .01;
  }
  //no bonus can be above 13%
  if (bonusPercentage > .13) {
    bonusPercentage = .13;
  } else if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }
  return bonusPercentage;
}

console.log(compensationCalculator(atticus));
console.log(compensationCalculator(jem));
console.log(compensationCalculator(robert));

for (var i = 0; i < employees.length; i++) {
  console.log(compensationCalculator(employees[i]));
}



// function Bonus(emp) {
//     this.name = emp.name;


//     this.bonus% = function {
//         return this.rate% + this.employ#% - this.annsal%

//     }

// }

// var jemBonus = new Bonus(jem);
// console.log(jemBonus);
