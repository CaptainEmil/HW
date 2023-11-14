'use strict';

console.clear();

class Human {
    constructor(name, age) {
        const _name = name;
        const _age = age;

        Object.defineProperty(this, 'name', {
            get() {
                return _name;
            }
        });

        Object.defineProperty(this, 'age', {
            get() {
                return _age;
            }
        });
    }
}

class Player extends Human{
    constructor(name, age, sportName, inMainTeam) {
        super(name, age);
        const _sportName = sportName;
        const _inMainTeam = inMainTeam;


        Object.defineProperty(this, 'sportName', {
            get() {
                return _sportName;
            }
        });

        Object.defineProperty(this, 'inMainTeam', {
            get() {
                return _inMainTeam;
            }
        });
    }

    get name(){
        return this.name;
    }

    get age(){
        return this.age;
    }
}

class FootballPlayer extends Player{
    constructor(name, age, inMainTeam) {
        super(name, age, 'football', inMainTeam);
    }
    get name(){
        return this.name;
    }

    get age(){
        return this.age;
    }

    get sportName(){
        return this.sportName;
    }

    get inMainTeam(){
        return this.inMainTeam;
    }
}

class Team {
    constructor() {
        const _footballPlayers = [];

        Object.defineProperty(this, 'footballPlayers', {
            get() {
                // FIXED RETURNING POINTER TO ORIGINAL ARRAY (_footbalPlayers)
                return [..._footballPlayers];
            }
        })

        this.addPlayers = function (...footballPlayers) {
            _footballPlayers.push(...footballPlayers);
        }

        this.deletePlayer = function (footballPlayers) {
            const indexOfFootballPlayer = _footballPlayers.indexOf(footballPlayers);

            if (indexOfFootballPlayer !== -1) {
                _footballPlayers.splice(indexOfFootballPlayer, 1);
            }
        }

        this.getPlayersSortedByName = function () {
            // FIXED RETURNING POINTER TO ORIGINAL ARRAY (_footbalPlayers)
            return [..._footballPlayers].sort(function (a, b) {
                const name1 = a.name;
                const name2 = b.name;

                const name1InLowerCase = name1.toLowerCase();
                const name2InLowerCase = name2.toLowerCase();

                if (name1InLowerCase > name2InLowerCase) return 1;
                if (name1InLowerCase < name2InLowerCase) return -1;

                if (name1 > name2) return 1;
                if (name1 < name2) return -1;

                return 0;
            });
        }

        this.getFilteredPlayers = function (inMainTeam) {
            return _footballPlayers.filter(function (footballPlayer) {
                return footballPlayer.inMainTeam === inMainTeam;
            })
        }
    }
}

const team = new Team();

team.addPlayers(
    new FootballPlayer('Rovshan', 25, false),
    new FootballPlayer('Novruz', 27, true),
    new FootballPlayer('Emil', 18, false),
);

const footballPlayers = team.footballPlayers;

footballPlayers[1] = 'HACKED';

for (const footballPlayer of team.footballPlayers) {
    console.log(footballPlayer);
}

const sortedFootballPlayers = team.getPlayersSortedByName();

sortedFootballPlayers[2] = 'HACKED';

for (const footballPlayer of team.footballPlayers) {
    console.log(footballPlayer);
}