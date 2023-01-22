const renderUserBills = async (id) => {
  try {
    const groupId = id;

    const respons = await fetch(`http://localhost:5000/bills/${groupId}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const grupBillData = respons.json();

    if (respons.ok) {
    }

    return console.log(grupBillData);

    if (!respons.ok) {
      return alert(respons.statusText);
    }
  } catch (error) {
    return console.error(error);
  }
};

export { renderUserBills };
