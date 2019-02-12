// Here are function declarations
function testClick() {
    document.getElementById('clear').classList.remove('is-hidden');
    logAndShowResults('You clicked the button!');
}

function clearResults() {
    document.getElementById('results').innerText = '';
    document.getElementById('clear').classList.add('is-hidden');
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