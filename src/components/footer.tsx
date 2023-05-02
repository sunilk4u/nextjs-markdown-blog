const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <footer>
        <div>
          <p>Copyright ©&nbsp;{year} {process.env.blogUrl} | built by <a href="https://github.com/sunilk4u">Sunil Kumar</a></p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
