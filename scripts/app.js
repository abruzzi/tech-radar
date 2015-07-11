$(function () {

    function retreive(items, key, total) {
        return _.map(_.pluck(items, key), function(item) {
            return item/total * 100;
        })
    }

    $.getJSON('data/t-hack-day-skillsets.json', function(data) {
        var total = data.count;

        window.data = data;

        var platform = _.first(_.where(data.skillset, {category: "platform"}));
        var items = platform.items;
        console.log(items);

        var options = {

            series: [{
                name: "expert",
                data: retreive(platform.items, "expert", total),
                pointPlacement: 'on'
            }, {
                name: "familiar",
                data: retreive(platform.items, "familiar", total),
                pointPlacement: 'on'
            }, {
                name: "learning",
                data: retreive(platform.items, "learning", total),
                pointPlacement: 'on'
            }, {
                name: "willing",
                data: retreive(platform.items, "willing", total),
                pointPlacement: 'on'
            }, {
                name: "unkonwn",
                data: retreive(platform.items, "unkonwn", total),
                pointPlacement: 'on'
            }
            ],

            chart: {
                polar: true,
                type: 'column'
            },

            title: {
                text: 'ThoughtWorker team skillset'
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
                categories: _.pluck(platform.items, "name")
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