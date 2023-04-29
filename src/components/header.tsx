const Header = () => {
  return (
    <header>
      <div>
        <div>
          <h1 itemProp="headline">
            <a href="https://thecuriouscorp.com/">{process.env.HomePage_Title}</a>
          </h1>
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
