import React from "react";
import "./SidebarX1.scss";

function SidebarX1({ children, background }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  let brand = React.Children.map(children, (child) =>
    child.type.name === "Brand" ? child : null
  );

  let fragments = React.Children.map(children, (child) =>
    child.type.name === "Fragment" ? child : null
  );

  return (
    <div className={["sidebar", menuOpen ? "show" : ""].join(" ")}>
      <div className="left"></div>
      <div className="right"></div>
    </div>
  );
}

export default SidebarX1;
