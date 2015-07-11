$(function () {

    function retreive(items, key, total) {
        return _.map(_.pluck(items, key), function(item) {
            return _.round(item/total, 2) * 100;
        })
    }

    function generateSeries(items, total) {
        var categories = ['expert', 'familiar', 'learning', 'willing', 'unkonwn'];

        console.log(categories);

        return _.map(categories, function(category) {
            return {
                name: _.capitalize(category),
                data: retreive(items, category, total),
                pointPlacement: 'on'
            }
        });
    }

    $.getJSON('data/t-hack-day-skillsets.json', function(data) {
        var total = data.count;

        var platform = _.first(_.where(data.skillset, {category: "platform"}));
        var items = platform.items;

        var options = {

            series: generateSeries(items, total),

            chart: {
                polar: true,
                type: 'column'
            },

            title: {
                text: 'ThoughtWorks Team Skillset'
            },

            subtitle: {
                text: 'Source: https://jinshuju.net/f/l9MNsY/results'
            },

            pane: {
                size: '85%'
            },

            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 100,
                layout: 'vertical'
            },

            xAxis: {
                tickmarkPlacement: 'on',
                categories: _.pluck(items, "name")
            },

            yAxis: {
                min: 0,
                endOnTick: false,
                showLastLabel: true,
                title: {
                    text: 'Experienced (%)'
                },
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                },
                reversedStacks: false
            },

            tooltip: {
                valueSuffix: '%'
            },

            plotOptions: {
                series: {
                    stacking: 'normal',
                    shadow: false,
                    groupPadding: 0,
                    pointPlacement: 'on'
                }
            }
        }


        $('#platform').highcharts(options); 

    });
    // Parse the data from an inline table using the Highcharts Data plugin

});