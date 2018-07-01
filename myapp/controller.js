let from = encodeURLComponent(from)
let to = encodeURLComponent(to)
let query = $(from)_$(to);

const url = https://www.currencyconverterapi.com/api/v5/convert?q={$query}&compact=ultra


fetch(url).then((response) => {
    return response.json();
}).then((data) => {
console.log(data)
})
}
