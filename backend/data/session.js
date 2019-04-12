
var activities = [];
var lessons = [];
var quizes = [];

var allData = [];

$.getJSON("./quiz/mcq.json", function(data) {
    quiz = quiz.concat(data);
    start(allData);

});

$.getJSON("./lesson/agile.json", function(data) {
    lessons = lessons.concat(data);
    start(allData);

});

$.getJSON("./activity/agile.json", function(data) {
    activities = activities.concat(data);
    start(allData);
});