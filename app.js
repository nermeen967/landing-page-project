//returning the NodeList of elements in the "ul" tag by using its id  
const myUl=document.querySelector('#navbar__list');
//returning the NodeList of elements in the "section" tag by using its tagName
const mySections=document.querySelectorAll('section');

// build the nav
//making loop to return the data that stored in the "data-nav" attribute and associate it to myDataNav variable 
for(let SectionElm of mySections){
const myDataNav = SectionElm.getAttribute('data-nav');
//creating newLi
		const newLi= document.createElement('li');
//taking the data of "data-nav" and associate it to newLi
		newLi.textContent= myDataNav;
//changing the style of li elements by using inline css codes
         newLi.style.cssText +='color:black;font-size:20px;text-align: left; padding:20px; display:inline;'
//scroll by using addEventListener & scrollIntoView method which take action when click on the newLi elements 
		newLi.addEventListener('click', function()
		{
			SectionElm.scrollIntoView({
			behavior:"smooth", block:"end", inline: "nearest"});
		});
//adding li elements to ul
		myUl.appendChild(newLi);
	}; 
	//making section active state
function callback(entries){
		entries.forEach(entry => {
			 // Each entry describes an intersection change for one observed
		  if (entry.isIntersecting) {
			  //adding active section
			entry.target.classList.add('active');
		  } else {
			  //remove active section
			entry.target.classList.remove('active');
		  }
		});
	
};

	let options = {
		root: document.querySelector('#scrollArea'),
		rootMargin: '0px',
		threshold: 0.75
	  }
	  
	  let observer = new IntersectionObserver(callback, options);
	  mySections.forEach((sec)=>{
		  observer.observe(sec);
	  });
	  //making responsive nav
	  function myFunction() {
		var x = document.getElementsByTagName("ul");
		if (x.className === "topnav") {
		  x.className += " responsive";
		} else {
		  x.className = "topnav";
		}
	  }