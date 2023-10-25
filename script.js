
const panels = document.querySelectorAll(".panel");
// looping through all the panel class
panels.forEach((panel)=>{
    // performing function when clicked:
 panel.addEventListener('click', ()=>{
    // first removing active class from all the panels
    removeactiveclass();
    // adding active class to only those panel that is clicked
    panel.classList.add('active');
 })

})
function removeactiveclass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    } )
}