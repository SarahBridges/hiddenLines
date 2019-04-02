var data = d3.json("pets.json")

data.then(function(data){drawChart(data.kitttens);})

var drawChart = function(d)
{
  var screen = {height: 500, width: 500}
  var margins = {top:10,bottom:10,left:10,right:10}

  var xScale = d3.scaleLinear()
                 .domain([0,function(d){return d.length;}])
                 .range([0,8])

  var yScale = d3.scaleLinear()
                 .domain([0,d3.max(function(d){return d;})])
                 .range([screen.height,0]);
   var svg = d3.select("svg")
           .selectAll("circle")
           .data(d)
           .enter()
           .append("circle")
           .attr("cy", function(d){return yScale(d);})
           .attr("cx", function(d,i){return xScale(i);})
           .attr("r", 2)

    var line = d3.line()
                 .x(function(d,i){return xScale(i);})
                 .y(function(d){return yScale(d);})
                 .curve(d3.curve(CatmullRom))

    var area = d3.area()
                 .x(function(d,i){return xScale(i);})
                 .y0(function(d){return yScale(height);})
                 .y1(function(d){return yScale(height-d);})
                 .curve(d3.curve(CatmullRom))
}
