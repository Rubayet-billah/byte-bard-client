export const registerUser = async (userData) => {
  try {
    const result = await fetch(
      "https://byte-bard-server-rubayet-billah.vercel.app/users/create-user",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    return await result.json();
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (loginData) => {
  try {
    const result = await fetch(
      "https://byte-bard-server-rubayet-billah.vercel.app/users/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      }
    );
    return await result.json();
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
