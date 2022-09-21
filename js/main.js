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
  if (subMenu.clientHeight === 0) {
    subMenu.style.overflow = "auto";
    subMenu.style.height = "auto";
  } else {
    subMenu.style.height = 0;
  }
}
