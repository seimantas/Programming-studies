const getSkils = async () => {
  try {
    const response = await fetch("https://zany-skitter-caper.glitch.me/skills");
    const skils = await response.json();
    console.log(skils);
    return skils;
  } catch (error) {
    console.error(error);
  }
};

export { getSkils };
