const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise One is resolved.')
    }, 2000);
});

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(' Promise Two is rejected.')
    }, 1500);
});

Promise.all([promiseOne, promiseTwo])
.then((data) => console.log(data[0], data[1]))
.catch((error) => console.log(error));
