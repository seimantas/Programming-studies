const getItemList = async () => {
  const promise = await fetch("https://golden-whispering-show.glitch.me");
  const item = await promise.json();

  await console.log(promise);
};
