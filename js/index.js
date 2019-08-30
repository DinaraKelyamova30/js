let message = 'Hello JS';
alert(message);
message = 'Nice to see you!';
alert(message);

let userAge = +prompt('Enter your age');
alert('Your age is ' + userAge);

let nextAge = addOne(userAge);
alert('Next year will be ' + nextAge);



//Scaler date types:

//String: 'Hello', "Hello",
//Numper: 1, 0.1, 10e20, NaN, infinity
//Boolean: true, false
//undefind не задане, пусто, нема і не було
//null не задане, пусто, нема і могло бути
//object
//Symbol



if (userAge >= 18 && userAge < 65) { // >< >= <= == === !=(не равняеться) !== амперсант $$  ()-декларация объектов
    alert('You are adult');
} else if( userAge >= 65) {
    alert('You are old');
} else{
    alert('You are kid')
}

function addOne(value) {
    const newValue = value +1;
    return newValue;
}


