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
    </form>
  );
}

export default Form;
