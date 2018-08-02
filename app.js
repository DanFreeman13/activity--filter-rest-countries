var request = superagent;
var API_URL = 'https://restcountries.eu/rest/v2/all'
var container = document.querySelector('tbody');
var strong = document.querySelector('strong');

var buttons = document.querySelectorAll('button')

buttons.forEach(function(button){
  button.addEventListener('click', function(e){

    var buttonName = e.currentTarget.textContent.toLowerCase();

    request
    .get(API_URL)
    .then(function (response){
      var paises = response.body;
      var counter = 0;
      container.innerHTML = "";
      paises.forEach(function (pais) {
        var Name = pais.name;
        var Flag = pais.flag;

        var Latitud = pais.latlng[0];
        var Longitud = pais.latlng[1]

        var firstLanguage = pais.languages[0].iso639_1;



        if ( buttonName === 'all') {
          var newTableRow = document.createElement('tr');
          var newTableName = document.createElement('td');
          newTableName.textContent=Name;
          var newTableLatitud = document.createElement('td')
          newTableLatitud.textContent=Latitud;
          var newTableLongitud = document.createElement('td')
          newTableLongitud.textContent=Longitud;
          var newTableFlag = document.createElement('td')
          var newTableFlagImage = document.createElement('img')
          newTableFlagImage.setAttribute("src", Flag);
          newTableFlagImage.setAttribute("class", "flag");

          newTableFlag.appendChild(newTableFlagImage);
          newTableRow.appendChild(newTableName);
          newTableRow.appendChild(newTableLatitud);
          newTableRow.appendChild(newTableLongitud);
          newTableRow.appendChild(newTableFlag);
          container.appendChild(newTableRow);

          counter++;
        } else if (buttonName === firstLanguage){
          var newTableRow = document.createElement('tr');
          var newTableName = document.createElement('td');
          newTableName.textContent=Name;
          var newTableLatitud = document.createElement('td')
          newTableLatitud.textContent=Latitud;
          var newTableLongitud = document.createElement('td')
          newTableLongitud.textContent=Longitud;
          var newTableFlag = document.createElement('td')
          var newTableFlagImage = document.createElement('img')
          newTableFlagImage.setAttribute("src", Flag);

          newTableFlag.appendChild(newTableFlagImage);
          newTableRow.appendChild(newTableName);
          newTableRow.appendChild(newTableLatitud);
          newTableRow.appendChild(newTableLongitud);
          newTableRow.appendChild(newTableFlag);
          container.appendChild(newTableRow);

          counter++;
        }
        strong.textContent = counter;
      })
    })
  })
})
