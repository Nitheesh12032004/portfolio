var typed = new Typed(".train", {
    strings: ["Frontend developer", "UI/UX designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let section =document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav a');
window.onscroll= () => {
  section.forEach(sec => {
    let top=window.scrollY;
    let offset=sec.offsetTop -150;
    let height =sec.offsetHeight;
    let id=sec.getAttribute('id');
    if(top >= offset && top < offset + height)
    {
      navlinks.forEach(links => {
        links.classList.remove('active');
        dovument.querySelector('header nav a [href*='+ id +']').classList.add('active');
      })
    }
  })

} 
let menuicon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.nav');
menuicon.onclick=()=>{
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}