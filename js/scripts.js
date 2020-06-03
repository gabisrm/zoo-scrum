/*!
    * Start Bootstrap - Resume v6.0.0 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict



    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

function validate() {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $('#email').val();

    $('.error').hide();

    if(!emailReg.test(email)){
        $('#email').after('<span class="error"> Please enter a valid email address</span>');
    } else {
        alert("Thank you for contacting! You have just saved a Pangolin!");
    }
}

var input = document.getElementById("searchBar");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();

        search();
    }
});

function search() {

    var name = document.getElementById("searchBar").value;
    var pattern = name.toLowerCase();
    var targetId = "";

    var divs = document.getElementsByClassName("divText");
    for (var i = 0; i < divs.length; i++) {
        var para = divs[i].getElementsByTagName("p");
        var index = divs[i].innerText.toLowerCase().indexOf(pattern);
        if (index != -1) {
            innerHTML = divs[i].innerText.substring(0, index) + "<span class='highlight'>" + divs[i].innerText.substring(index, index + name.length) + "</span>" + divs[i].innerText.substring(index + name.length);
            divs[i].innerHTML = innerHTML;
            divs[i].scrollIntoView();
            break;
        }
    }
}


