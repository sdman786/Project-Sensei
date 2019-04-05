module.exports = function () {
    return Object.assign({},
    require('./data/mcq.json'),
    require('./data/agile.json'),
    require('./data/scrum.json')
    );
    }