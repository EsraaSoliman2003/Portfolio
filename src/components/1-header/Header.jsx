import { useState, useEffect } from "react";
import "./header.css";

export default function Header() {
  const [showModel, setshowModel] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode"));
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else{
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex" style={{justifyContent: "end"}}>
      {/* <button
        onClick={() => {
          setshowModel(true);
        }}
        className="menu icon-menu flex"
      />
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Article</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav> */}

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (<span className="icon-moon-o"></span>) : (<span className="icon-sun"></span>)}
      </button>

      {/* {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-clear"
                onClick={() => {
                  setshowModel(false);
                }}
              />
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Article</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Speaking</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )} */}
    </header>
  );
}
