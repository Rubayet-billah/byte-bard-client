export const createBlogPost = async (postData) => {
  try {
    const result = await fetch("http://localhost:5000/blogs/create-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    return await result.json();
  } catch (error) {
    console.error("Error creating blog post:", error);
    throw error;
  }
};

export const getBlogPosts = async () => {
  try {
    const result = await fetch("http://localhost:5000/blogs");
    return await result.json();
  } catch (error) {
    console.error("Error getting blog posts:", error);
    throw error;
  }
};

export const getBlogPostById = async (postId) => {
  try {
    const result = await fetch(
      `http://localhost:5000/blogs/get-post/${postId}`
    );
    return await result.json();
  } catch (error) {
    console.error("Error getting blog post by ID:", error);
    throw error;
  }
};

export const updateBlogPost = async (postId, updatedData) => {
  try {
    const result = await fetch(`http://localhost:5000/blogs/${postId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    return await result.json();
  } catch (error) {
    console.error("Error updating blog post:", error);
    throw error;
  }
};

export const deleteBlogPost = async (postId) => {
  try {
    const result = await fetch(`http://localhost:5000/blogs/${postId}`, {
      method: "DELETE",
    });
    return await result.json();
  } catch (error) {
    console.error("Error deleting blog post:", error);
    throw error;
  }
};
