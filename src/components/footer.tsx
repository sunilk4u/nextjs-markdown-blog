const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <footer>
        <div>
          <p>Copyright ©&nbsp;{year} {process.env.blogUrl}</p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
