

document.getElementById('contact').addEventListener('submit', submitForm);


function submitForm(event) {
    // Отменяем стандартное поведение браузера с отправкой формы
    event.preventDefault();

    // event.target — это HTML-элемент form
    let formData = new FormData(event.target);

    // Собираем данные формы в объект
        var object = {};
        var formData = new FormData(document.forms.contact);

        formData.forEach(function(value, key){
            object[key] = value;
        });
        var json = JSON.stringify(object);

    
        const url = "https://api-enterprise.agro.club/api/v1/forms/call-back";
        fetch(url, {
            method : "POST",
            body: json,

        }).then(
            response => response.text() // .json(), etc.
            // same as function(response) {return response.text();}
        ).then(
            html => console.log(html)
        );
  

}