import Link from "next/link";
import { getAllCategories } from "./getPostMetaData";

const NavBar = () => {
  const categoryData = getAllCategories();

  return (
    <nav className="bg-green-800">
      <div className="container mx-auto">
        <ul className="flex items-center h-14">
          {categoryData.map((category: string) => (
            <li
              key={category}
              className="flex items-center h-full text-white text-lg px-5 uppercase hover:bg-green-600 transition ease-in-out"
            >
              <Link href={`category/${category.replaceAll(" ", "-")}`}>
                {category.replace("-", " ")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
