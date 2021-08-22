import React from "react";

export const Header = ({
  isListView,
  onLayoutToggle,
  isRefresh,
  onBtnRefresh,
}) => {
  console.log("Header: ", isRefresh);

  // const refreshPage = () => {
  //   window.location.reload(onBtnRefresh);
  // };
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo center">
          React Users
        </a>
        <a
          href="#!"
          className="waves-effect waves-light btn"
          onClick={onLayoutToggle}
        >
          {" "}
          {isListView ? "List View" : "Grid View"}{" "}
        </a>
        <a
          href="#!"
          className="waves-effect waves-light btn"
          onClick={onBtnRefresh}
        >
          Refresh
        </a>
        
      </div>
     
    </nav>
    
  );
};
