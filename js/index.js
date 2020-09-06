var acc = document.getElementsByClassName("more-info");
//var acc = document.getElementsByClassName("project");
//var acc = project.lastChild;
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.parentElement.parentElement.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
};

let columns = document.querySelectorAll('.column');

document.querySelectorAll('div.column').forEach(
  el => el.querySelectorAll('img').forEach(
    el => el.addEventListener('click', ()=>{
      el.classList.toggle('enlarged');
    })
  )
);



