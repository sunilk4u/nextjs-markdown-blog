import Link from "next/link";
import "../styles/sitelinks.css"

const SiteLinksInfo = () => {
  return (
    <div className="bg-green-800">
      <div className="container mx-auto md:flex md:justify-between">
        <div className="md:flex-col md:m-4 p-3">
          <h4 className="text-white text-lg font-medium">Important Links</h4>
          <ul className="grid grid-cols-1 gap-3 my-2 sitelinks">
            <Link href="/"><li>Home</li></Link>
            <Link href="/page/about-us"><li>About Us</li></Link>
            <Link href="/page/about-us"><li>Disclaimer</li></Link>
            <Link href="/page/about-us"><li>Privacy Policy</li></Link>
            <Link href="/page/about-us"><li>DCMA</li></Link>
            <Link href="/page/about-us"><li>Contact us</li></Link>
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
            <Link href="/"><li>Facebook</li></Link>
            <Link href="/"><li>Instagram</li></Link>
            <Link href="/"><li>Twitter</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteLinksInfo;
