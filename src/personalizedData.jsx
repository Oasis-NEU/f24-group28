const personalizedData = {};
const updatePersonalizedData = (data) => {
  console.log(data)
  // Ensure the structure for the given week and day exists
  personalizedData = data;
};

export {updatePersonalizedData}
export { personalizedData };
