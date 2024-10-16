const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner= document.getElementById("banner");
let dots = document.getElementsByClassName("dot");
let position = 0;


let arrowRight = document.getElementById("arrow_right");
arrowRight.addEventListener("click", function () {
	dots[position].classList.remove("dot_selected");
	if(position == 3){
		position = 0;
	}else{
		position = position + 1;
	}
	
	dots[position].classList.add("dot_selected");

	let baliseImage = document.getElementById("banner-img");
	baliseImage.src = "./assets/images/slideshow/" + slides[position].image;
});




let arrowLeft = document.getElementById("arrow_left");
arrowLeft.addEventListener("click", function () {
	dots[position].classList.remove("dot_selected");
	if(position == 0){
		position = 3;
	}else{
		position = position - 1;
	}
	
	dots[position].classList.add("dot_selected");

	let baliseImage = document.getElementById("banner-img");
	baliseImage.src = "./assets/images/slideshow/" + slides[position].image;
});






function test(){
	const image = document.createElement("img");
	image.src = "./assets/images/slideshow/" + slides[position].image;
	image.id = "banner-img"
	dots[position].classList.add("dot_selected");
	image.className = "banner-img";
	banner.appendChild(image);
}

test()


