function createBankAccount(accHolder,mobile,email,balance){
    return {
        accountHolder : accHolder,
        mobile : mobile,
        email : email,
        balance : balance,

        deposit(amount){
            this.balance += amount;

            console.log(sendDepositEmail.call(this,amount));
        },

        withdraw(amount){
            this.balance -= amount;
            
            console.log(sendWithdrawEmail.call(this,amount)); 
        },

        checkBalance(){
            console.log(`Your balance is ${this.balance}`);
        },

        checkBankProfile(){
            console.log(`Account Holder = ${accHolder} `);
            console.log(`Mobile no. = ${mobile}`);
            console.log(`Email = ${email}`);
            console.log(`Account Balance = ${this.balance}`)
        }
    }
}

//email for withdrawing money
function sendWithdrawEmail(amount){
    return `To ${this.accountHolder},
    This is to inform you that amount of Rs.${amount} is withdrawn`;
}

//email for depositing money
function sendDepositEmail(amount){
    return `To ${this.accountHolder},
    This is to inform you that amount of Rs.${amount} is deposited`;
}


let person1 = createBankAccount("Shreya",8947,"xyz@gmail.com",14589);

person1.withdraw(50);

person1.deposit(145);
person1.checkBankProfile();