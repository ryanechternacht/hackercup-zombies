module.exports = (function() {
    return {
        printOutput: printOutput,
    };

    function printOutput(zombies) { 
        for(var i = 0; i < zombies.length; i++) {
            var zombie = zombies[i];
            console.log("Case #" + (i + 1) + ": " + zombie.successPercent);
        }
    }
})();