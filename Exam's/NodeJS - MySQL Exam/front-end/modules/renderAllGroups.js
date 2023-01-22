const renderAllGroups = async () => {
  try {
    const response = await fetch("http://localhost:5000/groups");
    const groupsData = await response.json();

    if (response.ok) {
      groupsData.forEach((group) => {
        const { id, name } = group;

        const maneGroupContainer = document.querySelector("#groups");

        const groupContainer = document.createElement("div");

        groupContainer.setAttribute("id", "groupContainer");

        const groupIdelement = document.createElement("h2");
        groupIdelement.innerText = id;

        const groupNameElement = document.createElement("p");
        groupNameElement.innerText = name;

        groupContainer.append(groupIdelement, groupNameElement);
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

export { renderAllGroups };
