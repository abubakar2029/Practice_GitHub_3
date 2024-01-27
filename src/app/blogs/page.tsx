// "use client";
import { client } from "@/config/contentful";
import React from "react";
import Image from "next/image";
const fetchBlogs = async () => {
  const blogs = await client.getEntries({
    content_type: "blogPost",
  });

  console.log(
    "All blog entries : ",
    blogs.items[0].fields.blogImage.fields.file.url
  );
  return blogs.items;
};
async function BlogPage() {
  const data = await fetchBlogs();
  return (
    <div>
      <h1>List of all blogs</h1>
      <section>
        {data.map((blog: any) => (
          <div key={blog.sys.id}>
            <h2>{blog.fields.title}</h2>
            <p>{blog.fields.description}</p>
            <Image
              unoptimized
              src={blog.fields.blogImage.fields.file.url}
              alt={blog.fields.blogImage.fields.file.title}
              width={200}
              height={200}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default BlogPage;
