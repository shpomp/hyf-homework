fetch("http://api.open-notify.org/astros.json")
.then((response) => response.json())
.then((astronauts) => {
    //console.log(astronauts);
});

// creating
function logName(name){
    console.log(name);
}

// using (consuming)
//logName("Maria");

const fetchPromise = fetch("http://api.open-notify.org/astros.json");
//console.log(typeof fetchPromise);

// .then takes a function as an argument
fetchPromise.then(() => {
    //console.log("hej!");
});

fetchPromise
.then(()=> {
    console.log("all good!");
})
.catch(()=> {
    console.log("woops :/");
});


// creating a promise


const promise = new Promise((resolve) => {
    console.log(typeof resolve);
});

//console.log(promise);


const promise2 = new Promise((resolve, reject) => {
    console.log("before timeout");
    setTimeout(() => {
        reject();
    }, 2000);
});
 
promise2
.then(()=>{
    console.log("ok");
})
.catch(()=>{
    console.log("not ok");
})

//

const promise3 = new Promise((resolve, reject) => {
    console.log("before timeout");
    setTimeout(() => {
        resolve("where do I get this string?");
    }, 2000);
});
 
promise3
.then((data)=>{
    console.log("ok");
    console.log(data);
})
.catch(()=>{
    console.log("not ok");
})

const orderPizzaPromise = new Promise((resolve, reject) => {
    const pizzaMakingTime = 1000;
    const didPizzaBakingSucceed = true;
    const pizza = 'Macaroni pizza';
    setTimeout(() => {
        if(didPizzaBakingSucceed) {
            resolve(pizza);
        } else {
            reject('The pizza was a mess');
        }
    }, pizzaMakingTime);
});

orderPizzaPromise.then(pizza => {
    console.log(`Lets eat the ${pizza}`);
}).catch(error => {
    console.log(`Lets eat the nothing`);
})


async function asyncAwaitExample(){
    console.log("before");
    const waitingString = await promise3; // the reslove parameter
    console.log(waitingString);
    console.log("after");

}

asyncAwaitExample();


async function asyncAwaitExampleTryCatch(){
    try {console.log("before");
    const waitingString = await promise3; // the reslove parameter
    console.log(waitingString);
    console.log("after");}
    catch(error){
        console.log(error);
    }
}

