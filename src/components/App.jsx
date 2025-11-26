import { useState } from "react";
import "../styles/App.scss";
import Header from "./layout/Header";
import CountryList from "./layout/CountryList";
import Form from "./layout/Form";

const countries = [
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/es.webp",
    commonName: "España",
    officialName: "Reino de España",
    Continent: "Europe",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/it.webp",
    commonName: "Italia",
    officialName: "República Italiana",
    Continent: "Europe",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/ma.webp",
    commonName: "Marruecos",
    officialName: "Reino de marruecos",
    Continent: "Africa",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/eg.webp",
    commonName: "Egipto",
    officialName: "República arábica de Egipto",
    Continent: "Africa",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/us.webp",
    commonName: "Estados Unicos",
    officialName: "Estados Unidos de América",
    Continent: "America",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/ca.webp",
    commonName: "Canadá",
    officialName: "Canadá",
    Continent: "America",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/ar.webp",
    commonName: "Argentina",
    officialName: "República Argentina",
    Continent: "South America",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/mx.webp",
    commonName: "México",
    officialName: "Estados Unidos Mexicanos",
    Continent: "South America",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/cn.webp",
    commonName: "China",
    officialName: "República Popular de China",
    Continent: "Asia",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/jp.webp",
    commonName: "Japón",
    officialName: "Japón",
    Continent: "Asia",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/au.webp",
    commonName: "Australia",
    officialName: "Australia",
    Continent: "Oceania",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/nz.webp",
    commonName: "Nueva Zelanda",
    officialName: "Nueva Zelanda",
    Continent: "Oceania",
  },
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
