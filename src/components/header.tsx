const Header = () => {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto">
        <div className="flex items-center justify-center md:justify-normal h-32">
          <h1 className="md:text-6xl text-4xl font-semibold text-white">
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
