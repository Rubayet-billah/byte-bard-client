import Banner from "@/components/Banner";
import Blogs from "@/components/blog/Blogs";
import BlogCard from "@/components/card/BlogCard";

export default function Home() {
  return (
    <main>
      <Banner />
      <h2 className="text-3xl">Blogs</h2>
      <Blogs />
    </main>
  );
}
