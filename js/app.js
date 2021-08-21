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

if(document.querySelectorAll('.table-wrapper')){
	console.log(document.querySelectorAll('.table-wrapper'));
	document.querySelectorAll('.table-wrapper').forEach(function(item,index){
		new MiniBar(item, {
			hideBars: false,
			alwaysShowBars: true,
		});
	});
}

const selects = document.querySelectorAll('.day-select');

selects.forEach(function(item){
  NiceSelect.bind(item);
});
if(document.querySelectorAll('.datepicker')){
  const pickerList = document.querySelectorAll('.datepicker');

  pickerList.forEach(function(picker){
    new Litepicker({ 
      element: picker,
      singleMode: !!picker.getAttribute('data-mode'),
      tooltipText: {
        one: 'day',
        other: 'days'
      },
      tooltipNumber: (totalDays) => {
        return totalDays - 1;
      } 
    });
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



//Chart14
var options14 = {
  chart: {
    type: "bar",
    height: 200,
  },
  colors: ['#2E8338'],
  stroke: {
    enabled: false
  },
	grid: {
    show: true,
    borderColor: '#E6E6E6',
    strokeDashArray: 3,
    position: 'back',
    xaxis: {
			lines: {
				show: true
			}
    },   
    yaxis: {
			lines: {
				show: true
			}
    },  
    row: {
			colors: undefined,
			opacity: 0.5
    },  
    column: {
			colors: undefined,
			opacity: 0.5
    },  
    padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
    },  
	},
  fill: {
    type: "gradient",
		gradient: {
			type: "vertical",
			gradientToColors: ["#2AB24B"],
			stops: [0,70,100]
		}
  },
	dataLabels: {
    offsetY: 5,
		formatter: function (val, opts) {
      return val + "%"
  	},
    style: {
      colors: ["#fff"]
    }
  },
  series: [
    {
      data: [10,20,50,30,21,23,45,32,33,12,25,35]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
		custom: function({ series, dataPointIndex}) {
      return (
        '<div class="dark-tooltip py-2 px-3">' +
					"<span class='weight-700 text-white'>" +
						455 + " млн." + 
					"</span>" +
        "</div>"
      );
    },
  },
  labels: [],
  xaxis: {
		categories: [
			"Таш",
			"Анд",
			"Бух",
			"Джи",
			"Каш",
			"Нав",
			"Сам",
			"Сур",
			"Сыр",
			"Фер",
			"Хор",
			"Нук"
		],
    labels: {
      show: true,
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
		show: false
  },
  plotOptions: {
      bar: {
				startingShape: "rounded",
				endingShape: "rounded",
				borderRadius: 6,
				columnWidth: '60%',
			 	dataLabels: {
					position: 'top'
				}
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
if(document.querySelector("#region_chart")){
  var chart14 = new ApexCharts(document.querySelector("#region_chart"), options14);
  chart14.render();
}



//Chart15
var options15 = {
  chart: {
    type: "donut",
    foreColor: '#414141',
    height: 200,
  },
  colors: ['#6BBC7B', '#4C94E7'],
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
        fontWeight: '700',
        colors: ['#fff']
    },
		background: {
			enabled: true,
			foreColor: '#000',
			padding: 6,
			borderRadius: 5,
			borderWidth: 0,
			borderColor: '#fff',
			opacity: 1,
			dropShadow: {
				enabled: false,
			}
		},
		dropShadow: {
			enabled: false,
		},
  },
  series: [25,75],
  labels: ['Обнавленные', 'Общее количество'
					],
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
if(document.querySelector("#chart15")){
  var chart15 = new ApexCharts(document.querySelector("#chart15"), options15);
  chart15.render();
}




//Chart16
var options16 = {
  chart: {
    type: "donut",
    foreColor: '#414141',
    height: 250,
		events: {
			click: function(one, two, three){
				console.log('one: ', one);
				console.log('two: ', two);
				console.log('three: ', three);
			},
		}
  },
  colors: ['#529FF9','#7AD2DE','#EA6566'],
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
        fontWeight: '700',
        colors: ['#fff']
    },
    background: {
      enabled: true,
      foreColor: '#000',
      padding: 5,
       borderRadius: 5,
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
  series: [50,25,25],
  labels: ['ПВХ Профиля','Алюминиевые Профиля','Аксессуары'],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: true,
		followCursor: false,
		custom: function({series, seriesIndex, dataPointIndex, w}) {
    	return '<div class="donut-tooltip bg-white p-2 ">' +
      	'<div class="d-flex justify-content-between align-items-center bg-grey rounded-1 p-2 mb-1 text-secondary">' + '<span>Aldox</span>' + '<span>' + series[seriesIndex] + '%</span>' + '</div>'+
      	'<div class="d-flex justify-content-between align-items-center bg-grey rounded-1 p-2 mb-1 text-secondary">' + '<span>Aldox</span>' + '<span>' + series[seriesIndex] + '%</span>' + '</div>'+
      	'<div class="d-flex justify-content-between align-items-center bg-grey rounded-1 p-2 mb-1 text-secondary">' + '<span>Aldox</span>' + '<span>' + series[seriesIndex] + '%</span>' + '</div>'+
      '</div>'
  	}
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
if(document.querySelector("#chart16")){
  var chart16 = new ApexCharts(document.querySelector("#chart16"), options16);
  chart16.render();
}






//Chart17
var options7 = {
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
if(document.querySelector("#chart17")){
  var chart17 = new ApexCharts(document.querySelector("#chart17"), options17);
  chart17.render();
}



//Chart18
var options18 = {
  chart: {
    type: "bar",
    height: 370,
  },
  colors: ['#31A03B', '#308ED1', '#FD4121', '#2AB0AA', '#8857BF', '#ECAE23'],
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
			gradientToColors: ['#2CB748','#3CB5F6','#FA994F','#53DDDA','#A96FE4','#FBD908'],
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
    enabled: false,
    y: {
      formatter: function(a){
        return a
      },
    },
  },
  labels: [
    "Aldox 2",
    "Thermo 70",
    "TRIO 6000",
    "Aldox 2",
    "Thermo 70",
    "TRIO 6000",
  ],
  xaxis: {
    labels: {
      show: true,
			style: {
				fontWeight: '700',
				colors: ['#36882D', '#266CB0', '#FE2010', '#1FA59E', '#7E50B4', '#E7A12B'],
			} 
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
        borderRadius: 6,
        columnWidth: '35%',
        distributed: true,
      }
  },
  legend: {
		show: false,
  }
};
if(document.querySelector("#chart18")){
  var chart18 = new ApexCharts(document.querySelector("#chart18"), options18);
  chart18.render();
}



//Chart19
var options19 = {
  chart: {
    type: "bar",
    height: 300,
  },
  colors: ['#2E8036', '#3E8FBB'],
  stroke: {
    enabled: false
  },
  grid: {
    show: true,
    borderColor: '#FAFAFA',
    strokeDashArray: 0,
    xaxis: {
			lines: {
				show: true
			}
    },   
    yaxis: {
			lines: {
				show: true
			}
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: 'horizontal',
			gradientToColors: ['#29B54C','#3FB8F4'],
			inverseColors: false,
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: '',
      data: [200,500,]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: false,
    y: {
      formatter: function(a){
        return a
      },
    },
  },
  labels: [
    "2020",
    "2021",
  ],
  xaxis: {
    labels: {
      show: true,
			style: {
				fontSize: 14
				
			} 
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
			style: {
				colors: '#000',
				fontSize: 13,
			},
      format: '',
    },
    tooltip: {
      enabled: false
    },
  },
  plotOptions: {
      bar: {
				horizontal: true,
        startingShape: "rounded",
        endingShape: "rounded",
        borderRadius: 8,
				 barHeight: '40%',
//        columnWidth: '30%',
        distributed: true,
				rangeBarOverlap: false,
				rangeBarGroupRows: true,
      }
  },
  legend: {
		show: false,
  }
};
if(document.querySelector("#chart19")){
  var chart19 = new ApexCharts(document.querySelector("#chart19"), options19);
  chart19.render();
}