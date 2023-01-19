const getPost = async (postNumber) => {
  try {
    const respons = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postNumber}`
    );
    const post = await respons.json();

    return post;
  } catch (error) {
    console.error(error);
  }
};

export { getPost };
