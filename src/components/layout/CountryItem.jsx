function CountryItem({eachCountryObj}) {
  return (
    <>
      <img
        src={eachCountryObj.url}
        alt={"Bandera de " + eachCountryObj.commonName}
      />
      <p>{eachCountryObj.commonName}</p>
      <p>{eachCountryObj.officialName}</p>
    </>
  );
}

export default CountryItem;
