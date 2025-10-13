import { useState, useEffect, useCallback } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import BlogPost from "../../components/blogPost/blogPost";
import "tailwindcss";

export default function BlogPage() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  const loadMore = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = await res.json();
      setPage((p) => p + 1);
      setItems((prev) => [...prev, ...data]);
      setHasNextPage(data.length > 0);
    } catch (error) {
      setError(error);
      console.log(error);
    }
    setLoading(false);
  }, [page]);

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: Boolean(error),
  });

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        {items.map((item) => (
          <BlogPost key={item.id} {...item} />
        ))}
      </div>
      {hasNextPage && <div ref={infiniteRef}>{loading && "Loading..."}</div>}
    </div>
  );
}
