const postElement = document.createElement("p");
const toChangePosBodytInputElement = document.createElement("input");
const toSubmitPostChangesButton = document.createElement("button");

const showPost = (post) => {
  postElement.innerText = JSON.stringify(post);
  console.log(post);
  toChangePosBodytInputElement.placeholder = "Enter new post body";

  toSubmitPostChangesButton.innerText = "Submit";

  document.body.append(postElement);

  document
    .querySelector("#to-Change-Post-body-form")
    .append(toChangePosBodytInputElement, toSubmitPostChangesButton);
};

export { showPost };
