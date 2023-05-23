new Morris.Line({
    element: 'myfirstchart',
    lineColors:['orange'],
    data: [
      { year: '2008', value: 20 },
      { year: '2009', value: 10 },
      { year: '2010', value: 5 },
      { year: '2011', value: 5 },
      { year: '2012', value: 20 }
    ],
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value']
  });

  Morris.Donut({
    element: 'donut-example',
    data: [
      {label: "Salaries", value: 12},
      {label: "Fees Collected", value: 30},
      {label: "Rewards", value: 20}
    ],
    colors: ['orange', '#0072f2', 'red'],
    labelColor:'white'
  });