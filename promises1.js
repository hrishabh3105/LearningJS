const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete')
        resolve(); // connecting resolve to .then 
    },1000)
})

promiseOne.then(function(){     // .then method is connected to resolve 
    console.log('Promise consumed')
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('async task 2')
        resolve();
    }, 1000);
}).then(()=>{
    console.log('async 2 resolved')
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Hrishabh", email: "hrishabhmishra123@gmail.com"})
    }, 1000);
})

promiseThree.then(function(user){     //since .then has connection with resolve
    console.log(user);              //whatever parameter we pass onto the resolve we can access it here 
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "Hrishabh", password: "123"});
        } else{
            reject('Error: Something went wrong')
        }
    }, 1000);
})
promiseFour.then( (user)=>{
    return user.username
}).then((username)=>{       //this is then chaining whaterver previous then returns we can access it in the next then's argument
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{
    console.log('the promise is either resolved or rejected')
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "123"});
        } else{
            reject('Error: Js went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){            
   try {
         const response = await promiseFive         //error handling in async await 
    console.log(response)
   } catch (error) {
    console.log(error)
   }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const resopnse = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await resopnse.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:", error)
//     }
// }
// getAllUsers();

//same way of doing above is

fetch('https://jsonplaceholder.typicode.com/users') //fetch() returns a promise object that is why we can use .then with it
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log(e)
})

