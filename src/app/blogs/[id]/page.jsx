import React from "react";

const BlogPage = () => {
  const blogData = {
    title: "Sample Blog Post",
    author: "John Doe",
    category: "Technology",
    content:
      "This is the content of the blog post. It can be a long piece of text.",
    publishDate: "January 15, 2023",
  };

  return (
    <div className="p-8 mx-auto rounded max-w-7xl bg-slate-100">
      <h1 className="mb-4 text-3xl font-bold">{blogData.title}</h1>
      <section className="flex justify-between mb-2">
        <div>
          <p className="text-xl font-bold text-gray-600 ">{blogData.author}</p>
          <p className="text-gray-600 ">{blogData.publishDate}</p>
        </div>
        <div>
          <p className="px-3 py-1 mt-1 font-bold text-white bg-green-500 rounded-full">
            {blogData.category}
          </p>
        </div>
      </section>
      <div className="prose">
        {blogData.content}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus non eos
        repellat fugit corrupti nobis cupiditate laboriosam adipisci pariatur
        facere. Molestiae quos consectetur eaque voluptatem. Deleniti amet quod
        ex veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur cum neque eligendi maxime iusto facere nulla cupiditate
        necessitatibus. Quae fugiat expedita dignissimos sunt autem perspiciatis
        ratione voluptate debitis quidem esse corporis repellat magnam
        aspernatur, distinctio laudantium hic? Nobis totam excepturi alias
        nesciunt repellat soluta amet in officiis mollitia illo adipisci
        architecto nisi laudantium nostrum numquam facere nemo id autem, non
        dolorum consequuntur commodi suscipit cum. Ipsa nulla consequuntur ut
        neque cum sint animi optio minima, commodi iure fugiat nam eligendi
        repellendus in maxime aperiam et voluptas obcaecati libero sed sunt
        recusandae accusantium! Unde atque sapiente dolore nihil dolorem, dicta
        aliquid sit ut dolorum, alias, corporis nam. Alias aliquam, odit sint
        quibusdam dolorem esse veritatis laboriosam nobis delectus expedita
        repellat commodi reprehenderit sed quo assumenda possimus aut, iste
        fugit eum officiis? Amet repellendus iure soluta autem! Id cumque
        consectetur natus veniam rerum ratione aut similique fuga aliquam
        aliquid illum tenetur quo voluptatibus labore, atque at nesciunt illo?
        Praesentium, aliquam vitae ratione ut voluptas repellendus cumque, qui
        cum cupiditate ipsa, alias est earum deserunt ex recusandae temporibus.
        Fugit aperiam tempora animi? Non molestiae fugit, dolorem consequuntur
        quaerat ipsa temporibus obcaecati, veniam dolore consequatur cupiditate?
        Consequatur iusto quas id cupiditate eveniet, impedit quam quia quaerat
        dicta voluptates delectus rerum deleniti rem voluptatum, obcaecati
        molestiae harum libero? Possimus deserunt, necessitatibus ullam dicta ex
        repudiandae repellat velit quis iusto totam sed molestiae, sapiente
        fugit repellendus impedit rerum explicabo in. Officiis asperiores,
        repellendus vitae iste doloremque nihil facere aliquid dignissimos
        laboriosam, laborum esse molestias, voluptas eos maiores non modi
        officia at ab rem eaque harum sunt? Totam exercitationem ex dignissimos
        vero! Consequuntur harum, optio voluptates, aperiam asperiores
        repellendus natus, quis saepe voluptatem debitis hic nam laudantium
        magni aut dolor facilis sint ea exercitationem nulla odio? At minima est
        magni sed consequuntur, impedit amet numquam veritatis ea.
      </div>
    </div>
  );
};

export default BlogPage;
