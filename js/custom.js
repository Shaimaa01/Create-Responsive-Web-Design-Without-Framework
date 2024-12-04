let content = document.querySelectorAll(".info-content div");

document.querySelectorAll(".info-list li").forEach((li) => {
  li.addEventListener("click", function (e) {
    // Remove "selected" class from all <li> elements
    li.parentElement.querySelectorAll("li").forEach((sibling) => {
      sibling.classList.remove("selected");
    });

    // Add "selected" class to the clicked <li> element
    e.target.classList.add("selected");

    // Remove all the content 
    content.forEach((div) => {
      div.style.display = "none";
    });

    // Add only the target content
    document.querySelector(
      `.info-content .${e.target.dataset.class}`
    ).style.display = "block";
  });
});
