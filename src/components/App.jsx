import "../styles/App.scss";
import Header from "./layout/Header";

function App() {
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
      url:"https://www.banderas-mundo.es/data/flags/h80/ma.webp",
      commonName: "Marruecos",
      officialName: "Reino de marruecos",
    },
    {
      url:"https://www.banderas-mundo.es/data/flags/h80/eg.webp",
      commonName: "Egipto",
      officialName: "República arábica de Egipto",
    },
    {
      url:"https://www.banderas-mundo.es/data/flags/h80/us.webp",
      commonName: "Estados Unicos",
      officialName: "Estados Unidos de América",
    },
    {
      url:"https://www.banderas-mundo.es/data/flags/h80/ca.webp",
      commonName: "Canadá",
      officialName: "Canadá",
    },
    {
      url:"https://www.banderas-mundo.es/data/flags/h80/ar.webp",
      commonName: "Argentina",
      officialName: "República Argentina",
    },
    {
      url:"https://www.banderas-mundo.es/data/flags/h80/mx.webp",
      commonName: "México",
      officialName: "Estados Unidos Mexicanos",
    },
    {
      url:"https://www.banderas-mundo.es/data/flags/h80/cn.webp",
      commonName: "China",
      officialName: "República Popular de China",
    },
    {
      url:"https://www.banderas-mundo.es/data/flags/h80/jp.webp",
      commonName: "Japón",
      officialName: "Japón",
    },
    {
      url:"",
      commonName: "Japón",
      officialName: "Japón",
    },
    {
      url:"",
      commonName: "Australia",
      officialName: "Australia",
    },
    {
      url:"",
      commonName: "Nueva Zelanda",
      officialName: "Nueva Zelanda",
    },
  ];

  return (
    <div>
      <Header />
      <main className="main">
        <form className="form">
          <input
            className="input"
            type="text"
            name="filter"
            id="filter"
            placeholder="Find your country..."
          />
        </form>
        <ul className="countryList">
          <li className="country">
            <img src="https://www.banderas-mundo.es/data/flags/h80/es.webp" alt="Bandera de España" />
            <p>España</p>
            <p>Reino de España</p>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
