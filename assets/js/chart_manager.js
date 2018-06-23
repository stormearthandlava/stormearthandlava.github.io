/**
 * Script to load data and manage azerite_traits and trinket charts.
 */

var dev_mode = true;

var path_to_data = "https://bloodmallet.com/alpha/json/";

var fight_style = "patchwerk"; // not necessary
var data_type;

var light_color = "#eee";
var medium_color = "#828282";
var dark_color = "#222";

var baseline_chart = {
  chart: {
    type: "bar",
    backgroundColor: null,
    //borderColor: medium_color,
    //borderWidth: 1
  },
  legend: {
    align: "right",
    backgroundColor: null,
    borderColor: medium_color,
    borderWidth: 0,
    floating: false,
    reversed: true,
    shadow: false,
    verticalAlign: "bottom",
    x: 0,
    y: 0,
    itemStyle: {
      color: medium_color,
    },
    itemHoverStyle: {
      color: medium_color,
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false,
      },
      point: {
        events: {
          click: function (event) {
            var chart = this.series.yAxis;
            chart.removePlotLine('helperLine');
            chart.addPlotLine({
              value: this.stackY,
              color: medium_color,
              width: 2,
              id: 'helperLine',
              zIndex: 5,
              label: {
                text: this.series.name + ' ' + this.category,
                style: {
                  color: medium_color,
                  fontSize: "16px",
                },
                align: 'left',
                verticalAlign: 'bottom',
                rotation: 0,
                y: -5
              }
            });
          }
        }
      },
    },
    series: {
      stacking: "normal",
      borderColor: dark_color,
      events: {
        legendItemClick: function () { return false; }
      },
      style: {
        textOutline: false,
        //fontSize: "1.16px",
      }
    }
  },
  series: [
    {
      color: light_color,
      data: [
        1,
        1,
        3,
        1,
        3
      ],
      name: "b main",
      showInLegend: false
    },
    {
      color: dark_color,
      data: [
        0,
        0,
        0,
        1,
        0
      ],
      name: "b's emptiness",
      showInLegend: false
    }, {
      color: light_color,
      data: [
        0,
        0,
        0,
        1,
        0
      ],
      name: "b's finishing touch",
      showInLegend: false
    }
  ],
  subtitle: {
    text: "Subtitle placeholder",
    useHTML: true,
    style: {
      color: light_color,
      fontSize: "16px"
    }
  },
  title: {
    text: "", //"Title placeholder",
    useHTML: true,
    style: {
      color: light_color,
      fontSize: "1.2rem"
    }
  },
  tooltip: {
    backgroundColor: dark_color,
    borderColor: medium_color,
    formatter: function () {
      var s = '<div style="margin: -4px -6px -11px -7px; z-index: 9999!important; padding: 3px 3px 6px 3px; background-color:' + dark_color + '"><b>' + this.x + '</b>';
      var cumulative_amount = 0;
      for (var i = this.points.length - 1; i >= 0; i--) {
        cumulative_amount += this.points[i].y;
        if (this.points[i].y !== 0) {
          s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name + '</span>: ' + Intl.NumberFormat().format(cumulative_amount);
        }
      }
      s += '</div>';
      return s;
    },
    headerFormat: "<b>{point.x}</b>",
    shared: true,
    style: {
      color: light_color,
      fontSize: "1rem",
    },
    useHTML: true
  },
  xAxis: {
    categories: [
      "b",
      "b",
      "b",
      "b",
      "b",
    ],
    labels: {
      useHTML: true,
      style: {
        color: light_color,
        fontSize: "16px",
      }
    },
    gridLineWidth: 0,
    gridLineColor: medium_color,
    lineColor: medium_color,
    tickColor: medium_color
  },
  yAxis: {
    labels: {
      //enabled: true,
      style: {
        color: medium_color
      },
    },
    min: 0,
    stackLabels: {
      enabled: true,
      formatter: function () {
        return Intl.NumberFormat().format(this.total);
      },
      style: {
        color: light_color,
        textOutline: false,
        fontSize: "16px",
      }
    },
    title: {
      text: "\u0394 Damage per second",
      style: {
        color: medium_color
      }
    },
    gridLineWidth: 1,
    gridLineColor: medium_color
  }
};

var charts = {
  "patchwerk": Highcharts.chart('chart_patchwerk', baseline_chart),
  "beastlord": Highcharts.chart('chart_beastlord', baseline_chart)
};

var loaded_data = {};

var ilevel_color_table = {
  "300": "#1f78b4",
  "310": "#a6cee3",
  "320": "#33a02c",
  "330": "#b2df8a",
  "340": "#e31a1c",
  "350": "#fb9a99",
  "360": "#ff7f00",
  "370": "#cab2d6",
  "380": "#fdbf6f"
};

var class_color = "#0070DE";

/**
 *
 * Functions
 *
 */

// Load data on document load
document.addEventListener("DOMContentLoaded", function () {
  if (dev_mode) {
    console.log("addEventListener to DOMContentLoaded");
    console.log(window.location.pathname);
  }
  let path_components = window.location.pathname.split("/");
  data_type = path_components[path_components.length - 1].split(".")[0];

  load_data();
});

function load_data() {
  if (dev_mode) {
    console.log("load_data()");
  }

  // early exit if an unknown page uses the function
  if (data_type != "trinkets" && data_type != "azerite_traits") {
    if (dev_mode) {
      console.log("Unexpected data_type '" + data_type + "' detected.");
    }
    return;
  }

  // load data only once
  if (load_data["patchwerk"]) {
    if (dev_mode) {
      console.log("Patchwerk data is already present. Aborting load_data()");
    }
    return;
  }
  if (load_data["beastlord"]) {
    if (dev_mode) {
      console.log("beastlord data is already present. Aborting load_data()");
    }
    return;
  }

  fetch(path_to_data + data_type + "/shaman_elemental_patchwerk.json")
    .then(function(response){
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(json) {
        loaded_data["patchwerk"] = json;
        update_chart("patchwerk");
      });
    }).catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

  fetch(path_to_data + data_type + "/shaman_elemental_beastlord.json")
    .then(function(response){
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(json) {
        loaded_data["beastlord"] = json;
        update_chart("beastlord");
      });
    }).catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

function update_chart(fight_type) {
  if (dev_mode) {
    console.log(fight_type);
  }
  console.log(loaded_data[fight_type]);

  let standard_chart = charts[fight_type];

  // set title and subtitle
  standard_chart.setTitle({
      //text: loaded_data[fight_style]["title"]
    }, {
      text: loaded_data[fight_style]["subtitle"]
    },
    false
  );


  // check for sorted list in provided data
  if ("sorted_data_keys" in loaded_data[fight_style]) {
    var dps_ordered_data = loaded_data[fight_style]["sorted_data_keys"];
  } else {
    // fallback, create sorted list on our own
    // https://stackoverflow.com/questions/25500316/sort-a-dictionary-by-value-in-javascript
    // create a list of the data with their highest dps value
    var dps_ordered_data = Object.keys(loaded_data[fight_style]["data"])
      .map(function (key) {
        return [
          key,
          Math.max(...Object.values(
            loaded_data[fight_style]["data"][key]
          ))
        ]
      });
    // order said list
    dps_ordered_data.sort(function (first, second) { return second[1] - first[1]; });
    // get rid of dps values and keep only the trinket names
    dps_ordered_data = dps_ordered_data.map(x => x[0]);
  }

  // rewrite the trinket names
  standard_chart.update({
    xAxis: {
      categories: dps_ordered_data
    }
  }, false);

  // delete all old series data
  while (standard_chart.series[0]) {
    standard_chart.series[0].remove(false);
  }

  // TODO: Start fixing here, once some new data is generated and uploaded to bloodmallet.com

  // basically: if something was simmed with multiple steps
  if ("simulated_steps" in loaded_data[fight_style]) {

    for (itemlevel_position in loaded_data[fight_style]["simulated_steps"]) {

      let itemlevel = loaded_data[fight_style]["simulated_steps"][itemlevel_position];
      var itemlevel_dps_values = [];

      for (data of dps_ordered_data) {

        // check for zero dps values and don't change them
        if (Number(loaded_data[fight_style]["data"][data][itemlevel]) > 0) {

          // if lowest itemlevel is looked at, substract baseline
          if (itemlevel_position == loaded_data[fight_style]["simulated_steps"].length - 1) {

            if (itemlevel in loaded_data[fight_style]["data"][data]) {
              itemlevel_dps_values.push(loaded_data[fight_style]["data"][data][itemlevel] - loaded_data[fight_style]["data"]["baseline"][Math.min(...loaded_data[fight_style]["simulated_steps"])]);
            } else {
              itemlevel_dps_values.push(0);
            }


          } else { // else substract lower itemlevel value of same item

            // if lower itemlevel is zero we have to assume that this item needs to be compared now to the baseline
            if (loaded_data[fight_style]["data"][data][loaded_data[fight_style]["simulated_steps"][String(Number(itemlevel_position) + 1)]] == 0 || !(loaded_data[fight_style]["simulated_steps"][String(Number(itemlevel_position) + 1)] in loaded_data[fight_style]["data"][data])) {

              itemlevel_dps_values.push(loaded_data[fight_style]["data"][data][itemlevel] - loaded_data[fight_style]["data"]["baseline"][Math.min(...loaded_data[fight_style]["simulated_steps"])]);

            } else { // standard case, next itemlevel is not zero and can be used to substract from the current value

              itemlevel_dps_values.push(loaded_data[fight_style]["data"][data][itemlevel] - loaded_data[fight_style]["data"][data][loaded_data[fight_style]["simulated_steps"][String(Number(itemlevel_position) + 1)]]);
            }

          }

        } else {
          if (itemlevel in loaded_data[fight_style]["data"][data]) {
            itemlevel_dps_values.push(loaded_data[fight_style]["data"][data][itemlevel]);
          } else {
            itemlevel_dps_values.push(0);
          }
        }

      }

      standard_chart.addSeries({
        color: ilevel_color_table[itemlevel],
        data: itemlevel_dps_values,
        name: itemlevel,
        showInLegend: true
      }, false);
    }
  } else { // if no itemlevels were used the dps values are exactly at the keys

    var dps_values = [];
    for (category of dps_ordered_data) {
      dps_values.push(loaded_data[fight_style]["data"][category]);
    }

    standard_chart.addSeries({
      color: class_colors[chosen_class],
      data: dps_values,
      name: data_view,
      showInLegend: true
    }, false);
  }
  document.getElementById("chart").style.height = 200 + dps_ordered_data.length * 30 + "px";
  standard_chart.setSize(document.getElementById("chart").style.width, document.getElementById("chart").style.height);
  standard_chart.redraw();


}
