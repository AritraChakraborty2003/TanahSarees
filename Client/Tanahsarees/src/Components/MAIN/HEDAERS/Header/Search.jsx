const Search = () => {
  return (
    <>
      <div className="w-[80%] flex gap-x-3 border-[#d5d5d5] border-[0.25px] p-[0.35px] mt-4">
        <a className="darktext text-[3.15vmin] ml-3">
          <i className="ri-search-line"></i>
        </a>
        <input
          type="text"
          placeholder="Search For Items.."
          className="darktext text-[2.15vmin] 2xl:text-[1.85vmin] pl-3 w-[250px] outline-none"
        />
      </div>
    </>
  );
};

export default Search;
