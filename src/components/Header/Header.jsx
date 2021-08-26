import React from "react";

export const Header = ({
  isListView,
  onLayoutToggle,
  isRefresh,
  onBtnRefresh,
  onTyping,
  search
}) => {
  console.log("Header: ", isRefresh);

  // const refreshPage = () => {
  //   window.location.reload(onBtnRefresh);
  // };
  return (
    <nav style={{minHeight: "118px"}}>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo center">
          React Users
        </a>
        <a
          href="#!"
          className="waves-effect waves-light btn"onClick={onLayoutToggle}>
          {" "}
          {isListView ? "List View" : "Grid View"}{" "}
        </a>
        <a
          href="#!"
          className="waves-effect waves-light btn"onClick={onBtnRefresh}>
          Refresh
        </a>
        <div className="center row">
            <div className="col s12 " >
              <div className="row" id="topbarsearch">
                <div className="input-field col s6 s12 red-text">
                            {/* <i className="red-text material-icons prefix">search</i> */}
<input type="text" placeholder="search" id="autocomplete-input" className="autocomplete white-text" 
onChange={onTyping}  value={search} />
                  </div>
                </div>
              </div>
            </div> 
        
      </div>
     
    </nav>
    
  );
};
