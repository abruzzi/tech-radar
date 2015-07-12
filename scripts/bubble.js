
function avarage(item, category) {
    var total = item.expert * 5 + item.familiar * 4 + item.learning * 3 + item.willing * 2 + item.unkonwn * 1;
    return {
        packageName: category,
        className: item.name,
        value: _.round(total/29, 2)
    }
}

function flatten(data) {
    // return _.map(_.flatten(_.pluck(data.skillset, 'items')), avarage);

    return _.flatten(_.map(data.skillset, function(set) {
        return _.map(set.items, function(item) {
            return avarage(item, set.category);
        });
    }));
}

var diameter = 720,
    format = d3.format(",d"),
    color = d3.scale.category20();

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("#overview").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

function generateBubble(data) {
  var node = svg.selectAll(".node")
      .data(bubble.nodes(data)
      .filter(function(d) { return !d.children; }))
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
      .text(function(d) { return d.className + ": " + d.value; });

  node.append("circle")
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) { return color(d.packageName); });

  node.append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.className.substring(0, d.r / 3); });
    
}
