

document.getElementById('contact').addEventListener('submit', submitForm);


function submitForm(event) {
    // Отменяем стандартное поведение браузера с отправкой формы
    event.preventDefault();



    // Собираем данные формы в объект
        var object = {};
        var formData = new FormData(document.forms.contact);

        formData.forEach(function(value, key){
            object[key] = value;
        });
        
        var json = JSON.stringify(object);
        json = json.replace(/"([^"]+)":/g, '$1: ');
    
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
        console.log(json)
  

}