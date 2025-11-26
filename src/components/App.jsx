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
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/it.webp",
    commonName: "Italia",
    officialName: "República Italiana",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/ma.webp",
    commonName: "Marruecos",
    officialName: "Reino de marruecos",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/eg.webp",
    commonName: "Egipto",
    officialName: "República arábica de Egipto",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/us.webp",
    commonName: "Estados Unicos",
    officialName: "Estados Unidos de América",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/ca.webp",
    commonName: "Canadá",
    officialName: "Canadá",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/ar.webp",
    commonName: "Argentina",
    officialName: "República Argentina",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/mx.webp",
    commonName: "México",
    officialName: "Estados Unidos Mexicanos",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/cn.webp",
    commonName: "China",
    officialName: "República Popular de China",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/jp.webp",
    commonName: "Japón",
    officialName: "Japón",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/au.webp",
    commonName: "Australia",
    officialName: "Australia",
  },
  {
    url: "https://www.banderas-mundo.es/data/flags/h80/nz.webp",
    commonName: "Nueva Zelanda",
    officialName: "Nueva Zelanda",
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
