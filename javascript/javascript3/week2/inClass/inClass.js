console.log("script loaded!");

// what is async programming?
// why do we need it?
// give an example of async programming
// is it easy or hard to understand, why? 
// write a very simple example and talk about it 


// console.log("before");
// setTimeout(() => {
//     console.log("hello");
// }, 5000);
// console.log("after");
// timeout is actually the minimum timeout - it will do when the stack is empty 


// async await  - same thing, just syntactic sugar 


async function getAstronauts() {
    try {
        const astronautsResponse = await fetch(
            "http://api.open-notify.org/astros.json"
        );
        const astronauts = await astronautsResponse.json();
        return astronauts;
    } catch(err) {
        throw "Fetchin the astronauts went wrong";
    }
}

const astronauts = getAstronauts();

// ex 1
// fetch yes or no from this api: https://yesno.wtf/api. log out the answer

// async function fetchYesNO(){
//     const fetchIt = await fetch("https://yesno.wtf/api");
//     const yesNo =  await fetchIt.json(); // this line is also a promise 
//     console.log(yesNo);
//     console.log(yesNo.answer);
//     return yesNo;
// }

// fetchYesNO();

// ex 2
// fetch yes or no from this api: https://yesno.wtf/api. log out the answer
// Try fetching a url that rejects fx https://knajskdskj.jasdk. Log out the error message

async function fetchYesNo2(){
    try {
        const fetchIt = await fetch("https://yesfsfno.wtf/api");
        const yesNo =  await fetchIt.json(); // this line is also a promise 
        console.log(yesNo.answer);
    }
    catch {
        console.log("woops");
    }
}
// when you set async - it will return a promise

fetchYesNo2();

// ex 3
//Create a promise that resolves after 4 seconds. 
// Use this promise to log out the text 'hello' after 4 seconds.
// Now make the promise fail by rejecting it with an error message instead of resolving it, 
//and log the error message to the console.

// const myPromise = new Promise((resolve, reject) => {
// setTimeout(()=> {
//     resolve("hello");
// }, 4000)

// setTimeout(()=> {
//     reject("problem");
// }, 8000) // you cannot do smth else after resolving or rejecting 
// });

// myPromise.then( (data) =>
//     {
//         console.log(data);
//     }
// ).catch((error) => {
//     console.log(error);
// })

// ex 4

const myPromise2 = new Promise((resolve, reject) => {
    const users = ["benna", "magdy", "carolina"];
    const user = users[Math.floor(Math.random()*4)];
    if (user == undefined){
        reject("no user found");
    }
    else {
        resolve(user)
    }
})

myPromise2.then( name => console.log(name)).catch(data => console.log(data));
