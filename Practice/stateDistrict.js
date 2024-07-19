const countryStateInfo = {
  USA: {
    California: {
      "Los Angeles": ["90001", "90002", "90003", "90004"],
      "San Diego": ["92093", "92101"],
    },
    Texas: {
      Dallas: ["75201", "75202"],
      Austin: ["73301", "73344"],
    },
  },
  Germany: {
    Bavaria: {
      Munich: ["80331", "80333", "80335", "80336"],
      Nuremberg: ["90402", "90403", "90404", "90405"],
    },
    Hessen: {
      Frankfurt: ["60306", "60308", "60309", "60310"],
      Surat: ["55246", "55247", "55248", "55249"],
    },
  },
};


//Load function 
window.onload = function (){

  const countrySelection = document.querySelector('#Country'),
        stateSelection = document.querySelector('#State'),
        citySelection = document.querySelector('#City'),
        zipSelection = document.querySelector('#Zip');

      stateSelection.disabled = true;
      citySelection.disabled = true;
      zipSelection.disabled = true;

      //clear all option from state selection

      stateSelection.length = 1;
      citySelection.length = 1;
      zipSelection.length = 1;


      for (let Country in countryStateInfo){
        countrySelection.options[countrySelection.options.length] = new option (
          Country,
          Country
        );
      } 


      //country change 

      countrySelection.onchange = (e) => {
        stateSelection.disabled = false;


        citySelection.length = 1;
        zipSelection.length = 1;

        for (let city in countryStateInfo[countrySelection.value] [e.target.value]) {
          citySelection.options[citySelection.options.length] = new option (
            city,
            city
          );
        }
      };

      //state change 

      stateSelection.onchange = (e) => {
        citySelection.disabled = false;


        citySelection.length = 1;
        zipSelection.length = 1;

        for (let city in countryStateInfo[countrySelection.value] [e.target.value]) {
          citySelection.options[citySelection.options.length] = new option (
            city,
            city
          );
        }
      };
}
