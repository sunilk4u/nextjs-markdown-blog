import "../styles/sitelinks.css"

const SiteLinksInfo = () => {
  return (
    <div className="bg-green-800">
      <div className="container mx-auto md:flex md:justify-between">
        <div className="md:flex-col md:m-4 p-3">
          <h4 className="text-white text-lg font-medium">Important Links</h4>
          <ul className="grid grid-cols-1 gap-3 my-2 sitelinks">
            <li>Home</li>
            <li>About Us</li>
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
            <li>DCMA</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="md:flex-col md:m-4 p-3 md:w-[30%] text-white">
          <h4 className="text-white text-lg font-medium">About Us</h4>
          <p className="my-2">
            This is a tech blog. Built using next.js and markdown posts as
            jamstack blog. You can write amazing articles using this template.
          </p>
        </div>
        <div className="md:flex-col md:m-4 p-3">
          <h4 className="text-white text-lg font-medium">Follow Us</h4>
          <ul className="grid grid-cols-1 gap-3 my-2 sitelinks">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteLinksInfo;
