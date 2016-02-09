var dataset = [
[1911, 2004, 'Ronald Reagan'],
[1889, 1945, 'Adolf Hitler'],
[1707, 1778, 'Carl Linnaeus'],
[1917, 1963, 'John F. Kennedy'],
[1809, 1865, 'Abraham Lincoln'],
[1882, 1945, 'Franklin D. Roosevelt'],
[1874, 1965, 'Winston Churchill'],
[1920, 2005, 'Pope John Paul II'],
[1819, 1901, 'Queen Victoria'],
[1913, 1994, 'Richard Nixon']
];

var w = 500;
var h = 400;
var barPadding = 1;

var svg = d3.select("body")
    .append("svg")
    .attr("padding", 20)
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
        return i * (w / dataset.length) + 20;
   })
   .attr("y", function(d) {
        return h - ((d[1] - d[0]) * 4);
   })
   .attr("padding", 20)
   .attr("width", 20 + dataset.length - barPadding)
   .attr("height", function(d) {
        return (d[1] - d[0]) * 4;
   })
   .attr("fill", "burlywood");

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) {
        return d[2];
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
        return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 20;
   })
   .attr("y", function(d) {
        return h - ((d[1] - d[0]) * 4) + 14;
   })
   .attr("padding", 20)
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "blue");

var renderPage = function(){
    var userInput = document.getElementById('year').value;
    console.log("renderPage is working")
    console.log("userInput =", userInput)

    svg.selectAll("text")
        .remove()

    svg.selectAll("rect")
        .remove()

  
    svg.selectAll("rect") 
        .data(dataset)
       .enter()
       .append("rect")
       .filter(function(d) { return d[0] <= userInput && d[1] >= userInput  })
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + 20;
       })
       .attr("y", function(d) {
            return h - ((d[1] - d[0]) * 4);
       })
       .attr("padding", 20)
       .attr("width", 20 + dataset.length - barPadding)
       .attr("height", function(d) {
            return (d[1] - d[0]) * 4;
       })
       .attr("fill", "burlywood");

    svg.selectAll("text")
        .data(dataset)
       .enter()
       .append("text")
       .filter(function(d) { return d[0] <= userInput && d[1] >= userInput  })
       .text(function(d) {
          return d[2];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 20;
       })
       .attr("y", function(d) {
            return h - ((d[1] - d[0]) * 4) + 14;
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "blue");

   console.log("made it through function =  ")
}
// d3.select("svg").selectAll("p")
//     .data(dataset)
//     .enter()
//     .append("p")
//     .text(function(d){
//         return d[2];
//     });
// d3.select("svg").selectAll("p")
//     .data(dataset)
//     .style("color", function(d) {
//         if(d[1] > 1900) {
//             return "red";
//         }
//     });
// d3.select("svg").selectAll("div")
//     .data(dataset)
//     .enter()
//     .append("div")
//     .attr("class", "bar")
//     .style("width", 30)
//     .style("height", 25);;