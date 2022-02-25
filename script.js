/*PELICULA-AÑO*/

let arrFilms = [];
let arrYears = [];

async function getFilms() {
  try {
    let response = await fetch(`https://swapi.dev/api/films/`);
    let data = await response.json();
    let films = data.results;
    for (i = 0; i < films.length; i++) {
      arrFilms.push(films[i].title);
      arrYears.push(films[i].release_date.substr(0, 4));
    }
  } catch (error) {
    console.log(`ERROR Error: ${error.stack}`);
  }
}
getFilms();

/* PERSONAJE-APARICION */

let arrChar = [];
let arrCharFilms = [];

async function getCharFilms() {
  try {
    let response2 = await fetch(`https://swapi.dev/api/people/`);
    let data2 = await response2.json();

    let char = data2.results;

    for (i = 0; i < char.length; i++) {
      arrChar.push(char[i].name);
      arrCharFilms.push(char[i].films.length);
      // for (j=0; j<charFilms.length; j++){
      //     arrCharFilms.push(charFilms[j].title)
      // }
    }
  } catch (error) {
    console.log(`ERROR Error: ${error.stack}`);
  }
}
getCharFilms();

/*GRAFICA IMPLEMENTADA*/
const inputsSW1 = {
  labels: arrFilms,

  series: [arrYears],
};

const inputsSW2 = {
  labels: arrChar,
  series: [arrCharFilms],
};

new Chartist.Line("#G1", inputsSW1);
new Chartist.Line("#G2", inputsSW2);

/*EJEMPLO DE GRÁFICA

var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
      [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
      [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
    ]
  };
  
  var options = {
    seriesBarDistance: 15
  };
  
  var responsiveOptions = [
    ['screen and (min-width: 641px) and (max-width: 1024px)', {
      seriesBarDistance: 10,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value;
        }
      }
    }],
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  
  new Chartist.Bar('.ct-chart', data, options, responsiveOptions); */
