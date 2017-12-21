function hideAll() {
	const sections = document.querySelectorAll("section.tabs");
	for(let i = 0; i < sections.length; i++) {
		console.log(sections[i]);
		if(!sections[i].className.match("hidden")) {
			sections[i].className += " hidden";
		}
	}
}

function unhide(element) {
	element.className = element.className.replace(" hidden", "");
}

function navListeners() {
	let navItems = document.querySelectorAll("nav button")
	for(let i = 0; i < navItems.length; i++) {
		navItems[i].addEventListener("click", function() {
			hideAll();
			console.log(navItems[i]);
			const className = navItems[i].className.replace(" navbutton", "");
			const section = document.querySelector("section." + className)
			console.log(section);
			unhide(section);
		})
	}
}


var main = document.getElementById("main");

var createPost = document.getElementById("submit");
createPost.addEventListener("click", function() {
	var titleInput = document.getElementById("title");
	var postInput = document.getElementById("post");

	var newTitle = document.createElement("h2");
	var newPost = document.createElement("p");
	
	newTitle.innerHTML = titleInput.value;
	newPost.innerHTML = postInput.value;

	if(newTitle.innerHTML != "" && newPost.innerHTML != "") {
		var newSection = document.createElement("section");
		newSection.className = "post";

		var delButton = document.createElement("button");
		delButton.className="btn";
		delButton.innerHTML = "Delete";

		newSection.prepend(newPost)
		newSection.prepend(newTitle);
		newSection.append(delButton);

		main.prepend(newSection);

		delButton.addEventListener("click", function() {
			main.removeChild(newSection);
		})
	}
	
});

navListeners();