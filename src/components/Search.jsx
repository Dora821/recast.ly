var Search = (props) => {
  console.log(props.searchKey);
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" />
      <button onClick={props.searchKey} className="btn hidden-sm-down">
        <span onClick={props.searchKey} className="glyphicon glyphicon-search"></span>
      </button>
    </div>);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
