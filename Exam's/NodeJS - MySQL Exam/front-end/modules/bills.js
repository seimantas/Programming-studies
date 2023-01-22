const addBillToGroup = document.querySelector("#addBillToGroup");

addBillToGroup.addEventListener("submit", async (event) => {
  event.preventDefault();

  const groupIdInputvalue = document
    .querySelector("#groupInputId")
    .value.trim();

  const amountInputvalue = document
    .querySelector("#amountInputId")
    .value.trim();

  const descriptionInputvalue = document
    .querySelector("#descriptionInputId")
    .value.trim();

  const newBill = JSON.stringify({
    group_id: groupIdInputvalue,
    amount: amountInputvalue,
    description: descriptionInputvalue,
  });

  try {
    const respons = await fetch("http://localhost:5000/bills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: newBill,
    });

    if (respons.ok) {
      alert("User succsefuly added bill.");
    }

    if (!respons.ok) {
      return alert(respons.statusText);
    }
  } catch (error) {
    return console.error(error);
  }
});
