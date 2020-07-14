(function () {
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

  document.querySelector(".btn__show").addEventListener("click", function () {
    const display = document.querySelector(".display");
    display.style.display = "block";

    display.innerText = "{";
    for (let key in translationDataBase) {
      display.innerText += `\n"${key}":["${translationDataBase[key][0]}", "${translationDataBase[key][1]}"],\n`;
    }
    display.innerText += "}";
    display.innerText = display.innerText.replace(",\n}", "\n}");
  });

  addButton.addEventListener("click", function () {
    if (selectorField.value !== "") {
      translationDataBase[selectorField.value] = [];
      translationDataBase[selectorField.value][0] = engText.value;
      translationDataBase[selectorField.value][1] = ukrText.value;
      console.log(translationDataBase);
    }
  });

  sessionStorage.setItem("languageChosen", "UA");

  const changeLanguage = function () {
    const languageSet =
      sessionStorage.getItem("languageChosen") === "UA" ? 1 : 0;

    for (let key in translationDataBase) {
      const element = document.querySelector(key);
      if (element !== null) {
        element.textContent = translationDataBase[key][languageSet];
      } else console.error("There is no such selector in ur document...");
    }
  };
})();
