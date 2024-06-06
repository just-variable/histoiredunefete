window.onscroll = function() {
    shrinkLogo();
};

function shrinkLogo() {
    const header = document.querySelector(".main-logo-top");
    const navbar = document.querySelector(".nav");
    const navLogo = document.querySelector(".nav-logo-div")
    const sticky = navbar.offsetTop;
    const shrinkOn = 100; // Adjust this value as needed

    if (window.pageYOffset > shrinkOn) {
        header.classList.add("shrink");
        navbar.classList.add("stuck");
        navLogo.style.display = "block";
    } else {
        header.classList.remove("shrink");
        navbar.classList.remove("stuck");
        navLogo.style.display = "none";
    }
}
