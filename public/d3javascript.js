//demo work   http://blockbuilder.org/anonymous/212a6143333f9c558f4a

//disables the enter key form submission without jQuery
function stopRKey(evt) { 
  var evt = (evt) ? evt : ((event) ? event : null); 
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
  if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
} 

document.onkeypress = stopRKey; 

var dataset = [ 
  [ 1911, 2004, 'Ronald Reagan' ],
  [ 1889, 1945, 'Adolf Hitler' ],
  [ 1707, 1778, 'Carl Linnaeus' ],
  [ 1917, 1963, 'John F. Kennedy' ],
  [ 1809, 1865, 'Abraham Lincoln' ],
  [ 1882, 1945, 'Franklin D. Roosevelt' ],
  [ 1874, 1965, 'Winston Churchill' ],
  [ 1920, 2005, 'Pope John Paul II' ],
  [ 1819, 1901, 'Queen Victoria' ],
  [ 1913, 1994, 'Richard Nixon' ],
  [ 1732, 1799, 'George Washington' ],
  [ 1915, 1998, 'Frank Sinatra' ],
  [ 1769, 1821, 'Napoleon ' ],
  [ 1859, 1926, 'Sidney Lee' ],
  [ 1878, 1953, 'Joseph Stalin' ],
  [ 1858, 1919, 'Theodore Roosevelt' ],
  [ 1924, 2016, 'Jimmy Carter' ],
  [ 1890, 1969, 'Dwight D. Eisenhower' ],
  [ 1743, 1826, 'Thomas Jefferson' ],
  [ 1902, 1983, 'Nikolaus Pevsner' ],
  [ 1924, 2016, 'George H. W. Bush' ],
  [ 1908, 1973, 'Lyndon B. Johnson' ],
  [ 1856, 1924, 'Woodrow Wilson' ],
  [ 1756, 1791, 'Wolfgang Amadeus Mozart' ],
  [ 1869, 1948, 'Mahatma Gandhi' ] ];

var w = window.innerWidth - 29;
var h = 400;
var barPadding = 1;

var xScale = d3.scale.linear()
  .domain([d3.min(dataset, function(d) {
    return d[0];
  }), d3.max(dataset, function(d) {
    return d[1];
  }) ])
  .range([0, width]);

var svg = d3.select("div.wrapper")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", "rgb(213, 208, 204)");

var filterYear = function(){
    var userInput = document.getElementById('year').value || 0;
    console.log("renderPage is working")
    console.log("userInput =", userInput)

    svg.selectAll("text")
        .remove();

    svg.selectAll("rect")
        .remove();
  
    svg.selectAll("rect") 
        .data(dataset)
       .enter()
       .append("rect")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[0] <= userInput && d[1] >= userInput  })
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + 20;
       })
       .attr("y", function(d) {
            return h - ((d[1] - d[0]) * 4);
       })
       .attr("padding", 10)
       .attr("width", 20 - barPadding)
       .attr("height", function(d) {
            return (d[1] - d[0]) * 4;
       })
       .attr("fill", "burlywood");

    svg.selectAll("p.name")
        .data(dataset)
       .enter()
       .append("text")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[0] <= userInput && d[1] >= userInput  })
       .text(function(d) {
          return d[2];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 20;
       })
       .attr("y", function(d, i) {
            return h - (i * 10 + (d[1] - d[0]));
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "rgb(18, 91, 158)");

    svg.selectAll("p.age")
       .data(dataset)
       .enter()
       .append("text")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[0] <= userInput && d[1] >= userInput  })
       .text(function(d) {
            return d[1] - d[0];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 10;
       })
       .attr("y", function(d, i) {
            return h - (i * 10 + (d[1] - d[0])) + 30;
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "rgb(179, 61, 54) ");

    svg.selectAll("p.birth")
       .data(dataset)
       .enter()
       .append("text")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[0] <= userInput && d[1] >= userInput  })
       .text(function(d) {
            return d[0];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 10;
       })
       .attr("y", function(d) {
            return h - 14;
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "rgb(64, 112, 109) ");

    svg.selectAll("p.death")
       .data(dataset)
       .enter()
       .append("text")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[0] <= userInput && d[1] >= userInput  })
       .text(function(d) {
            return d[1];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 10;
       })
       .attr("y", function(d) {
            return h - ((d[1] - d[0]) * 4);
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "rgb(64, 112, 109) ");


   document.getElementById('year').value = "";
   console.log("made it through function =  ")
}

var filterAge = function(){
    var userInput = document.getElementById('age').value || 0;
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
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[1] - d[0] >= userInput  })
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + 20;
       })
       .attr("y", function(d) {
            return h - ((d[1] - d[0]) * 4);
       })
       .attr("padding", 10)
       .attr("width", 20 - barPadding)
       .attr("height", function(d) {
            return (d[1] - d[0]) * 4;
       })
       .attr("fill", "burlywood");

    svg.selectAll("p.name")
        .data(dataset)
       .enter()
       .append("text")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[1] - d[0] >= userInput  })
       .text(function(d) {
          return d[2];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 20;
       })
       .attr("y", function(d, i) {
            return h - (i * 10 + (d[1] - d[0]));
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "rgb(18, 91, 158)");

    svg.selectAll("p.age")
       .data(dataset)
       .enter()
       .append("text")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[1] - d[0] >= userInput   })
       .text(function(d) {
            return d[1] - d[0];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 10;
       })
       .attr("y", function(d, i) {
            return h - (i * 10 + (d[1] - d[0])) + 30;
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "rgb(179, 61, 54)");

    svg.selectAll("p.birth")
       .data(dataset)
       .enter()
       .append("text")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[1] - d[0] >= userInput  })
       .text(function(d) {
            return d[0];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 10;
       })
       .attr("y", function(d) {
            return h - 14;
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "rgb(64, 112, 109) ");

    svg.selectAll("p.death")
       .data(dataset)
       .enter()
       .append("text")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[1] - d[0] >= userInput  })
       .text(function(d) {
            return d[1];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 10;
       })
       .attr("y", function(d) {
            return h - ((d[1] - d[0]) * 4);
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "rgb(64, 112, 109) ");

   document.getElementById('age').value = "";
   console.log("made it through function =  ")
}

    // var width = 500;
    // var height = 200;
    // var barPadding = 4;
    
    // var dataset = [ 
    //   [ 1809, 1865, 'Abraham Lincoln' ],
    //   [ 1882, 1945, 'Franklin D. Roosevelt' ],
    //   [ 1874, 1965, 'Winston Churchill' ]];
    
    // var xScale = d3.scale.linear()
    //   .domain([
    //     d3.min(dataset, function(d) {
    //       return d[0];
    //     }), 
    //     d3.max(dataset, function(d) {
    //       return d[1];
    //     }) 
    //   ])
    //   .range([0, width]);
    
      
    // var svg = d3.select("body")
    //   .append("svg")
    //   .attr("width", width)
    //   .attr("height", height)
    //   .style("background-color", "burlywood")

    // svg.selectAll("rect")
    //   .data(dataset)
    //   .enter()
    //   .append("rect")
    //   .attr("x", function(d) {
    //     return xScale(d[0]);
    //   })
    //   .attr("y", function(d, i) {
    //     console.log('y', i * (height/ dataset.length));
    //     return i * (height/ dataset.length) + barPadding;
    //   })
    //   .attr("height", 20)
    //   .attr("width", function(d) {
    //     var barWidth = (d[1] - d[0]) * 5;  //Scale up by factor of 5
    //     return barWidth + "px";
    //   });
    
    // svg.selectAll("text") // p.name
    //   .data(dataset)
    //   .enter()
    //   .append("text")
    //   .text(function(d) {
    //     return d[2]
    //   })
    //   .attr("x", function(d) {
    //     return xScale(d[0]);
    //   })
    //   .attr("y", function(d, i) {
    //     return i * (height/ dataset.length) + barPadding;
    //   })
    //   .attr("dy", "1em")
    //   .style({
    //     "text-anchor": "start",
    //     "fill": "white"
    //          })
