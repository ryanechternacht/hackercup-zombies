module.exports = (function() {
    return {
        findSuccessPercent: findSuccessPercent
    };

    function findSuccessPercent(zombie) {
        var outcomes = [];
        
        for(var i = 0; i < zombie.spells.length; i++) {
            outcomes.push(findIndividualSuccessPercent(
                zombie.health, zombie.spells[i]
            ));
        }

        var max = 0;

        for(var i = 0; i < outcomes.length; i++) {
            if(outcomes[i] > max) {
                max = outcomes[i];
            }
        }

        return max;
    }

    function findIndividualSuccessPercent(health, spell) {
        var outcomes = [];
        recurse(spell.numDice, spell.dice, [], outcomes);

        var kills = 0;
        for(var i = 0; i < outcomes.length; i++) {
            var outcome = outcomes[i];
            if(outcome + spell.modifier >= health) {
                kills++;
            }
        }

        return kills / outcomes.length;
    }

    function recurse(numDice, dice, currentDice, outcomes) {
        if(currentDice.length == numDice) {
            var sum = 0; 
            for(var i = 0; i < currentDice.length; i++) {
                sum += currentDice[i];
            }
            outcomes.push(sum);
            return;
        }

        for(var i = 0; i < dice; i++) {
            var newDice = currentDice.slice(0);
            newDice.push(i + 1);
            recurse(numDice, dice, newDice, outcomes);
        }
    }
})();