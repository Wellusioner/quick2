const header = document.querySelector('header');
const profileArrow = document.querySelector('.user-arrow');
const userProfile = document.querySelector('.user-profile');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.close-button');
const mask = document.querySelector('.mask');
const menuChanger = document.querySelectorAll('.menu-circle');

menuChanger.forEach(function(item){
  item.addEventListener('click', function(e){
    e.preventDefault();
    body.classList.toggle('collapsed');
  });
});

hamburger.addEventListener('click', function(){
  body.classList.add('open');
});
closeBtn.addEventListener('click', function(){
  body.classList.remove('open');
});
mask.addEventListener('click', function(){
  body.classList.remove('open');
});

if(profileArrow){
  profileArrow.addEventListener('click', function(){
    userProfile.classList.toggle('active');
  });
}

userProfile.addEventListener('mouseleave', function(){
  userProfile.classList.remove('active');
});

window.addEventListener('scroll', function(){
  if(window.scrollY > 50){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
});

// if(document.querySelector('.table-wrapper')){
  new MiniBar('.table-wrapper', {
    hideBars: false,
    alwaysShowBars: true,
  });
// }


const selects = document.querySelectorAll('.day-select');

selects.forEach(function(item){
  NiceSelect.bind(item);
});
if(document.getElementById('datepicker')){
  const picker = new Litepicker({ 
    element: document.getElementById('datepicker'),
    singleMode: false,
    tooltipText: {
      one: 'day',
      other: 'days'
    },
    tooltipNumber: (totalDays) => {
      return totalDays - 1;
    } 
  });
}

//Setting default values to CHART

window.Apex = {
  chart: {
    fontFamily: 'Helvetica,sans-serif',
    foreColor: '#BDC1C4',
    toolbar: {
      tools: {
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
        download: false
      }
    },
    animations: {
      enabled: true
    },
  },
  grid: {
    show: false,
  },
  title: {
    text: undefined,
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
    labels: {
      format: "",
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category"
  },
}

//Chart1

var options1 = {
  chart: {
    type: "area",
    height: 270
  },
  colors: ["#1C77D6"],
  stroke: {
    enabled: true,
    width: 1
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.8,
      opacityTo: 1,
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeWidth: 1,
    strokeColors: '#1C77D6',
    fillOpacity: 0,
    hover: {
      size: 4,
    }
  },
  series: [
    {
      data: [123,456,953,455,644,788,789]
    }
  ],
  
  tooltip: {
    custom: function({ series, dataPointIndex}) {
      return (
        '<div class="line-tooltip tooltip_box py-2 px-3">' +
        "<span class='weight-700 text-blue'>" +
          series[0][dataPointIndex] +
        "</span> Продаж"+
        "</div>"
      );
    },
  },
  labels: [
    "ПН",
    "ВТ",
    "СР",
    "ЧТ",
    "ПТ",
    "СБ",
    "ВС"
  ],
  xaxis: {
    crosshairs: {
      show: false,
    },
    labels: {
      format: "",
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category"
  },
  yaxis: {
    labels: {
      formatter: function (val, index) {
        return val.toFixed(0);
      }
    }
  }
};

if(document.querySelector("#chart1")){
  var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
  chart1.render();
}


//Chart2
var options2 = {
  chart: {
    type: "bar",
    height: 260,
  },
  colors: ['#6CB276', '#66C6F8', '#FE6158'],
  stroke: {
    enabled: false
  },
  grid: {
    show: true,
    borderColor: '#F5F5F5',
    strokeDashArray: 0,
  },
  fill: {
    type: "gradient",
    gradient: {
      type: 'vertical',
      shadeIntensity: 0,
      opacityFrom: 0.85,
      opacityTo: 1,
      colorsStops: [0,50,100]
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      data: [200, 500, 700]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: false,
  },
  labels: [
    "Aldox",
    "Thermo 65",
    "Aldox 2"
  ],
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
  },
  yaxis: {
    labels: {
      format: '',
    },
    tooltip: {
      enabled: false
    },
  },
  plotOptions: {
      bar: {
        startingShape: "rounded",
        endingShape: "rounded",
          borderRadius: 8,
          columnWidth: '30%',
          distributed: true,
      }
  },
  legend: {
      fontFamily: 'Helvetica, sans-serif',
      fontSize: '11px',
      markers: {
          radius: 12,
      }
  }
};
if(document.querySelector("#chart2")){
  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  chart2.render();
}

//Chart3
var options3 = {
  chart: {
    type: "area",
    height: 205,
  },
  colors: ["#3E85AE"],
  stroke: {
    show: false
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.1,
      opacityFrom: 0.8,
      opacityTo: 1,
      type: 'horizontal'
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
        return val + 'млн'
    },
    textAnchor: 'middle',
    offsetX: -5,
    offsetY: -15,
    style: {
        fontSize: '16px',
        fontFamily: 'Helvetica,sans-serif',
        fontWeight: 'bold'
    },
    background: {
      enabled: false,
    },
    dropShadow: {
        enabled: false,
    }
  },
  markers: {
    size: 8,
    colors: ['#3E9BCD'],
    strokeWidth: 4,
    strokeColors: '#fff',
    fillOpacity: 1,
    hover: {
      size: 8,
    }
  },
  grid: {
    show: false,
  },
  series: [
    {
      data: [200, 210, 250, 280,300]
    }
  ],
  title: {
    text: '221млн сум',
    align: 'left',
    margin: 10,
    floating: true,
    style: {
      fontSize:  '18px',
      fontWeight:  '900',
      fontFamily:  'Arial, sans-serif',
      color:  '#001636'
    },
  },
  tooltip: {
    enabled: false,
  },
  labels: [
    "Jun",
    "Feb",
    "Mar",
    "Apr",
    "May",
  ],
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
    crosshairs: {
      show: false,
      position: 'back',
      stroke: {
        color: '#fff',
        width: 5,
        dashArray: 10,
      },
    },
  },
  yaxis: {
    show: false,
  }
};
if(document.querySelector("#chart3")){
  var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
  chart3.render();
}

//Chart4
var options4 = {
  chart: {
    type: "area",
  },
  colors: ["#F55945"],
  stroke: {
    enabled: true,
    width: 2
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    borderColor: '#C1BED9',
  },
  series: [
    {
      data: [25,30,28,40,42,35,23,33]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
    custom: function({ series, dataPointIndex}) {
      return (
        '<div class="line-tooltip tooltip_box py-2 px-3 text-red weight-700">' +
          series[0][dataPointIndex] + "% возвратов"+
        "</div>"
      );
    },
  },
  labels: [
    "Яни",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
  ],
  xaxis: {
    labels: {
      format: "",
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
    crosshairs: {
      show: true,
      position: 'back',
      stroke: {
        color: '#B2433A',
        width: 1,
        dashArray: 5,
      },
    },
  },
  yaxis: {
    min: 0,
    forceNiceScale: true,
    labels: {
      formatter: function (val, index) {
        if(val === 0){
          return 0
        }
        return val.toPrecision(2) + '%';
      }
    },
  }
};
if(document.querySelector("#chart4")){
  var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
  chart4.render();
}

//Chart5
var options5 = {
  chart: {
    type: "pie",
    foreColor: '#414141',
    height: 200,
  },
  colors: ['#65AFD6', '#3E9167'],
  stroke: {
    width: 0
  },
  fill: {
    type: "gradient",
    gradient: {
      type: 'vertical',
      shadeIntensity: 0,
      opacityFrom: 0.8,
      opacityTo: 1,
      colorsStops: [0,50,100]
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
        return val + '%'
    },
    distributed: true,
    style: {
        fontSize: '15px',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: '400',
        colors: ['#fff']
    },
    background: {
      enabled: false,
    },
    dropShadow: {
        enabled: false,
    }
  },
  series: [55, 45],
  labels: ['Навои', 'Ташкент'],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: false,
  },  
  plotOptions: {
    pie: {
      expandOnClick: false,
      offsetX: 0,
      offsetY: 10,
      customScale: 1,
      dataLabels: {
          offset: -18,
      }, 
      donut: {
        size: '100%',
        background: 'transparent',
        labels: {
          show: false,
        }
      },      
    }
  },
  legend: {
      fontFamily: 'Helvetica, sans-serif',
      position: 'bottom',
      horizontalAlign: 'center', 
      inverseOrder: true,
      offsetY: -3,
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
          highlightDataSeries: false
      },
  }
};
if(document.querySelector("#chart5")){
  var chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
  chart5.render();
}

//Chart6
var options6 = {
  chart: {
    type: "area",
    height: 205,
  },
  colors: ["#3E85AE"],
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'round',
    colors: ['#999'],
    width: 1,
    dashArray: 0,      
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      opacityFrom: 0,
      opacityTo: 0,
      type: 'horizontal'
    }
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 6,
    colors: ['#fff'],
    strokeWidth: 5,
    strokeColors: '#0091FF',
    fillOpacity: 1,
    hover: {
      size: 6,
    }
  },
  grid: {
    show: false,
  },
  series: [
    {
      data: [200, 210, 250, 280,]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: false,
  },
  labels: [
    "ИЮНЬ",
    "ИЮЛЬ",
    "АВГУСТ",
    "СЕНТЯБРЬ",
  ],
  xaxis: {
    labels: {
      style: {
        fontSize: '9px',
        fontFamily: 'Helvetica, sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
  },
  yaxis: {
    show: false,
  }
};
if(document.querySelector("#chart6")){
  var chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
  chart6.render();
}

//Chart7
var options7 = {
  chart: {
    type: "donut",
    foreColor: '#414141',
    height: 200,
  },
  colors: ['#EA6566', '#7AD2DE', '#529FF9'],
  stroke: {
    width: 0
  },
  fill: {
    type: "solid",
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
        return val.toPrecision(2) + "%"
    },
    distributed: true,
    style: {
        fontSize: '15px',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: '400',
        colors: ['#fff']
    },
    background: {
      enabled: false,
      foreColor: '#fff',
      padding: 5,
      // borderRadius: 50,
      borderWidth: 0,
      // borderColor: '#fff',
      opacity: 1,
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 2,
        color: '#000',
        opacity: 0.15
      }
    },
    dropShadow: {
      enabled: false,
    }
  },
  series: [26, 30,54],
  labels: ['Аксессуары','Алюминиевые Профиля', 'ПВХ Профиля',],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: false,
  },  
  plotOptions: {
    pie: {
      expandOnClick: false,
      offsetX: 0,
      offsetY: 10,
      customScale: 1,
      dataLabels: {
          offset: 0,
      }, 
      donut: {
        size: '50%',
        labels: {
          show: false,
        }
      },      
    }
  },
  legend: {
      fontFamily: 'Helvetica, sans-serif',
      position: window.innerWidth > 575 ? 'right' : 'bottom',
      horizontalAlign: 'center', 
      inverseOrder: true,
      offsetY:  window.innerWidth > 575 ? 50 : 0,
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
          highlightDataSeries: false
      },
  }
};
if(document.querySelector("#chart7")){
  var chart7 = new ApexCharts(document.querySelector("#chart7"), options7);
  chart7.render();
}

//Chart8
var options8 = {
  chart: {
    type: "line",
  },
  colors: ["#147AD6", '#79D2DE', '#EC6666'],
  stroke: {
    enabled: true,
    width: 1
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 3,
    colors: undefined,
    strokeColors: '',
    strokeWidth: 0,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    onClick: undefined,
    onDblClick: undefined,
    showNullDataPoints: true,
    hover: {
      size: undefined,
      sizeOffset: 3
    }
  },
  grid: {
    show: true,
    strokeDashArray: 0,
    borderColor: '#D6D9DC',
  },
  series: [
    {
      name: 'ПВХ Профиля',
      data: [5,10,25,23,43,33]
    },
    {
      name: 'Алюминиевые Профиля',
      data: [10,20,30,40,22,35]
    },
    {
      name: 'Аксессуары',
      data: [28,35,28,40,35,33]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: true,
  },
  labels: [
    "ЯНВ",
    "ФЕВ",
    "МАР",
    "АПР",
    "МАЙ",
    "ИЮНЬ",
  ],
  xaxis: {
    labels: {
      format: "",
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
    crosshairs: {
      show: false,
    },
  },
  yaxis: {
    min: 0,
    forceNiceScale: true,
    labels: {
      formatter: function (val) {
        if(val === 0){
          return 0
        }
        return val;
      }
    },
  }
};
if(document.querySelector("#chart8")){
  var chart8 = new ApexCharts(document.querySelector("#chart8"), options8);
  chart8.render();
}

//Chart9
var options9 = {
  chart: {
    type: "bar",
    height: 195,
  },
  colors: ['#6CB276', '#66C6F8', '#FE6158', '#7B74F6', '#FFAE6F', '#E3EC79'],
  stroke: {
    enabled: false
  },
  grid: {
    show: true,
    borderColor: '#F5F5F5',
    strokeDashArray: 0,
  },
  fill: {
    type: "gradient",
    gradient: {
      type: 'vertical',
      shadeIntensity: 0,
      opacityFrom: 0.85,
      opacityTo: 1,
      colorsStops: [0,50,100]
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: '',
      data: [200,500,700,500,100,200]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: true,
    y: {
      formatter: function(a){
        return a
      },
    },
  },
  labels: [
    "Наманган",
    "Ташкент",
    "Бухара",
    "Навои",
    "Хоразм",
    "Самарқанд",
  ],
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
  },
  yaxis: {
    labels: {
      format: '',
    },
    tooltip: {
      enabled: false
    },
  },
  plotOptions: {
      bar: {
        startingShape: "rounded",
        endingShape: "rounded",
        borderRadius: 10,
        columnWidth: '25%',
        distributed: true,
      }
  },
  legend: {
      fontFamily: 'Helvetica, sans-serif',
      fontSize: '11px',
      markers: {
          radius: 12,
      },
      itemMargin: {
        horizontal: 5,
    },
  }
};
if(document.querySelector("#chart9")){
  var chart9 = new ApexCharts(document.querySelector("#chart9"), options9);
  chart9.render();
}
      
var options10 = {
  series: [
    {
      name: "9:00 - 12:00",
      data: [ 12, 43, 304, 78, 101, 403, 500 ]
    },
    {
      name: "13:00 - 16:00",
      data:  [ 45, 205, 346, 504, 12, 45, 65, ]
    },
    {
      name: "16:00 - 18:00",
      data:  [ 596, 78, 101, 520, 423, 310, 285, ]
    }
  ],
  chart: {
    height: 250,
    type: 'heatmap',
  },
  colors: ["#137AD6"],
  plotOptions: {
    heatmap: {
      shadeIntensity: 0,
      enableShades: true,
      radius: 10,
      useFillColorAsStroke: false,
      colorScale: {
        ranges: [{
            from: 0,
            to: 25,
            name: '25',
            color: '#7ED3DE'
          },
          {
            from: 26,
            to: 50,
            name: '50',
            color: '#79D2DD'
          },
          {
            from: 51,
            to: 75,
            name: '75',
            color: '#7AD2DE'
          },
          {
            from: 76,
            to: 100,
            name: '100',
            color: '#45C1FF'
          },
          {
            from: 101,
            to: 200,
            name: '200',
            color: '#3EBFFE'
          },
          {
            from: 201,
            to: 300,
            name: '300',
            color: '#1379D5'
          },
          {
            from: 301,
            to: 400,
            name: '400',
            color: '#1C7FD6'
          },
          {
            from: 401,
            to: 10000,
            name: '500',
            color: '#137AD6'
          }
        ]
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 10
  },
  tooltip: {
    enabled: false
  },
  title: {
    show: false
  },
  xaxis: {
    categories: [
      "ПН",
      "ВТ",
      "СР",
      "ЧТ",
      "ПТ",
      "СБ",
      "ВС"
    ],
    position: 'top',
  },
  yaxis: {
    reversed: true,
  },
  legend: {
    fontSize: '14px',
    fontFamily: 'Helvetica, sans-serif',
    position: 'bottom',
    formatter: function(a){
      if(a == '25'){
        return '0'
      }else
      if(a == '100'){
        return '100'
      } else
      if(a == '500'){
        return '500+'
      }
      return ''
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0
    },
    onItemClick: {
      toggleDataSeries: false
    },
    onItemHover: {
        highlightDataSeries: false
    },
  }
};

if(document.querySelector("#chart10")){
  var chart10 = new ApexCharts(document.querySelector("#chart10"), options10);
  chart10.render();
}


//Chart11
var config1 = {
  chart: {
    type: "area",
    height: 60
  },
  colors: ["#0091FF"],
  stroke: {
    enabled: true,
    width: 2
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.9,
      opacityTo: 0.5
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  grid: {
    show: false,
    padding:{
      top: -20,
      bottom: -20
    },
    strokeDashArray: 0,
    borderColor: '#C1BED9',
  },
  series: [
    {
      name: '',
      data: [15,30,5,80,22,55,13,73]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: true,
    y: {
      format: function(a){return a}
    },
    x: {
      show: false
    }
  },
  labels: [
    "Яни",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
  ],
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
    crosshairs: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    min: 0,
    forceNiceScale: true,
    labels: {
      formatter: function (val) {
        if(val === 0){
          return 0
        }
        return val.toPrecision(2) + '%';
      }
    },
  }
};
if(document.querySelector("#cash_chart")){
  var cashChart = new ApexCharts(document.querySelector("#cash_chart"), config1);
  cashChart.render();
}
//Chart12
var config2 = {
  chart: {
    type: "area",
    height: 60
  },
  colors: ["#F55945"],
  stroke: {
    enabled: true,
    width: 2
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.9,
      opacityTo: 0.5
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  grid: {
    show: false,
    padding: {
      top: -20,
      bottom: -20
    },
    strokeDashArray: 5,
    borderColor: '#C1BED9',
  },
  series: [
    {
      name: '',
      data: [15,30,5,80,22,55,13,73]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: true,
    y: {
      format: function(a){return a}
    },
    x: {
      show: false
    }
  },
  labels: [
    "Яни",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
  ],
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
    crosshairs: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    min: 0,
    forceNiceScale: true,
    labels: {
      formatter: function (val) {
        if(val === 0){
          return 0
        }
        return val.toPrecision(2) + '%';
      }
    },
  }
};
if(document.querySelector("#terminal_chart")){
  var terminalChart = new ApexCharts(document.querySelector("#terminal_chart"), config2);
  terminalChart.render();
}

//Chart13
var config3 = {
  chart: {
    type: "area",
    height: 60
  },
  colors: ["#44D7B6"],
  stroke: {
    enabled: true,
    width: 2
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.9,
      opacityTo: 0.5
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  grid: {
    show: false,
    padding: {
      top: -20,
      bottom: -20
    },
    strokeDashArray: 5,
    borderColor: '#C1BED9',
  },
  series: [
    {
      name: '',
      data: [15,30,5,80,22,55,13,73]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: true,
    y: {
      format: function(a){return a}
    },
    x: {
      show: false
    }
  },
  labels: [
    "Яни",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
  ],
  xaxis: {
    show: false,
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
    crosshairs: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    min: 0,
    forceNiceScale: true,
    labels: {
      formatter: function (val) {
        if(val === 0){
          return 0
        }
        return val.toPrecision(2) + '%';
      }
    },
  }
};
if(document.querySelector("#withdraw_chart")){
  var withDrawChart = new ApexCharts(document.querySelector("#withdraw_chart"), config3);
  withDrawChart.render();
}


















if(document.getElementById('map')){

  function init(){ 

    let center = mapData.length ? mapData[0].cords : [40.768810, 72.236280];
  
    var myMap = new ymaps.Map("map", {
      center,
      zoom: 10,
      controls: ['zoomControl', 'rulerControl']
    });
  
    mapData.forEach(function(item){
      const content = '<div>'+
        '<div>' + item.name + '</div>' +
        '<div class="weight-700">' + item.text +'</div>' +
      '</div>';
  
      const placemark = new ymaps.Placemark(item.cords, {
        balloonContent: content,
        iconContent: 'Icon Content'
      },{
        preset: "islands#circleDotIcon",
        iconColor: '#0000ff'
      });
      myMap.geoObjects.add(placemark);
    });
  }

  ymaps.ready(init);
}

