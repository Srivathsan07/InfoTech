// first canvas

var xValues = [2011, 2012, 2013, 2014, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

        new Chart("myLineChart", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [
                    {
                    fill: false,
                    label: 'JavaScript Developer',
                    lineTension: 0,
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    data: [100, 500, 600, 800, 700, 900, 1200, 850, 970, 750, 1100]
                    },
                    {
                        fill: false,
                        label: 'React Developer',
                        lineTension: 0,
                        borderColor: 'green',
                        data: [98, 450, 750, 900, 650, 988, 1550, 880, 600, 800, 1300]
                    },
                    {
                        fill: false,
                        label: 'Chart Js Developer',
                        lineTension: 0,
                        borderColor: 'red',
                        data: [88, 800, 450, 550, 350, 820, 620, 730, 740, 660, 669]
                    }
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Software developers in organization',
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Employees'
                        }
                    }
                }
            }
        });

       