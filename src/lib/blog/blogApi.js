export const createBlogPost = async (postData) => {
  try {
    const result = await fetch("http://localhost:5000/posts/create-post", {
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
    const result = await fetch("http://localhost:5000/posts");
    return await result.json();
  } catch (error) {
    console.error("Error getting blog posts:", error);
    throw error;
  }
};
export const getMyBlogPosts = async (authorId) => {
  try {
    const result = await fetch(
      `http://localhost:5000/posts?authorId=${authorId}`
    );
    return await result.json();
  } catch (error) {
    console.error("Error getting blog posts:", error);
    throw error;
  }
};

export const getBlogPostById = async (postId) => {
  try {
    const result = await fetch(`http://localhost:5000/posts/${postId}`);
    return await result.json();
  } catch (error) {
    console.error("Error getting blog post by ID:", error);
    throw error;
  }
};

export const updateBlogPost = async (postId, updatedData) => {
  try {
    const result = await fetch(`http://localhost:5000/posts/${postId}`, {
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
    const result = await fetch(`http://localhost:5000/posts/${postId}`, {
      method: "DELETE",
    });
    return await result.json();
  } catch (error) {
    console.error("Error deleting blog post:", error);
    throw error;
  }
};
