//Laura V. Bullock - 9/21/2021 - Chaining Methods Assignment

//Create a file with the User class, including the constructor
class User {
    constructor(name, accountBalance = 0) {         //our method has 2 parameters!
        this.name = name;                           //we use the values passed in to set the name attribute
        this.accountBalance = accountBalance;       //the account balance is set to $0, so no need for a third parameter
        
    }

    //Add a makeDeposit method to the User class
    makeDeposit(amount) {                   //takes a parameter this is the amount of the deposit
        this.accountBalance += amount;      //the specific user's account increases by the amount of the value received
        return this;                        //  remember to return this when chaining methods
    }

    //Add a makeWithdrawal method to the User class
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;                        //  remember to return this when chaining methods
    }

    //Add a displayBalance method to the User class
    displayBalance() {
        console.log("User: ", this.name + "\t\tBalance:  $", this.accountBalance)
        return this;                        //  remember to return this when chaining methods
    }

    transferMoney(otherUser, amount) {
        otherUser.makeDeposit(amount);
        this.makeWithdrawal(amount);
        return this;                        //  remember to return this when chaining methods
    }
}

//Create 3 instances of the User class
const guido = new User("Guido van Rossum")    //instance 1
const monty = new User("Monty Python")        //instance 2
const dojo = new User("Coding Dojo")       //instance 3


//CHAINING METHODS
//Have the first user make 3 deposits and 1 withdrawal and then display their balance
guido.makeDeposit(150).makeDeposit(200).makeDeposit(200).makeWithdrawal(500).displayBalance();

//Have the second user make 2 deposits and 2 withdrawals and then display their balance
monty.makeDeposit(400).makeDeposit(200).makeWithdrawal(100).makeWithdrawal(150).displayBalance();

//Have the third user make 1 deposits and 3 withdrawals and then display their balance
dojo.makeDeposit(10000).makeWithdrawal(1500).makeWithdrawal(300).makeWithdrawal(300).displayBalance();

//BONUS: Add a transferMoney method; have the first user transfer money to the third user and then print both users' balances

console.log("\x1b[32m" + "\x1b[4m" + "\n" + guido.name + " Transfers Funds to " + dojo.name + "\x1b[0m")
guido.transferMoney(dojo,10)    //Guido is transferring $50 to Coding Dojo

console.log("\n" + "\x1b[43m" + "\x1b[30m" + "Balances after Transfer:" + "\x1b[0m")
guido.displayBalance()          //print Guido's new balance
dojo.displayBalance()           //print Coding Dojo's new balance


//Resource for terminal console.log colors:
// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

// Colors reference

// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"