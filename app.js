document.addEventListener("DOMContentLoaded", function () {
  // Get the elements we need to interact with
  const menuButton = document.getElementById("MenuButton");  // Hamburger icon
  const navLinks = document.getElementById("Nav-Links");     // Navigation menu links
  const menuItems = navLinks.querySelectorAll("a");           // All the menu items

  // Listen for the click event on the menu button (hamburger)
  menuButton.addEventListener("click", function() {
    // Toggle the 'open' class on the navLinks (this will show/hide the menu)
    navLinks.classList.toggle("open");

    // Change the hamburger icon to a close icon when the menu is open, and vice versa
    const icon = menuButton.querySelector("i");
    if (navLinks.classList.contains("open")) {
      icon.className = "bx bx-x";  // Close icon
    } else {
      icon.className = "bx bx-menu";  // Hamburger icon
    }
  });

  // Close the menu when a section link is clicked
  menuItems.forEach(item => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("open");
      // Reset the hamburger icon to show the "menu" icon again
      menuButton.querySelector("i").className = "bx bx-menu";
    });
  });
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Apply ScrollReveal to various elements after DOM content is loaded
ScrollReveal().reveal(".header__container img", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__container p", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".HeaderButtons", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".ProjectCard", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".ExperienceList li", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".FooterContainer h2", { ...scrollRevealOption });
ScrollReveal().reveal(".FooterContainer p", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".FooterContainer .MailTo", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".FooterSocials", { ...scrollRevealOption, delay: 500 });





  

  