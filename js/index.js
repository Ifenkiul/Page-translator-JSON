(function () {
  "use strict";
  const translationDataBase = {};

  const addButton = document.querySelector(".btn__add");
  const selectorField = document.querySelector('input[name="selectorName"]');
  const engText = document.querySelector('textarea[name="EnglishText"]');
  const ukrText = document.querySelector('textarea[name="UkrainianText"]');

  document
    .querySelector(".btn__translate")
    .addEventListener("click", function () {
      changeLanguage();
    });

  addButton.addEventListener("click", function () {
    if (selectorField.value !== "") {
      translationDataBase[selectorField.value] = [];
      translationDataBase[selectorField.value][0] = engText.value;
      translationDataBase[selectorField.value][1] = ukrText.value;
      console.log(translationDataBase);
    }
  });

  //   const languagesForPage = {
  //   "a[href='#about']": ["ABOUT US", "ПРО НАС"],
  //   "a[href='#focus']": ["OUR FOCUS", "ФОКУС"],
  //   "a[href='#team']": ["OUR TEAM", "КОМАНДА"],
  //   "a[href='#worksteps']": ["WORK STEPS", "КРОКИ"],
  //   "a[href='#select']": ["WHY CHOOSE US", "ОБРАТИ НАС"],
  //   "a[href='#order']": ["GET IN TOUCH", "ЗАМОВИТИ"],
  // };
  sessionStorage.setItem("languageChosen", "UA");

  const changeLanguage = function () {
    const languageSet =
      sessionStorage.getItem("languageChosen") === "UA" ? 1 : 0;

    for (let key in translationDataBase) {
      document.querySelector(key).textContent =
        translationDataBase[key][languageSet];
    }
  };
})();
