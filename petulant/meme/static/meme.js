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
            //add it to the page
        }
    }
    request.send(new FormData(form));
    e.preventDefault();
});