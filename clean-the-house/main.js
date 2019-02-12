let swept = false;
let mopped = false;
let dusted = false;

function sweep() {
    logAndShowResults('You swept the floor.');
    swept = true;
    checkOtherTasks();
}

function mop() {
    logAndShowResults('You mopped the floor.');
    mopped = true;
    checkOtherTasks();
}

function dust() {
    logAndShowResults('You dusted.');
    dusted = true;
    checkOtherTasks();
}

function checkOtherTasks() {
    if (swept && mopped && dusted) {
        ALL_THE_THINGS();
    }
}

const ALL_THE_THINGS =  function() {
    logAndShowResults('You cleaned ALL the things!');
    swept = false;
    mopped = false;
    dusted = false;
}

// Here is a function Expression
const displayMessage = function(message) {
    document.getElementById('results').innerText += `${message}\n`;
};

// Here is an arrow funtion
const logAndShowResults = (message) => {
    displayMessage(message);
    console.log(message);
}