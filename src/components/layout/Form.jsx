function Form({ setFilterText }) {
  const handleSubmit = (ev) => {
    ev.prevent.default();
  };

  const handleInputFilter = (ev) => {
    setFilterText(ev.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        type="text"
        name="filter"
        id="filter"
        placeholder="Find your country..."
        onInput={handleInputFilter}
      />
      {/* <label className="label" htmlFor="filterContinent">By Continent</label>
      <input
        className="input"
        type="text"
        name="filterContinent"
        id="filterContinent"
        placeholder="Find your continent..."
      /> */}
    </form>
  );
}

export default Form;
