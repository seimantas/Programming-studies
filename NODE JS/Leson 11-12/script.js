const getMemberships = ()=>{
    const response = await fetch("http://localhost:5000/memberships");
    const memberships = await response.json();
    return membershi
   } 




    const renderNames = async () => {
        const response = await fetch(HOSTNAME);
        const names = await response.json();
        const namesContainer = document.querySelector("#namesContainer");
        namesContainer.replaceChildren();
        names.forEach((name) => {
          const nameListEl = document.createElement("li");
          nameListEl.innerText = name;
          namesContainer.append(nameListEl);
        });
      };
      await renderNames();
