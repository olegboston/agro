document.getElementById('contact').addEventListener('submit', submitForm);


function submitForm(event) {
    // Отменяем стандартное поведение браузера с отправкой формы
    event.preventDefault();
    
    let formData = new FormData(event.target);

    // Собираем данные формы в объект
    let obj = {};
       formData.forEach(function(value, key){
        obj[key] = value;
    });
    
    // Собираем запрос к серверу
    let request = new Request(event.target.action, {
        method: 'POST',
        url: 'https://api-enterprise.agro.club/api/v1/forms/call-back',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
        },
    });
  
    
    // Отправляем
    fetch(request).then(
        function(response) {
            // Запрос успешно выполнен
            console.log(response);
        },
        function(error) {
            // Запрос не получилось отправить
            console.error(error);
        }
    );

}