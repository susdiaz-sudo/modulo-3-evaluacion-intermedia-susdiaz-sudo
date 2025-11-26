import CountryItem from "./CountryItem";

function CountryList({country}) {
  return (
    <ul className="countryList">
      {country.map((eachCountryObj) => (
        <li key={eachCountryObj.commonName} className="country">
          <CountryItem eachCountryObj={eachCountryObj} />
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
