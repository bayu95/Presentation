var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

var modal1 = document.getElementById('myModal1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg1');
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal1.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
}

var modal2 = document.getElementById('myModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg2');
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal2.style.display = "block";
}

// Get the <span> element that closes the modal


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal2.style.display = "none";
}

var modal3 = document.getElementById('myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg3');
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal3.style.display = "none";
}

// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal3.style.display = "none";
}
var modal4 = document.getElementById('myModal4');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg4');
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal4.style.display = "none";
}

// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal4.style.display = "none";
}
var modal5 = document.getElementById('myModal5');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg5');
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal5.style.display = "none";
}

// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal4.style.display = "none";
}

var modal6 = document.getElementById('myModal6');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg6');
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal6.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close6")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal6.style.display = "none";
}
