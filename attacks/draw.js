google.charts.load('current', {packages: ['corechart', 'line', 'table']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic(array) {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Dogs');

  data.addRows(array);

  var options = {
    hAxis: {
      title: 'Time'
    },
    vAxis: {
      title: 'Popularity'
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}
