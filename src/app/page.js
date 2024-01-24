import Banner from "@/components/Banner";
import Blogs from "@/components/blog/Blogs";
import BlogCard from "@/components/card/BlogCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <h2 className="my-5 text-3xl font-bold">Latest Blogs</h2>
      <Blogs />
    </main>
  );
}
