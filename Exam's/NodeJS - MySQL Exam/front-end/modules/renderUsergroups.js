const renderUserGroups = async () => {
  try {
    const response = await fetch("http://localhost:5000/account", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    const data = await response.json();

    if (response.ok) {
      data.forEach((group) => {
        const { id, name } = group;

        const maneGroupContainer = document.querySelector("#userGroups");

        const groupContainer = document.createElement("div");
        groupContainer.setAttribute("id", "userGroupContainer");

        const groupIdelement = document.createElement("h2");
        groupIdelement.innerText = id;
        groupIdelement.setAttribute("id", "groupId");

        const linkToBillsElement = document.createElement("a");
        linkToBillsElement.setAttribute(
          "href",
          `http://localhost:5000/bills/${id}`
        );
        linkToBillsElement.innerText = "Enter";

        const groupNameElement = document.createElement("p");
        groupNameElement.innerText = name;

        groupContainer.append(
          groupIdelement,
          groupNameElement,
          linkToBillsElement
        );
        maneGroupContainer.append(groupContainer);
      });
    }

    if (!response.ok) {
      return alert(response.statusText);
    }
  } catch (error) {
    alert(error.message);
  }
};

export { renderUserGroups };
