

const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);

    setTimeout(() => {
        if (randomNumber < 5) {
            resolve(`Success! The number is ${randomNumber}`);
        } else {
            reject(`Failure! The number is ${randomNumber}`);
        }
    }, 3000);
});

console.log(promise);