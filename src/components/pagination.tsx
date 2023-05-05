import Link from "next/link";

const Pagination = ({
  totalPosts,
  currentPage,
}: {
  totalPosts: number;
  currentPage: number;
}) => {
  const postPerPage: any = process.env.postperpage;
  const totalPages = Math.ceil(totalPosts / postPerPage);

  return (
    <div className="flex my-4 p-5 justify-between">
      <Link href={currentPage <= 2 ? "/" : `posts/${currentPage - 1}`}>
        <button className="bg-green-600 text-white px-4 py-2 rounded-xl">Prev</button>
      </Link>
      <p className="py-2">
        Page {currentPage} of {totalPages}
      </p>
      <Link
        href={currentPage === totalPages ? `posts/${currentPage}` : `posts/${currentPage + 1}`}
      >
        <button className="bg-green-600 text-white px-4 py-2 rounded-xl">Next</button>
      </Link>
    </div>
  );
};

export default Pagination;
