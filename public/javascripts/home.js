//function to make the slider*/
function makeSlider() {
    var rightBtn = document.querySelector("#btn-right");
    var leftBtn = document.querySelector("#btn-left");
    var sliderItems = document.querySelectorAll(".slider-item");
    var current = 0;
    function resetItems() {
        for (var i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style.display = "none";
        }
    }
    function startSlider() {
        resetItems();
        sliderItems[0].style.display = "inline-block";
    }
    //function to show the prev slide
    function prevSlide() {
        sliderItems[current - 1].style.display = "inline-block";
        current--;
    }
    //function to show the next slide
    function nextSlide() {
        sliderItems[current + 1].style.display = "inline-block";
        current++;
    }
    rightBtn.addEventListener("click", function () {
        if (current == 0) {
            current = sliderItems.length;
        }
        resetItems();
        nextSlide();
    });
    leftBtn.addEventListener("click", function () {
        if (current == sliderItems.length - 1) {
            current = -1;
        }
        resetItems();
        prevSlide();
    });
    startSlider();
}
makeSlider();




//function to automate the slider
function automateSlider() {
    $(".active").each(function () {
        if (!$(this).is(":last-child")) {
            $(this).delay(3000).fadeOut(500, function () {
                $(this).removeClass("active").next().addClass("active").fadeIn(100);
                elm = this;
                $("#btn-left").on("click", function () {
                    $(elm).removeClass("active").next().addClass("active").fadeIn(100);
                });
                automateSlider();
            });

        } else {
            $(this).delay(3000).fadeOut(500, function () {
                $(this).removeClass("active");
                $(".slider-item").eq(0).addClass("active").fadeIn(100);
                automateSlider();
            });
        }
    });
}
automateSlider();
