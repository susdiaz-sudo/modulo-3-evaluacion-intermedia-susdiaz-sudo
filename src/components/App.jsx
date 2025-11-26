import { useState } from "react";
import "../styles/App.scss";
import Header from "./layout/Header";
import CountryList from "./layout/CountryList";
import Form from "./layout/Form";

const countries = [
{
    url: "https://www.banderas-mundo.es/data/flags/h80/es.webp",
    commonName: "Spain",
    officialName: "Kingdom of Spain",
    Continent: "Europe"
},
{
    url: "https://www.banderas-mundo.es/data/flags/h80/it.webp",
    commonName: "Italy",
    officialName: "Italian Republic",
    Continent: "Europe"
},
{
    url: "https://www.banderas-mundo.es/data/flags/h80/ma.webp",
    commonName: "Morocco",
    officialName: "Kingdom of Morocco",
    Continent: "Africa"
},
{
    url: "https://www.banderas-mundo.es/data/flags/h80/eg.webp",
    commonName: "Egypt",
    officialName: "Arab Republic of Egypt",
    Continent: "Africa"
},
{
    url: "https://www.banderas-mundo.es/data/flags/h80/us.webp",
    commonName: "United States",
    officialName: "United States of America",
    Continent: "America"
},
{
    url: "https://www.banderas-mundo.es/data/flags/h80/ca.webp",
    commonName: "Canada",
    officialName: "Canada",
    Continent: "America"
},
{
    url: "https://www.banderas-mundo.es/data/flags/h80/ar.webp",
    commonName: "Argentina",
    officialName: "Argentine Republic",
    Continent: "South America"
},
{
    url: "https://www.banderas-mundo.es/data/flags/h80/mx.webp",
    commonName: "Mexico",
    officialName: "United Mexican States",
    Continent: "South America"
},
{
    url: "https://www.banderas-mundo.es/data/flags/h80/cn.webp",
    commonName: "China",
    officialName: "People's Republic of China",
    Continent: "Asia"
},
{
    url: "https://www.banderas-mundo.es/data/flags/h80/jp.webp",
    commonName: "Japan",
    officialName: "Japan",
    Continent: "Asia"
},
{
    url: "https://www.banderas-mundo.es/data/flags/h80/au.webp",
    commonName: "Australia",
    officialName: "Australia",
    Continent: "Oceania"
},
{
    url: "https://www.banderas-mundo.es/data/flags/h80/nz.webp",
    commonName: "New Zealand",
    officialName: "New Zealand",
    Continent: "Oceania"
}
];

function App() {
  const [country, setCountry] = useState(countries);
  const [filterText, setFilterText] = useState("");

  const filteredCountries = country.filter((eachCountry) =>
    eachCountry.commonName.toLowerCase().includes(filterText)
  );

  return (
    <div>
      <Header />
      <main className="main">
        <Form setFilterText={setFilterText} />
        <CountryList country={filteredCountries} />
      </main>
    </div>
  );
}

export default App;
