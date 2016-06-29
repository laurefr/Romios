var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

$(document).ready(function(){
    $("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });
});

 var myForm = document.form1;

        function btnCheckFormClick(e) {
            var txtName = myForm.txtName;
            var txtAge = myForm.txtAge;

            if (txtAge.value == "" || txtName.value == "") {
                alert("Please complete all of the form");

                if (txtName.value == "") {
                    txtName.focus();
                } else {
                    txtAge.focus();
                }
            } else {
                alert("Thanks for completing the form " + txtName.value);
            }
        }

        function txtAgeBlur(e) {
            var target = e.target;

            if (isNaN(target.value)) {
                alert("Please enter a valid age");
                target.focus();
                target.select();
            }
        }

        function txtNameChange(e) {
            alert("Hi " + e.target.value);
        }

        myForm.txtName.addEventListener("change", txtNameChange);
        myForm.txtAge.addEventListener("blur", txtAgeBlur);
        myForm.btnCheckForm.addEventListener("click", btnCheckFormClick);

