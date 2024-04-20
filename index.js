// navigation bar

const hamburger_menu = document.querySelector(".hamburger_menu");
let nav_list = document.querySelector(".nav_list");
let menu_line_1 = document.querySelector("#menu_line_1");
let menu_line_2 = document.querySelector("#menu_line_2");
let menu_line_3 = document.querySelector("#menu_line_3");

hamburger_menu.addEventListener("click", () => {
  toggleNav();
});

const toggleNav = () => {
  menu_line_1.className = menu_line_1.className ? "" : "rotate_left";
  menu_line_2.className = menu_line_2.className ? "" : " no_rotate";
  menu_line_3.className = menu_line_3.className ? "" : "rotate_right";
  nav_list.style.visibility =
    nav_list.style.visibility === "visible" ? "hidden" : "visible";
  nav_list.style.opacity = nav_list.style.opacity === "1" ? "0" : "1";
  nav_list.style.width = nav_list.style.width === "100%" ? "0" : "100%";
};

// cursor
// const cursorRounded = document.querySelector(".cursor");

// const moveCursor = (e) => {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
//   cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
// };

// window.addEventListener("mousemove", moveCursor);
