// document.addEventListener("DOMContentLoaded", function() {
//     const menuButton = document.getElementById("menu-button");
//     const menuItems = document.getElementById("menu-items");
  
//     menuButton.addEventListener("click", function() {
//       // Toggle the 'show' class to display/hide menu items
//       menuItems.classList.toggle("show");
//     });
  
//     // Close the menu when clicking outside of it
//     document.addEventListener("click", function(event) {
//       if (!menuButton.contains(event.target) && !menuItems.contains(event.target)) {
//         menuItems.classList.remove("show");
//       }
//     });
//   });
  
// counter container

let count = 1;

function increment() {
    if (count < 10) {
        count++;
        updateCounter();
    }
}

function decrement() {
    if (count > 1) {
        count--;
        updateCounter();
    }
}

function updateCounter() {
    document.getElementById('count').innerText = count;
}