const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer className="bg-green-950 h-14 flex items-center justify-center">
        <div>
          <p className="text-white md:text-lg text-sm">
            Copyright ©&nbsp;{year} {process.env.blogUrl} | built by{" "}
            <a className="hover:text-green-400" href="https://github.com/sunilk4u">Sunil Kumar</a>
          </p>
        </div>
    </footer>
  );
};

export default Footer;
