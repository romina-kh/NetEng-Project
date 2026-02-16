const ProductFilters = ({ search, setSearch, category, setCategory }) => {
    return (
      <div className="filters">
        <input
          type="text"
          placeholder="جستجوی سرور..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
  
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">همه</option>
          <option value="linux">Linux</option>
          <option value="windows">Windows</option>
        </select>
      </div>
    );
  };
  
  export default ProductFilters;  