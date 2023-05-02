import Link from "next/link";
import { getPostCategories } from "./getPostMetaData";

const NavBar = () => {
  const categoryData = getPostCategories();

  return (
    <nav>
      <ul>
        {categoryData.allCategories.map((category: string) => (
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
