var input = require('./input'),
    parser = require('./parser'),
    stats = require('./stats'),
    output = require('./output');

var zombies = input.loadFile('file.txt');

for(var i = 0; i < zombies.length; i++) {
    var zombie = zombies[i];
    zombie.spells = parser.parseSpells(zombie.spellsRaw);
    zombie.successPercent = stats.findSuccessPercent(zombie);
}

output.printOutput(zombies);