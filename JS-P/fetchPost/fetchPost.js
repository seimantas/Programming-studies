const getTodos = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const response = await request.json();

  console.log(response);

  return response;
};

const createArticle = async () => {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    // // //body: JSON.stringify({
    // //   title: "foo",
    // //   body: "bar",
    // //   userId: 1,
    // }),
  });

  const response = await request.json();

  console.log(response);
};

createArticle();

createArticle();

getTodos(); //kai dirbi modulyje, naudok await

console.log(1);
