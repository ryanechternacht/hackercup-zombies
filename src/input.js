module.exports = (function() {
    return {
        loadFile: loadFile
    };

    function loadFile(file) {
        var fs = require('fs'); 

        var data = fs.readFileSync(file, 'utf8');

        var lines = data.split('\n');

        var zombies = [];
        var numZombies = parseInt(lines[0]);

        for(var i = 0; i < numZombies; i++) {
            var zombie = {};

            var line1 = lines[i*2 + 1];
            var line2 = lines[i*2 + 2];

            var line1split = line1.split(' ');
            zombie.health = parseInt(line1split[0]);

            zombie.spellsRaw = line2.split(' ');

            zombies.push(zombie);
        }  

        return zombies;
    }
})();