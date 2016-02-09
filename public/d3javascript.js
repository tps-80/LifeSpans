var dataset = [["Lincoln", 5], ["Washington", 8]]

var svg = d3.select("body").append("svg");

d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(function(d){
        return d[0];
    });
d3.select("body").selectAll("p")
    .data(dataset)
    .style("color", function(d) {
        if(d[1] > 5) {
            return "red";
        }
    });
d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
         return d[1] * 3 + "px";
    });;