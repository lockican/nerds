var btn = document.querySelector(".button-map");
var popup = document.querySelector(".modal-feed-back");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form"); 
var user = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]"); 
var text = popup.querySelector("[name=text]");
 

 btn.addEventListener("click", function(evt) {
    	evt.preventDefault();
      popup.classList.add("modal-show");   
    })

 close.addEventListener("click", function(evt) {
    	evt.preventDefault();
      popup.classList.remove("modal-show");   
    })

	form.addEventListener("submit", function(evt) {
    	 if (!user.value || !email.value || !text.value) {
    	 	evt.preventDefault(); 
    	 	popup.classList.add("modal-item-error");
    	 } 
    })