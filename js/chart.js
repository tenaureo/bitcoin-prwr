google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var chartData = new google.visualization.DataTable();
    chartData.addColumn('date', 'X');
    chartData.addColumn('number', 'Bitcoin');

    chartData.addRows([
        [new Date(2009, 0, 1), 0],
        [new Date(2010, 2, 5), 0],
        [new Date(2010, 2, 17), 0.003],
        [new Date(2010, 6, 1), 0.08],
        [new Date(2011, 1, 1), 1],
        [new Date(2011, 6, 8), 31],
        [new Date(2011, 11, 1), 2],
        [new Date(2012, 11, 1), 13],
        [new Date(2013, 3, 11), 266],
        [new Date(2013, 4, 1), 130],
        [new Date(2013, 5, 1), 100],
        [new Date(2013, 10, 1), 200],
        [new Date(2013, 10, 29), 1242],
        [new Date(2013, 11, 1), 600],
        [new Date(2013, 11, 12), 1000],
        [new Date(2013, 11, 23), 500],
        [new Date(2013, 11, 30), 650],
        [new Date(2014, 0,  10), 1000],
        [new Date(2014, 0, 12), 850],
        [new Date(2014, 1, 1), 600],
        [new Date(2014, 1, 25), 750],
        [new Date(2014, 2, 1), 700],
        [new Date(2014, 2, 25), 450],
        [new Date(2014, 3, 11), 340],
        [new Date(2014, 4, 1), 440],
        [new Date(2014, 4, 30), 630],
        [new Date(2015, 2, 1), 300],
        [new Date(2015, 2, 25), 200],
        [new Date(2015, 7, 1), 250],
        [new Date(2015, 10, 1), 504],
        [new Date(2016, 4, 1), 450],
        [new Date(2016, 5, 1), 750],
        [new Date(2016, 6, 1), 600],
        [new Date(2016, 8, 1), 780],
        [new Date(2017, 0, 1), 1150],
        [new Date(2017, 0, 12), 750],
        [new Date(2017, 2, 1), 1290],
        [new Date(2017, 4, 1), 2000],
        [new Date(2017, 5, 1), 3200],
        [new Date(2017, 7, 1), 4400],
        [new Date(2017, 8, 1), 5000],
        [new Date(2017, 8, 12), 2900],
        [new Date(2017, 9, 13), 5600],
        [new Date(2017, 9, 21), 6180],
        [new Date(2017, 10, 6), 7300],
        [new Date(2017, 10, 12), 5519],
        [new Date(2017, 10, 20), 8100],
        [new Date(2017, 11, 5), 12000],
        [new Date(2017, 11, 8), 18000],
        [new Date(2017, 11, 22), 13800],
        [new Date(2018, 1, 5), 6200],
        [new Date(2018, 9, 31), 6300],
        [new Date(2018, 10, 24), 3778],
        [new Date(2019, 3, 5), 5256],
        [new Date(2019, 4, 29), 8721],
        [new Date(2019, 5, 16), 9311],
        [new Date(2019, 5, 22), 10738],
        [new Date(2019, 5, 26), 12637],
        [new Date(2019, 6, 2), 10500],
        [new Date(2019, 6, 10), 12500],
        [new Date(2019, 6, 17), 9400],
        [new Date(2019, 6, 22), 10500],
        [new Date(2019, 6, 30), 9500],
        [new Date(2019, 7, 9), 11950],
        [new Date(2019, 7, 16), 10300],
        [new Date(2019, 7, 20), 10900],
        [new Date(2019, 7, 30), 9500],
        [new Date(2019, 8, 5), 10500],
        [new Date(2019, 8, 23), 10070],
        [new Date(2019, 8, 27), 8100],
        [new Date(2019, 9, 24), 7500],
        [new Date(2019, 9, 28), 9500],
        [new Date(2019, 10, 25), 7000],
        [new Date(2020, 0, 9), 8000],
        [new Date(2020, 0, 15), 8800],
        [new Date(2020, 0, 31), 9500],
        [new Date(2020, 1, 13), 10300],
        [new Date(2020, 2, 2), 8500],
        [new Date(2020, 2, 7), 9100],
        [new Date(2020, 2, 13), 4970],
        [new Date(2020, 2, 21), 6100],
        [new Date(2020, 2, 27), 6700],
        [new Date(2020, 2, 30), 5900],
        [new Date(2020, 3, 9), 7300],
        [new Date(2020, 3, 30), 8800],
        [new Date(2020, 4, 8), 9950],
        [new Date(2020, 5, 2), 10100],
        [new Date(2020, 6, 28), 11000],
        [new Date(2020, 7, 2), 11700],
        [new Date(2020, 8, 4), 10200],
        [new Date(2020, 8, 20), 11000],
        [new Date(2020, 8, 25), 10700],
        [new Date(2020, 9, 13), 11500],
        [new Date(2020, 9, 22), 12800],
        [new Date(2020, 9, 28), 13600],
        [new Date(2020, 10, 5), 14100],
        [new Date(2020, 10, 6), 15500],
        [new Date(2020, 10, 8), 14800],
        [new Date(2020, 10, 9), 15400],
        [new Date(2020, 10, 19), 17800],
        [new Date(2020, 10, 25), 19100],
        [new Date(2020, 10, 27), 17150],
        [new Date(2020, 10, 29), 17700],
        [new Date(2020, 10, 30), 18100],
    ]);

    var options = {
        hAxis: {
            format: 'M.yy',
            title: 'Zeit'
        },
        vAxis: {
            title: 'Kurs BTC - USD '
        },
        backgroundColor : '#181A1B',
        explorer: {}
        /*trendlines: {
            0: {
                color: '#f7931a'
            }
        }*/
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(chartData, options);
}