  var названиеПеременной = document.querySelector(".класс-элемента");

  элемент.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("Сообщение в консоль");
    элемент(скрытое окно).classList.add("название класса который надо добавить");
    элемент(инпут).focus();
  });

