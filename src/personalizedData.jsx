const personalizedData = {};
const updatePersonalizedData = (week, day, exerciseList) => {
  // Ensure the structure for the given week and day exists
  if (!personalizedData[week]) personalizedData[week] = {};
  personalizedData[week][day] = exerciseList;
};

export {updatePersonalizedData}
export { personalizedData };
