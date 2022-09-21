function openMenu(elem) {
  var menu = document.getElementById("navmenu");
  if (menu.clientHeight === 0) {
    menu.style.height = "auto";
  } else {
    menu.style.height = 0;
  }
}

function openSubmenu(elem) {
  var subMenu = document.getElementById("submenu");
  if (subMenu.style.display === "" || subMenu.style.display === "none") {
    subMenu.style.display = "block";
  } else {
    subMenu.style.display = "none";
  }
}
