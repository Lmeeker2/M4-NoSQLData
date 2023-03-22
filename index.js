//Calculate the loan


//Arrays
var array1 = [25000];
var array2 = [15000];
var array3 = [30000];
var array4 = [20000];
var array5 = [29000];

console.log('Grand total of loan 1 is ' + '$' +array1);
console.log('Grand total of loan 2 is ' + '$' +array2);
console.log('Grand total of loan 3 is ' + '$' +array3);
console.log('Grand total of loan 4 is ' + '$' +array4);
console.log('Grand total of loan 5 is ' + '$' +array5);


var sum = array1.map(function (num, idx) {
    return num + array2[idx] + array3[idx] + array4[idx] + array5[idx];
});
console.log('Grand total of all loans BEFORE interest = ' + '$' +sum)

// P V = P M T i [ 1 − 1 ( 1 + i) n]
// P = loan payment
// n = monthly payments per year
// r = interest rate
// PV = present value 

//end of Array


var loans = [ 
{
    customerName: 'John Doe',
    loanAmount: '25,000',
    interest: '5',
    amount: function(){
        return this.loanAmount * this.interest * 1;
    }
},

{customerName: 'John Doe', loanAmount: 25000, interest: 5, amount:
function(){
    return this.loanAmount * this.interest * 3;
}},
{customerName: 'John Star', loanAmount: 15000, interest: 5, amount:
function(){
    return this.loanAmount * this.interest;
}},
{customerName: 'Ava Max', loanAmount: 30000, interest: 6, amount:
function(){
    return this.loanAmount * this.interest;
}},
{customerName: 'Trae Hendrick', loanAmount: 20000, interest: 9, amount:
function(){
    return this.loanAmount * this.interest;
}},
{customerName: 'Jane Doe', loanAmount: 29000, interest: 8, amount:
function(){
    return this.loanAmount * this.interest;
}},
]


for(let i = 0 ; i <loans.length; i++){
    const loan = loans[i];
    const amt = loan.amount()
    console.log();
}
var loans = [
    {customerName: 'John Doe', loanAmount: 25000, interest: 5}, 
    {customerName: 'John Star', loanAmount: 15000, interest: 5},
    {customerName: 'Ava Max', loanAmount: 30000, interest: 6},
    {customerName: 'Trae Hendrick', loanAmount: 20000, interest: 9},
    {customerName: 'Jane Doe', loanAmount: 29000, interest: 8},

]

for(let i = 0 ; i <loans.length; i++){
    loans[i].amount = function(){
        if(loans[i].loanAmount < 1000){
            return loans[i].loanAmount * loans[i].interest * 0.5
        }
        else{
            return loans[i].loanAmount * loans[i].interest
        }
    };
}

for(let i = 0; i <loans.length; i++){
    const loan = loans[i];
    const amt = loan.amount();
    //console.log (amt);

    var total = loans.map(function (num, idx){
        return num + loans[i]
    })
   console.log ('Grand total AFTER interest = ' + '$' +amt)
}

