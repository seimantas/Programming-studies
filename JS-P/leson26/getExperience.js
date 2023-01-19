const getExperience = async () => {
  try {
    const response = await fetch(
      "https://zany-skitter-caper.glitch.me/experiences"
    );
    const experience = await response.json();
    return experience;
  } catch (error) {
    console.error(error);
  }
};

export { getExperience };
