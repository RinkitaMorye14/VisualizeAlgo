const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  modeSwitch = body.querySelector(".toggle_switch"),
  modeText = body.querySelector(".mode_text");
  

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

const sort_link=document.getElementById("sort_link");
const search_link=document.getElementById("search_link");
const sort_options=document.getElementById("sort_options");
const search_options=document.getElementById("search_options");
const change_title=document.getElementsByClassName("change_title");
sort_link.addEventListener('click',function() {
   change_title[0].innerHTML="Sort Algorithm";
   sort_options.style.display="block";
   search_options.style.display="none";
});
search_link.addEventListener('click',function() {
  change_title[0].innerHTML="Search Algorithm";
  search_options.style.display="block";
  sort_options.style.display="none";
});

const list_stack=document.getElementById("list_stack");
list_stack.addEventListener('click',function(){
  window.location.href = "list.html";
});
