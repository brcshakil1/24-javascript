const getValue = num => {
    if(num > 0){
        console.log('The value is true');
    }
    else {
        console.log('The value is false');
    }
}

getValue(0);

const getString = str => {
    if(str.length ){
        console.log('The string is true');
    }
    else{
        console.log('The string is false');
    }
}

getString(' ')