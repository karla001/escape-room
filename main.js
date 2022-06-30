const readline = require("readline-sync");
const actionsTaken = [];
let globalAnswer = '';
let escaped = false;

function getAction(){
    globalAnswer = readline.keyIn("do you want to (p)ut hand in hole, (f)ind the key, or (o)pen the door?");
}
function  decideConsequences(){
    //getting the last action performed
    let lastAction = getLastArrItem();
    //adding new action to actions performed
    actionsTaken.push(globalAnswer);

    console.log('-------------------------');

    if(globalAnswer == 'p'){
        kill();
    }else if(globalAnswer == 'o'){
        if(lastAction == 'f'){
            console.log('You have escaped!');
            escaped = true;
            process.exit(0);
        }else if(lastAction == 'o' || lastAction == false){
            console.log('The door appears to be locked...');
        }
    }else if(globalAnswer == 'f'){
        if(lastAction == 'o'|| lastAction == false){
            console.log('You have found a key, perhaps it opens the locked door.');
        }else if(lastAction == 'f'){
            console.log('You have once again found the key ... I guess...');
        }else if(lastAction == false){
            console.log('You have found the key');
        }
    }
    
    console.log('-------------------------');
}

function getLastArrItem(){
    let newArr = [...actionsTaken].reverse()[0];
    if(newArr == undefined){
        return false;
    }else{
        return newArr;
    }
}

function kill(){
    console.log('Curiosity killed the cat and you too...');
    process.exit(0);
}

while(escaped == false){
    getAction();
    decideConsequences();
}