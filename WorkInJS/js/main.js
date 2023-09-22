function counter() {
    let count = 0;

    function inner(value) {
        count += value;

        console.log(count);
    };

    return inner;
}

let fn = counter();

fn(3);      //3
fn(5);      //8
fn(228);    //236

//------------------------------------

function getUpdatedArr(value) {
    let array = [];

    

    function inner(value) {
        if (value == undefined) {
            return array = [];
        };

        array.push(value);

        console.log(array);
    };

    return inner;
}

let fn2 = getUpdatedArr();

fn2(4);
fn2(5);
fn2();
fn2({name: "name"})
