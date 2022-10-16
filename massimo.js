//Personal page of Massimo Dattero

// open the menu

const hamburger = document.getElementById("ics");

hamburger.addEventListener("click", apriMenu);

function apriMenu() {
  let x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
	document.getElementById("ics").innerHTML = " &#8801 ";	
  } else {
    x.style.display = "block";
	document.getElementById("ics").innerHTML = "x";
  }
}


// close the menu

let myWidth = window.innerWidth;
if (myWidth <= 900) {

	const closeMenu = document.getElementsByClassName("closeMenu");

	for (let i = 0; i < closeMenu.length; i++) {
	  closeMenu[i].addEventListener("click", chiudiMenu);
	}

	function chiudiMenu() {
		document.getElementById("menu").style.display = "none";
		document.getElementById("ics").innerHTML = " &#8801 ";
	}
}

// accordion

const accordion = document.getElementsByClassName("accordion");
const symbol = document.getElementsByClassName("symbol");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");

    // Toggle between hiding and showing the active panel
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
	  symbol[i].innerHTML = " &#9947 ";  // triangle
    } else {
      panel.style.display = "block";
	  symbol[i].innerHTML = " &#9932 ";  // cross
    }
  });
}