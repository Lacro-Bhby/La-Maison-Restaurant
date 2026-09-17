document.addEventListener("DOMContentLoaded", () => {
  console.log("LA MAISON Website Loaded Successfully!");
  
  // Highlight active nav link automatically based on URL
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");
  
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
