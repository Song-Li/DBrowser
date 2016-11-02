google.charts.load('current', {packages: ['corechart', 'line', 'table']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic(array) {
  if(array == undefined) return ;

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'DeterFox');

  data.addRows(array);

  var options = {
    hAxis: {
      title: 'Size'
    },
    vAxis: {
      title: 'Time'
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}
