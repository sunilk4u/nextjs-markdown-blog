import Link from "next/link";
import { getAllCategories } from "./getPostMetaData";

const NavBar = () => {
  const categoryData = getAllCategories();

  return (
    <nav>
      <ul>
        {categoryData.map((category: string) => (
          <li key={category}>
            <Link href={`category/${category.replaceAll(" ", "-")}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
