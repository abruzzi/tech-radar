$(function () {
    $.getJSON('data/t-hack-day-skillsets.json', function(data) {
        ['platform', 'technique', 'tools', 'language', 'framework'].forEach(function(category) {
            generateChart(data, category);
        });
        generateBubble({children: flatten(data)});
    });
});