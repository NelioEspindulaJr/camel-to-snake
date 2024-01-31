import camelToSnake from "./funcs/camel-case-to-snake-case";

const testingObject = {
  myNameIs: "Nélio",
  myProfessionIs: "Developer",
  thoseAreMyFavoriteLanguages: [
    { language: "javascript", hasSuperSet: true, superSet: "typescript" },
    { language: "python", hasSuperSet: false, superSet: undefined },
  ],
};

const expectedResult = {
  my_name_is: "Nélio",
  my_profession_is: "Developer",
  those_are_my_favorite_languages: [
    { language: "javascript", has_super_set: true, super_set: "typescript" },
    { language: "python", has_super_set: false, super_set: undefined },
  ],
};

const result = camelToSnake(testingObject);

console.log(
  result !== undefined &&
    JSON.stringify(result) === JSON.stringify(expectedResult)
);
//true
