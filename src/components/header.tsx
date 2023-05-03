const Header = () => {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto">
        <div className="flex items-center h-32">
          <h1 className="text-6xl font-semibold text-white">
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
