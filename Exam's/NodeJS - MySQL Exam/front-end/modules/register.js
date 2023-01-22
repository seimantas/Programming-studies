const userRegistrationSubmit = document.querySelector("#registrationForm");

userRegistrationSubmit.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userFullNameInputValue = document
    .querySelector("#fullNameInput")
    .value.trim();

  const userPassword = document.querySelector("#passwordInput").value.trim();

  const userRepeatPasswordValue = document
    .querySelector("#repeatPasswordInput")
    .value.trim();

  const emailInput = document.querySelector("#emailInput").value.trim();

  if (userPassword != userRepeatPasswordValue) {
    return alert(
      "Your passwor don't match! Please corect your password inputs."
    );
  }

  const headers = { "Content-Type": "application/json" };

  const newUser = JSON.stringify({
    full_name: userFullNameInputValue,
    password: userPassword,
    email: emailInput,
  });

  console.log(newUser);

  try {
    const respons = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: headers,
      body: newUser,
    });

    if (respons.ok) {
      alert("User succsefuly registred.");

      return window.location.assign("./login.html");
    }

    if (!respons.ok) {
      return alert(respons.statusText);
    }
  } catch (error) {
    return console.error(error);
  }
});
