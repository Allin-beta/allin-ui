import React from "react";
import "./NavbarX1.scss";
import {
  Link,
  BrowserRouter as Router,
  useLocation,
  withRouter,
} from "react-router-dom";

function NavbarX1({ children, collapseColor }) {
  const [menuState, setMenuState] = React.useState(false);

  let brand = React.Children.map(children, (child) =>
    child.type.name === "Brand" ? child : null
  );

  let collapse = React.Children.map(children, (child) =>
    child.type.name === "Collapse" ? child : null
  );

  let items = React.Children.map(children, (child) =>
    child.type.name === "Items" ? child : null
  );

  return (
    <Router>
      <div className={["header", menuState ? "show" : ""].join(" ")}>
        <div className="container">
          <div className="row v-center space-between">
            <div className="brand">{brand.map((component) => component)}</div>
            <nav
              className={["collapse", menuState ? "show" : ""].join(" ")}
              style={collapseColor && { backgroundColor: collapseColor }}
            >
              <div className="container">
                <div className="nav-columns">
                  <div className="nav-column">
                    <div className="nav-label">Menu</div>
                    <ul className="nav-links">
                      {collapse.map((component) => component)}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
            <div className="items">
              {items.map((component) => component)}
              <div className="nav-toggle">
                {!menuState && (
                  <div
                    onClick={() => setMenuState(true)}
                    className="hamburger-menu"
                  >
                    <div>
                      <img src="/menu.png" width={25} />
                    </div>
                  </div>
                )}
                {menuState && (
                  <div
                    className="hamburger-menu-close"
                    onClick={() => setMenuState(false)}
                  >
                    <div className="arrowIcon">
                      <img src="/arrow.png" width={25} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

const Brand = (props) => <Link to="/">{props.children}</Link>;
NavbarX1.Brand = Brand;

const Items = (props) => {
  const location = useLocation();
  return (
    <>
      {props.data.map((item, index) => (
        <div
          className={[
            "item",
            location.pathname === item.link ? "active" : "",
          ].join(" ")}
          key={index}
        >
          <Link to={item.link}>
            <span>{item.label}</span>
            <img height="25px" src={item.icon} />
          </Link>
        </div>
      ))}
    </>
  );
};
NavbarX1.Items = Items;

const Collapse = (props) => (
  <>
    {props.data.map((item, index) => (
      <li className="row" key={index}>
        <Link to={item.link}>{item.label}</Link>
        {item.sub && (
          <ul className="sub">
            {item.sub.map((subitem, i) => (
              <li key={i}>
                <Link to={subitem.link}>{subitem.label}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </>
);
NavbarX1.Collapse = Collapse;

export default NavbarX1;
