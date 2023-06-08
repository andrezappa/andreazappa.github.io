function openNav() {
    document.getElementById("container-mobile-nav").style.display = "block";
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("container-icon").style.display = "none";
    document.getElementById("header").style.background = "var(--bg-body2)";
}
  
  function closeNav() {
    document.getElementById("container-mobile-nav").style.display = "none";
    document.getElementById("menu-icon").style.display = "block";
    document.getElementById("container-icon").style.display = "flex";
    document.getElementById("header").style.background = "var(--bg-body)";
}