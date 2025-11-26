import "../styles/App.scss";
import Header from "./layout/Header";

function App() {
  const paises = [
    {
      commonName: "España",
      officialName: "Reino de España",
    },
    {
      commonName: "Italia",
      officialName: "República Italiana",
    },
    {
      commonName: "Marruecos",
      officialName: "Reino de marruecos",
    },
    {
      commonName: "Egipto",
      officialName: "República arábica de Egipto",
    },
    {
      commonName: "Estados Unicos",
      officialName: "Estados Unidos de América",
    },
    {
      commonName: "Canadá",
      officialName: "Canadá",
    },
    {
      commonName: "Argentina",
      officialName: "República Argentina",
    },
    {
      commonName: "México",
      officialName: "Estados Unidos Mexicanos",
    },
    {
      commonName: "China",
      officialName: "República Popular de China",
    },
    {
      commonName: "Japón",
      officialName: "Japón",
    },
    {
      commonName: "Japón",
      officialName: "Japón",
    },
    {
      commonName: "Australia",
      officialName: "Australia",
    },
    {
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
      </main>
    </div>
  );
}

export default App;
