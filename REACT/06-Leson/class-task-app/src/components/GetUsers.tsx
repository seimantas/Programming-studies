export const getUsers = (setIsLoading: any) => {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      console.error(err.message);
    })
    .finally(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
};
