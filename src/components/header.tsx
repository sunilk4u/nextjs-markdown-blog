const Header = () => {
  return (
    <header>
      <div>
        <div>
          <h1>
            <a href="/">
              {process.env.HomePage_Title}
            </a>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
