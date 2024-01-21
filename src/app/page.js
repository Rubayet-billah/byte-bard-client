import BlogCard from "@/components/card/BlogCard";

export default function Home() {
  return (
    <main>
      <h2 className="text-3xl">Blogs</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
    </main>
  );
}
