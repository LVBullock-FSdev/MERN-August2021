//Create a file with the User class, including the constructor
class User {
    constructor(userName, emailAddress) {   //our method has 2 parameters!
        this.name = userName                //we use the values passed in to set the name attribute
        this.email = emailAddress           //and the email attribute
        this.accountBalance = 0             //the account balance is set to $0, so no need for a third parameter
        
    }

    //Add a makeDeposit method to the User class
    makeDeposit(amount) {                   //takes a parameter this is the amount of the deposit
        this.accountBalance += amount;      //the specific user's account increases by the amount of the value received
    }

    //Add a makeWithdrawal method to the User class
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }

    //Add a displayBalance method to the User class
    displayBalance() {
        // console.log("User:  " + this.name + ", Balance:  ", + this.accountBalance)
        console.log("User: ", this.name + ", Balance:  ", this.accountBalance)
    }

    transferMoney(otherUser, amount) {
        otherUser.makeDeposit(amount);
        this.makeWithdrawal(amount);
    }
}

//Create 3 instances of the User class
const guido = new User("Guido van Rossum", "guido@python.com")    //instance 1
const monty = new User("Monty Python", "monty@python.com")        //instance 2
const laura = new User("Laura Bullock", "laura@python.com")       //instance 3

//Have the first user make 3 deposits and 1 withdrawal and then display their balance
guido.makeDeposit(150)
guido.makeDeposit(200)
guido.makeDeposit(200)
guido.makeWithdrawal(500)
guido.displayBalance()

//Have the second user make 2 deposits and 2 withdrawals and then display their balance
monty.makeDeposit(400)
monty.makeDeposit(200)
monty.makeWithdrawal(100)
monty.makeWithdrawal(150)
monty.displayBalance()

//Have the third user make 1 deposits and 3 withdrawals and then display their balance
laura.makeDeposit(10000)
laura.makeWithdrawal(1500) //coding dojo deposit
laura.makeWithdrawal(300)  //coding dojo payment 1
laura.makeWithdrawal(300)  //coding dojo payment 2
laura.displayBalance()

//BONUS: Add a transferMoney method; have the first user transfer money to the third user and then print both users' balances

guido.displayBalance()    //print Guido's current balance
guido.transferMoney(laura,10) //Guido is transferring $50 to Laura
guido.displayBalance()    //print Guido's new balance
laura.displayBalance()    //print Laura's new balance
