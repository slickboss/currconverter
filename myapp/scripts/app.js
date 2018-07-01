let currency = document.getElementById("currency");
let from = document.getElementById("from");
let to = document.getElementById("to");
let final = document.getElementById("final");
let convert = document.getElementById("convert");


self.addEventListener('activate', function () {
    console.log('SW Activated');
  });
  

convert.onclick = (event) => {
    let key = `${from.value}_${to.value}`;
    fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${key}&compact=ultra`)
    .then((response) => response.json()) // Transform the data into json
    .then((response) => {
        final.value = response[key] * currency.value;
    });
};

   fetch('https://free.currencyconverterapi.com/api/v5/currencies')
   .then((response) => response.json()) // Transform the data into json
   .then((response) => {
    Object.entries(response.results).forEach(([key, value]) => {
        let fromOption = new Option(`${value.currencyName} (${value.currencySymbol})`, key);
        let toOption = new Option(`${value.currencyName} (${value.currencySymbol})`, key);
        from.add(fromOption);
        to.add(toOption);
    });

   });



