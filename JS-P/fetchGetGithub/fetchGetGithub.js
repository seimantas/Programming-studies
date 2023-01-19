const doFetch = async () => {
  const getOnlyXUsers = (amount) => {
    return users.slice(0, amount);
    // galima tiesiog butu ant orginalaus masyvo lenght.
  };

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const users = await response.json();

    return users;
  };

  const users = await getUsers();

  const firstTreeUsers = getOnlyXUsers(3);

  console.log(firstTreeUsers);
};

doFetch();
