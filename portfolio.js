

function enlargeElement(x){

var enlarge = document.querySelectorAll(x);
console.log(enlarge);
enlarge.forEach(function(item){item.addEventListener("mouseenter", function(){
	console.log("hello");
	item.className +=" enlarge";})});
enlarge.forEach(function(item){item.addEventListener("mouseleave", function(){
	console.log("hello");
	item.classList.remove("enlarge");})});

};
enlargeElement("a");
enlargeElement("img");

function dropDownList(){

	var li = document.querySelectorAll(".projects");
	console.log(li)
	
	
	li.forEach(function(item){item.addEventListener("mouseenter", function(){
		console.log("hi");
		var ul = document.querySelector(".find");
		ul.classList.remove("invisible");
	})});
	li.forEach(function(item){item.addEventListener("mouseleave", function(){
		var ul = document.querySelector(".find")
		ul.className +=" invisible";
	})})
};
dropDownList();
var projects = document.querySelectorAll(".pjvid");
function scrollProjects(x){

x.forEach(function(item){
	item.addEventListener("mouseover", function(){
		item.play();
		console.log("play");
		console.log(item);


})
})

}
scrollProjects(projects);