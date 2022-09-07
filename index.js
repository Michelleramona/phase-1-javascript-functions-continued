function saturdayFun (activity = "roller-skate"){
return `This Saturday, I want to ${activity}!`
}

//but is asking for function expression not function declaration - what does ƒ mean
//how do I use it properly?

function mondayWork (work= "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(worker) {
    return `You are *${worker}*` 
}

function wrapAdjective(flair = "*") {
    const adjective = function (worker = "special"){
    return `You are ${flair}${worker}${flair}!`;
    }
    return adjective;
  }
  