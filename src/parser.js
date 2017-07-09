module.exports = (function() {
    return {
        parseSpells: parseSpells,
        parseSpell: parseSpell
    };

    function parseSpells(spellsRaw) { 
        var spells = [];
        for(var i = 0; i < spellsRaw.length; i++) {
            spells.push(parseSpell(spellsRaw[i]));
            console.log(spells[i]);
        }
        return spells;
    }

    function parseSpell(spellRaw) {
        var result = {};

        var dSplit = spellRaw.split('d');
        if(dSplit[0] == '') {
            result.numDice = 1;
        } else {
            result.numDice = parseInt(dSplit[0]);
        }

        if(dSplit[1].includes('-')) {
            var signSplit = dSplit[1].split('-');
            result.dice = parseInt(signSplit[0]);
            result.modifier = -parseInt(signSplit[1]);
        } else if(dSplit[1].includes('+')) {
             var signSplit = dSplit[1].split('+');
            result.dice = parseInt(signSplit[0]);
            result.modifier = parseInt(signSplit[1]);
        } else {
            result.dice = parseInt(dSplit[1]);
            result.modifier = 0;
        }

        return result;
    }
})();