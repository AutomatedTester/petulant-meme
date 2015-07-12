'use strict';

var addSome = document.getElementById('addSome');

addSome.addEventListener('click', function(e){
    var submitForm = document.getElementById('submitForm');
    submitForm.classList.remove('notDisplayed');
    submitForm.classList.add('isShown');
});

var submitForm = document.getElementById('submit');

submitForm.addEventListener('click', function(e) {
    var form = document.getElementById('submitForm');


    var request = new XMLHttpRequest();
    request.open('POST', '/', true);

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var data = JSON.parse(request.responseText);
            if (data.success) {
                var gifContainer = document.getElementById('gifContainer');
                var gifs = document.querySelectorAll('.gifs');
                var newDiv = document.createElement('div');
                var img = document.createElement('img');
                newDiv.classList.add('gifs');
                img.setAttribute('src', data.url);
                newDiv.appendChild(img);
                gifContainer.insertBefore(newDiv, gifs[gifs.length - 1].nextSibling);

                // clear fields
                var idURL = document.getElementById('id_url');
                idURL.value = '';
                var idKeywods = document.getElementById('id_keywords');
                idKeywods.value = '';
            } else {

            }
        }
    }
    request.send(new FormData(form));
    e.preventDefault();
});
