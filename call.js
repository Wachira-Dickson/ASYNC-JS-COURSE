
const promise = new Promise((resolve, reject) => {
    resolve('Well Done! Promise One is resolved.');
});

const promiseTwo = new Promise((resolve, reject) => {
    resolve('Well Done! Promise Two is resolved.');
});

const promiseThree = new Promise((resolve, reject) => {
    reject('Well Done! Promise Three is rejected. Unlucky!')
});

promise
.then((value) => {
    console.log(value);
    promiseTwo.then((data) => {
        console.log(data);
    promiseThree.then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error) 
    })
    })
})
.catch((error) => {
    console.log(error)
});
