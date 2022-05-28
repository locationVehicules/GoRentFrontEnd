
export const NavToggle = () => {
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("col-lg-2");
  sidebar.classList.toggle("col-lg-1");

  let main = document.getElementById("main");
  main.classList.toggle("col-lg-10");
  main.classList.toggle("col-lg-11");

  let logo = document.getElementById("logo");
  logo.classList.toggle("fs-4");
  logo.classList.toggle("fs-1");

  let item = document.querySelectorAll(".mainNav .item");
  for (let i = 0; i < item.length; i++) {
    item[i].classList.toggle("d-lg-none");
  }
};
