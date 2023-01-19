const postInerBodyReplace = () => {
  const postUpdateForm = document.body.querySelector(
    "#to-Change-Post-body-form"
  );

  postUpdateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const postBodyValue = postUpdateForm.querySelector("input").value;

    console.log(postBodyValue);

    const postNumber = +document.querySelector("#posteNumbesInput").value;

    const patchPoste = async (postId) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            body: `${postBodyValue}`,
          }),
        }
      );
    };

    patchPoste(postNumber);
  });
};

export { postInerBodyReplace };
