export default function Header({ theme }) {
  const [isDark, setIsDark] = theme;

  // not a best practice in react
  // if (isDark) document.body.classList.add("dark");
  // else document.body.classList.remove("dark");

  // const [isDark, setIsDark] = useState(false);

  // this value is boolean
  // so we have to convert this value into string
  // console.log(localStorage.getItem("isDark"));
  // console.log(JSON.parse(localStorage.getItem("isDark")));

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDark", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;
          {`${isDark ? "Light" : "Dark"} Mode`}
        </p>
      </div>
    </header>
  );
}
