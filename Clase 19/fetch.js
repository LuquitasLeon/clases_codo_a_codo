fetch("https://restcountries.com/v3.1/alpha?codes=ar")
  .then((res) => res.json())
  .then((info) => console.log(info));

fetch("https://restcountries.com/v3.1/alpha?codes=ar")
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0].name.common);
  });
