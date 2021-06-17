$(function(){
    //section02 data-tab-target javascript
    const tabs = document.querySelectorAll("[data-tab-target]");
    const tabcon = document.querySelectorAll("[data-tab-content]");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabcon.forEach((tabc_all) => {
          tabc_all.classList.remove("active");
        });
        tabs.forEach((tabs_all) => {
            tabs_all.classList.remove("on");
          });     
        target.classList.add("active");
        tab.classList.add("on");
      });
    });


});