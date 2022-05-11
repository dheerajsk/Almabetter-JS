// Using Default Paratemer.


function calculateTakeHomeSalary(annualIncome, taxRate=30){
    console.log(taxRate);
    const taxAmount = (annualIncome*taxRate)/100;
    console.log(taxAmount);
    const takeHomeSalary = annualIncome-taxAmount;
    console.log(takeHomeSalary);
}

// calculateTakeHomeSalary(100000, 10);
// calculateTakeHomeSalary(100000);
calculateTakeHomeSalary(100000, null);