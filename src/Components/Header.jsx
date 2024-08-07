import React from "react";

function Header({ title }) {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">{title}</h1>
      </header>
    </div>
  );
}

export default Header;
