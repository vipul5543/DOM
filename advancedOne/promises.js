const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async task 2 completed');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "vipul", email: "vipuls.6654@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"vipul", password:"12345"})
        }else{
            reject('ERROR: SOMETHING WENT WRONG')
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function (error) {
    console.log(error);
}).finally(()=>console.log("THE PROMISE IS EITHER RESOLVED OR REJECTED"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript", password:"12345"})
        }else{
            reject('ERROR: JS WENT WRONG')
        }
    },1000)
})

async function consumePromioseFive(){
    try {
        const response = await promiseFive
         console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromioseFive();


// async function getAllUsers(){
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

