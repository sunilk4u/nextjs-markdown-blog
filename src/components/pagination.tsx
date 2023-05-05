import Link from "next/link";

const Pagination = ({
  totalPosts,
  currentPage,
  slug,
}: {
  totalPosts: number;
  currentPage: number;
  slug: string;
}) => {
  const postPerPage: any = process.env.postperpage;
  const totalPages = Math.ceil(totalPosts / postPerPage);

  let prevSlug = "";
  if(!slug.includes("category")) {
    prevSlug = "/"
  }else {
    prevSlug = slug
  }


  return (
    <div className="flex my-4 p-5 justify-between">
      <Link href={currentPage <= 2 ? `${prevSlug}` : `${slug}/${currentPage - 1}`}>
        <button className="bg-green-600 text-white px-4 py-2 rounded-xl">
          Prev
        </button>
      </Link>
      <p className="py-2">
        Page {currentPage} of {totalPages}
      </p>
      <Link
        href={
          currentPage === totalPages
            ? `${slug}/${currentPage}`
            : `${slug}/${currentPage + 1}`
        }
      >
        <button className="bg-green-600 text-white px-4 py-2 rounded-xl">
          Next
        </button>
      </Link>
    </div>
  );
};

export default Pagination;
