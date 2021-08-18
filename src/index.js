import "./style.css"

const slider = document.getElementById("myRange");
const output = document.getElementById("price");
const views = document.getElementById("pageviews");
const discount = document.getElementById("checkbox");
var a = 1;
output.innerHTML = slider.value;
views.innerHTML = "10K";

slider.addEventListener("input", valor);

function valor() {
	switch (slider.value) {
		case "8":
			views.innerHTML = "10K";
			output.innerHTML = slider.value * a;
			break;
		case "12":
			views.innerHTML = "50K";
			output.innerHTML = slider.value * a;
			break;
		case "16":
			views.innerHTML = "100K";
			output.innerHTML = slider.value * a;
			break;
		case "20":
			views.innerHTML = "500K";
			output.innerHTML = 24 * a;
			break;
		case "24":
			views.innerHTML = "1M";
			output.innerHTML = 36 * a;
			break;
		default:
			console.log(slider.value);
			break;
	}
}
function applyDiscount(e) {
	if (e.target.checked) {
		a = 0.75;
	} else {
		a = 1;
	}
	valor();

}
discount.addEventListener('change', applyDiscount, false);
