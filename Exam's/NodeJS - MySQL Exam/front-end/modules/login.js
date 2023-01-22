const userRegistrationSubmit = document.querySelector("#userLoginForm");

userRegistrationSubmit.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userPassword = document.querySelector("#passwordInput").value.trim();

  const emailInput = document.querySelector("#emailInput").value.trim();

  const headers = { "Content-Type": "application/json" };

  const newUser = JSON.stringify({
    password: userPassword,
    email: emailInput,
  });

  try {
    const respons = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: headers,
      body: newUser,
    });

    const data = await respons.json();

    if (respons.ok) {
      localStorage.setItem("token", data.token);

      alert("User succsefuly loged in.");

      return window.location.assign("./groups.html");
    }

    if (!respons.ok) {
      return alert(respons.status.Text);
    }
  } catch (error) {
    return console.error(error);
  }
});
