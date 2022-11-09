const frameworks = [
  "angular2",
  "vue",
  "react",
  "grunt",
  "phantomjs",
  "ember",
  "babel",
  "ionic",
  "gulp",
  "meteor",
  "yeoman",
  "yarn",
  "nodejs",
  "bower",
  "browserify",
];

export const duplicatedFrameworks = frameworks.concat(frameworks);

export const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  const finalizedFrameworks = array.map((framework, index) => {
    return { id: index, name: framework, isOpen: false, isCompleted: false };
  });
  return finalizedFrameworks;
};

const randomizedFrameworks = shuffle(duplicatedFrameworks);
