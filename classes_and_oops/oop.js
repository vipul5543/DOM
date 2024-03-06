const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
   
    getUserDetails: function(){
        // console.log("Got user detail");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(userName, loginCount, isLoggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    
    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }
    return this

}

const userOne = new User("vipul", 12, true)
const userTwo = new User("Atul", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);