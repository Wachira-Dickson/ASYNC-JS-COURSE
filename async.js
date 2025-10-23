
function task1(callback) {
    console.log('1.Starting asynchronous operations...');
    callback();
}

function task2(callback) {
    setTimeout(() => {
        console.log('2.Eat some grapes for good health.');
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log('3.This is Nairobi, Kenya.');
        callback();
    }, 500);
}

function task4(callback) {
setTimeout(() => {
    console.log('4. Sidney is one of the biggest cities in the world');
    callback();
}, 2500);
}

function task5() {
setTimeout(() => {
    console.log('5. Tokyo is the capital of Japan.');
}, 3000);
    callback();
}

function task6() {
setTimeout(() => {
    console.log('6. Paris is known as the city of lights.');
}, 2000);
    callback();
}

    task1(() => {
        task2(() => {
            task3(() => {
                task4(() => {
                    task5(() => {
                        task6(() => {
                            console.log('All tasks completed.');
                        });
                    });
                });
            });
        });
    });