document.getElementById('contact').addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();

    var object = {};
    var formData = new FormData(document.forms.contact);

    formData.forEach(function (value, key) {
        object[key] = value;
    });

    var json = JSON.stringify(object);

    const url = "https://api-enterprise.agro.club/api/v1/forms/call-back";
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: json,


    })
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    document.getElementById("message").innerHTML = "An error occurred while sending";
                    document.getElementById("message").style.display = "block";
                    return;
                }
                response.json().then(function (data) {
                    console.log(response);
                    document.forms.contact.reset();
                    document.getElementById("message").innerHTML = "The message has been sent successfully 👍";
                    document.getElementById("message").style.display = "block";
                });
            }
        ).catch((err) => console.error(err))
}