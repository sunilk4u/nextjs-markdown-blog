const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-950 h-14 flex items-center justify-center">
        <div>
          <p className="text-white text-lg">
            Copyright ©&nbsp;{year} {process.env.blogUrl} | built by{" "}
            <a className="hover:text-green-400" href="https://github.com/sunilk4u">Sunil Kumar</a>
          </p>
        </div>
    </footer>
  );
};

export default Footer;
