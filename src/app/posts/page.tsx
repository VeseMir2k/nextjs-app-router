import { Posts } from "@/types/Posts";
import style from "./posts.module.scss";
import { commonMetadata } from "@/common/shared-metadata";
import { Pagination } from "@/common/components/pagination/Pagination";
import { SearchParams } from "@/types/NextTypes";
import Link from "next/link";

export const metadata = {
  title: `Posts ${commonMetadata.title}`,
  description: "Posts list",
};

type PostsPageProps = {} & SearchParams;

const POSTS_PER_PAGE = 10;
const POSTS_TOTAL = 60;

export default async function PostsPage({ searchParams }: PostsPageProps) {
  let page = 1;
  if (searchParams?.page) {
    page = Number(searchParams?.page) || 1;
  }
  console.log(searchParams);

  const res = await fetch(
    `http://localhost:3004/posts?_limit=${POSTS_PER_PAGE}&_page=${page}`,
    { next: { revalidate: 5 } },
  );

  if (!res.ok) {
    throw new Error("problem with getting posts");
  }

  const posts: Posts = await res.json();

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div
          className={style.item}
          key={post.id}
        >
          {post.title}
          <br />
          <Link href={`/posts/${post.id}`}>READ MORE</Link>
        </div>
      ))}

      <Pagination
        page={page}
        total={POSTS_TOTAL}
        perPage={POSTS_PER_PAGE}
      />
    </div>
  );
}
