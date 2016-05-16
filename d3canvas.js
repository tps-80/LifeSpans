var w = 500;

var scale = d3.scale.linear()
                    .domain([100, 500])
                    .range([10, 350]);

d3.max(dataset, function(d) {    //Returns 480
    return d[0];  //References first value in each sub-array
});

var xScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function(d) { return d[0]; })])
                     .range([0, w]);

 // var width = window.innerWidth - 10;
 //            var height = 500;
 //            var barHeight = 30;
 //            var barPadding = 2;
 //            var oldestDate = 1640;
 //            var currentYear = 1750;
 //            var userInput = document.getElementById("year").value; 

 //            var svg = d3.select("body")
 //                .append("svg")
 //                .attr("width", width-20)
 //                .attr("height", height)
            // svg.append("rect")
            //     .attr("width", "100%")
            //     .attr("height", "100%")
            //     .attr("fill", "blue");


            /////////// axis   //////////

            // var xScale = d3.scale.linear()
            //     .domain([oldestDate, currentYear])
            //     .range([oldestDate, currentYear]);

            // var yScale = d3.scale.linear()
            //     .domain([0, d3.max(dataset, function(d) { return d[2]; })])
            //     .range([0, height]);

            // var xAxis = d3.svg.axis()
            //       .scale(xScale)
            //       .orient("bottom")
            //       .ticks(50);  //Set rough # of ticks

            // svg.append("g")
            //     .attr("class", "axis")
            //     .attr("transform", "translate(10)")
            //     .call(xAxis);


            // svg.selectAll("rect")
            //    .data(dataset)
            //    .enter()
            //    .append("rect")
            //    .filter(function(d) { return d[3] <= userInput && d[4] >= userInput})
            //    .attr("y", function (d, i) {
            //         return 25+ i * (barHeight + barPadding);
            //    })
            //    .attr("x", function(d) {
            //         return d[3] - 1000;
            //     })
            //    .attr("height", barHeight)
            //    .attr("width", function(d) {
            //         return (d[4] - d[3]) * 5;
            //    })
            //    .attr("fill", "blue");

            // svg.selectAll("rect")
            //     .append("text")
            //     .text(function(d) {
            //         console.log("here")
            //         return d[0];
            //     })
            //    .attr("y", function (d, i) {
            //         return 5+ i * (barHeight + barPadding);
            //    })
            //    .attr("x", function(d) {
            //         return xScale(d[4]);
            //     })
            //    .attr("fill", "black");
// }

// buildCanvas();