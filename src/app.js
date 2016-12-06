
// document.body.innerHTML = `<h1>This version: ${d3.version}</h1>`;
// var body = d3.select("body");
// var div = body.append("div");
// div.html("New data");

var data = [4, 8, 15, 16, 23, 42];

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });
