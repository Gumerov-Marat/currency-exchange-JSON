let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

  inputRub.addEventListener('input', () => {
      let request = new XMLHttpRequest();

      //request.open(method, url, async, login, pass);
      request.open('GET', 'js/current.json');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      request.send();

      //status
      //statusText
      //responseText  || response
      //readyState
        /*
          0 UNSENT Объект был создан.Метод open() ещё не вызывался.
          1 OPENED Метод open() был вызван.
          2 HEADERS_RECEIVED Метод send() был вызван, доступны заголовки(headers) и статус.
          3 LOADING Загрузка;
          responseText содержит частичные данные.
          4 DONE Операция полностью завершена.
        */

      request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status === 200) {
          let data = JSON.parse(request.response);

          inputUsd.value = inputRub.value / data.usd;
        } else {
          inputUsd.value = "Чтото пошло не так!";
        }
      });
  });