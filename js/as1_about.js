
	addEventListener("load",() => {
	var index = 0;
	const slides = document.querySelectorAll(".slides");
	const classHide = "slides-hidden", count = slides.length;
	nextSlide();
function nextSlide() {
	slides[(index ++) % count].classList.add(classHide);
	slides[index % count].classList.remove(classHide);
	setTimeout(nextSlide, 1000);
	}
	});
function myFunction1() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");

	if (dots.style.display === "none") {
	dots.style.display = "inline";
	btnText.innerHTML = "Read more"; 
	moreText.style.display = "none";
	} else {
	dots.style.display = "none";
	btnText.innerHTML = "Read less"; 
	moreText.style.display = "inline";
	}
	}
