/**
 * Draws the main SVG element
 * @param {object} data Titanic data
 *
 * @return {object} A path object representing passengers in Titanic
 *
 */


function draw(data) {
  "use strict";
  var margin = 75,
    width = 1400 - margin,
    height = 800 - margin;

// Header
  d3.select("body")
    .append("h2")
    .text("Tragedy at Titanic");

// Human pictogram
  var icon =
    "M3.5,2H2.7C3,1.8,3.3,1.5,3.3,1.1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1c0,0.4,0.2,0.7,0.6,0.9H1.1C0.7,2,0.4,2.3,0.4,2.6v1.9c0,0.3,0.3,0.6,0.6,0.6h0.2c0,0,0,0.1,0,0.1v1.9c0,0.3,0.2,0.6,0.3,0.6h1.3c0.2,0,0.3-0.3,0.3-0.6V5.3c0,0,0-0.1,0-0.1h0.2c0.3,0,0.6-0.3,0.6-0.6V2.6C4.1,2.3,3.8,2,3.5,2z";

// Main svg
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width + margin)
    .attr("height", height + margin)
    .append("g")
    .attr("class", "chart");

// tooltip element
  var tooltip = d3
    .select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  d3
    .select("svg")
    .selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("d", icon);

  // tooltip mouseover event handler
  var tipMouseover = function(d) {
    var html =
      d.Name + "<br/>" + d.Sex + "</span><br/>" + "<b>" + d.Age + "</b> <b/>";

    tooltip
      .html(html)
      .style("left", d3.event.pageX + 15 + "px")
      .style("top", d3.event.pageY - 28 + "px")
      .transition()
      .duration(200) // ms
      .style("opacity", 0.9); // started as 0!
  };

  // tooltip mouseout event handler
  var tipMouseout = function(d) {
    tooltip
      .transition()
      .duration(300) // ms
      .style("opacity", 0); // don't care about position!
  };

  var firstClassFemaleSurvived = 0;
  var firstClassFemaleDead = 0;
  var firstClassMaleSurvived = 0;
  var firstClassMaleDead = 0;
  var secondClassFemaleSurvived = 0;
  var secondClassFemaleDead = 0;
  var secondClassMaleSurvived = 0;
  var secondClassMaleDead = 0;
  var thirdClassFemaleSurvived = 0;
  var thirdClassFemaleDead = 0;
  var thirdClassMaleSurvived = 0;
  var thirdClassMaleDead = 0;

// sorting of the different classes
  d3.selectAll("path")
    .attr("transform", function(d) {
      if (d.Pclass == 1) {
        if (d.Survived == 1) {
          if (d.Sex === "female") {
            firstClassFemaleSurvived++;
            if (firstClassFemaleSurvived < 50) {
              return (
                "translate(" +
                (firstClassFemaleSurvived * 11 + 150) +
                ", 70) scale(3)"
              );
            } else {
              return (
                "translate(" +
                ((firstClassFemaleSurvived - 49) * 11 + 150) +
                ", 95) scale(3)"
              );
            }
          } else {
            firstClassMaleSurvived++;
            return (
              "translate(" +
              (firstClassMaleSurvived * 11 + 150) +
              ", 150) scale(3)"
            );
          }
        } else {
          if (d.Sex === "female") {
            firstClassFemaleDead++;
            return (
              "translate(" +
              (firstClassFemaleDead * 11 + 800) +
              ", 70) scale(3)"
            );
          } else {
            firstClassMaleDead++;
            if (firstClassMaleDead < 50) {
              return (
                "translate(" +
                (firstClassMaleDead * 11 + 800) +
                ", 150) scale(3)"
              );
            } else {
              return (
                "translate(" +
                ((firstClassMaleDead - 49) * 11 + 800) +
                ", 175) scale(3)"
              );
            }
          }
        }
      } else if (d.Pclass == 2) {
        if (d.Survived == 1) {
          if (d.Sex === "female") {
            secondClassFemaleSurvived++;
            if (secondClassFemaleSurvived < 50) {
              return (
                "translate(" +
                (secondClassFemaleSurvived * 11 + 150) +
                ", 250) scale(3)"
              );
            } else {
              return (
                "translate(" +
                ((secondClassFemaleSurvived - 49) * 11 + 150) +
                ", 275) scale(3)"
              );
            }
          } else {
            secondClassMaleSurvived++;
            return (
              "translate(" +
              (secondClassMaleSurvived * 11 + 150) +
              ", 330) scale(3)"
            );
          }
        } else {
          if (d.Sex === "female") {
            secondClassFemaleDead++;
            return (
              "translate(" +
              (secondClassFemaleDead * 11 + 800) +
              ", 250) scale(3)"
            );
          } else {
            secondClassMaleDead++;
            if (secondClassMaleDead < 50) {
              return (
                "translate(" +
                (secondClassMaleDead * 11 + 800) +
                ", 330) scale(3)"
              );
            } else {
              return (
                "translate(" +
                ((secondClassMaleDead - 49) * 11 + 800) +
                ", 355) scale(3)"
              );
            }
          }
        }
      } else if (d.Pclass == 3) {
        if (d.Survived == 1) {
          if (d.Sex === "female") {
            thirdClassFemaleSurvived++;
            if (thirdClassFemaleSurvived < 50) {
              return (
                "translate(" +
                (thirdClassFemaleSurvived * 11 + 150) +
                ", 450) scale(3)"
              );
            } else {
              return (
                "translate(" +
                ((thirdClassFemaleSurvived - 49) * 11 + 150) +
                ", 475) scale(3)"
              );
            }
          } else {
            thirdClassMaleSurvived++;
            return (
              "translate(" +
              (thirdClassMaleSurvived * 11 + 150) +
              ", 530) scale(3)"
            );
          }
        } else {
          if (d.Sex === "female") {
            thirdClassFemaleDead++;
            if (thirdClassFemaleDead < 50) {
              return (
                "translate(" +
                (thirdClassFemaleDead * 11 + 800) +
                ", 450) scale(3)"
              );
            } else {
              return (
                "translate(" +
                ((thirdClassFemaleDead - 49) * 11 + 800) +
                ", 475) scale(3)"
              );
            }
          } else {
            thirdClassMaleDead++;
            if (thirdClassMaleDead < 51) {
              return (
                "translate(" +
                (thirdClassMaleDead * 11 + 800) +
                ", 530) scale(3)"
              );
            } else if (thirdClassMaleDead < 101) {
              return (
                "translate(" +
                ((thirdClassMaleDead - 50) * 11 + 800) +
                ", 555) scale(3)"
              );
            } else if (thirdClassMaleDead < 151) {
              return (
                "translate(" +
                ((thirdClassMaleDead - 100) * 11 + 800) +
                ", 580) scale(3)"
              );
            } else if (thirdClassMaleDead < 201) {
              return (
                "translate(" +
                ((thirdClassMaleDead - 150) * 11 + 800) +
                ", 605) scale(3)"
              );
            } else if (thirdClassMaleDead < 251) {
              return (
                "translate(" +
                ((thirdClassMaleDead - 200) * 11 + 800) +
                ", 630) scale(3)"
              );
            } else {
              return (
                "translate(" +
                ((thirdClassMaleDead - 250) * 11 + 800) +
                ", 655) scale(3)"
              );
            }
          }
        }
      }
    })
    .attr("fill", function(d) {
      // paint it pink if female
      if (d.Sex === "female") {
        return "#bb6d82";
      } else {
        return "#6aa0f7";
      }
    })
    .on("mouseover", tipMouseover)
    .on("mouseout", tipMouseout);

    /**
     * Create the labels for the classes
     * @param {int} xVal x parameter
     * @param {int} yVal y parameter
     * @param {string} text1 Class text
     * @param {string} text2 number of passengers
     *
     *
     */

  function classes(xVal, yVal, text1, text2) {
    d3.select("svg")
      .append("text")
      .attr("x", xVal)
      .attr("y", yVal)
      .attr("dy", ".55em")
      .style("font-weight", "bold")
      .style("font-size", "20px")
      .style("font-family", "Helvetica")
      .text(text1);

    d3.select("svg")
      .append("text")
      .attr("x", xVal)
      .attr("y", yVal + 20)
      .attr("dy", ".55em")
      .style("font-weight", "bold")
      .style("font-size", "20px")
      .style("font-family", "Helvetica")
      .text(text2);
  }

  /**
   * Writes the number of passengers
   * @param {int} xVal x parameter
   * @param {int} yVal y parameter
   * @param {string} text Number of passengers
   *
   */

  function numbers(xVal, yVal, text) {
    d3.select("svg")
      .append("text")
      .attr("x", xVal)
      .attr("y", yVal)
      .attr("dy", ".55em")
      .style("font-weight", "bold")
      .style("font-size", "18px")
      .style("font-family", "Helvetica")
      .text(text);
  }

  numbers(725, 90, firstClassFemaleSurvived);
  numbers(725, 160, firstClassMaleSurvived);
  numbers(1375, 90, firstClassFemaleDead);
  numbers(1375, 160, firstClassMaleDead);

  numbers(725, 260, secondClassFemaleSurvived);
  numbers(725, 350, secondClassMaleSurvived);
  numbers(1375, 260, secondClassFemaleDead);
  numbers(1375, 350, secondClassMaleDead);

  numbers(725, 470, thirdClassFemaleSurvived);
  numbers(725, 540, thirdClassMaleSurvived);
  numbers(1375, 470, thirdClassFemaleDead);
  numbers(1368, 540, thirdClassMaleDead);

  d3
    .select("svg")
    .append("rect")
    .attr("x", 0)
    .attr("y", 225)
    .attr("width", 1400)
    .attr("height", 5)
    .style("stroke", "black")
    .style("fill", "black"); // set the line colour

  d3
    .select("svg")
    .append("rect")
    .attr("x", 0)
    .attr("y", 425)
    .attr("width", 1400)
    .attr("height", 5)
    .style("stroke", "black")
    .style("fill", "black"); // set the line colour

  d3
    .select("svg")
    .append("rect")
    .attr("x", 800)
    .attr("y", 50)
    .attr("width", 600)
    .attr("height", 650)
    .style("stroke", "black") // set the line colour
    .style("stroke-width", 3)
    .style("fill", "none");

  d3
    .select("svg")
    .append("rect")
    .attr("x", 155)
    .attr("y", 50)
    .attr("width", 600)
    .attr("height", 650)
    .style("stroke", "black")
    .style("stroke-width", 3)
    .style("fill", "none"); // set the line colour

  classes(
    20,
    100,
    "First Class",
    firstClassMaleDead +
      firstClassFemaleDead +
      firstClassMaleSurvived +
      firstClassFemaleSurvived +
      " People"
  );
  classes(
    20,
    300,
    "Second Class",
    secondClassMaleDead +
      secondClassFemaleDead +
      secondClassMaleSurvived +
      secondClassFemaleSurvived +
      " People"
  );
  classes(
    20,
    520,
    "Third Class",
    thirdClassMaleDead +
      thirdClassFemaleDead +
      thirdClassMaleSurvived +
      thirdClassFemaleSurvived +
      " People"
  );

  d3
    .select("svg")
    .append("text")
    .attr("x", 400)
    .attr("y", 20)
    .attr("dy", ".55em")
    .style("font-weight", "bold")
    .style("font-size", "20px")
    .style("font-family", "Helvetica")
    .text("Survivors");

  d3
    .select("svg")
    .append("text")
    .attr("x", 1100)
    .attr("y", 20)
    .attr("dy", ".55em")
    .style("font-weight", "bold")
    .style("font-size", "20px")
    .style("font-family", "Helvetica")
    .text("Deceased");
}

d3.csv(
  "titanic-data.csv",
  function(d) {
    // transform data
    return d;
  },
  draw
);
