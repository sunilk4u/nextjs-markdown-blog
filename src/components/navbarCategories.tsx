import Link from "next/link";
import { getAllCategories } from "./getPostMetaData";

const NavbarCategories = () => {
  const categoryData = getAllCategories();

  return (
    <ul className="items-center md:h-14 md:flex">
      {categoryData.map((category: string) => (
        <li
          key={category}
          className="flex items-center h-full text-white text-lg my-5 py-1 px-5 uppercase hover:bg-green-600 transition ease-in-out"
        >
          <Link href={`category/${category.replaceAll(" ", "-")}`}>
            {category.replace("-", " ")}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarCategories;
