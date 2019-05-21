document.getElementById("submitBtn").addEventListener("click", function my(e) {
    var msg = document.getElementById("message");
    if (msg.value == "") {
        e.preventDefault();
        var x = document.querySelector('.feedback');
        x.classList.add("show");
        setTimeout(function() {
            x.classList.remove('show');
        }, 5000);
    } else {
        e.preventDefault();
        document.getElementsByClassName("message-content")[0].innerHTML = msg.value;
        document.getElementById("message-form").reset();
    }


});






// });
// var x = document.getElementById("submitBtn");
// var msg = document.getElementById("message").value;
// var hello = document.getElementsByClassName("message-content")[0];
// x.addEventListener("click", function() {

//     msg = hello.innerHTML;



// });



// document.getElementById("submitBtn").addEventListener("click", function() {
//     var cc = document.getElementsByTagName("h5");
//     setTimeout(function() {
//         cc.classList.remove("feedback");
//     }, 1500);
// });

// var x = document.querySelector('.feedback'); x.classList.add("show"); setTimeout(function() {
//     x.classList.remove('show');
// }, 3500);