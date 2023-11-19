// A function that adds and removes the class "myActiveFaq" on the section you click on
function faqClickHandler(e) {
  const element = e.currentTarget;
  element.classList.toggle("myActiveFaq");
  let nextElement = element.nextElementSibling;
  // Toggle display of the next element if it's a description
  if (nextElement && nextElement.classList.contains("description")) {
    nextElement.style.display =
      nextElement.style.display === "block" ? "none" : "block";
  }
}

async function getFaqData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const accordion = document.querySelector("#faq");

  // Clear existing static FAQ content
  accordion.innerHTML = "<h1>FAQ</h1>";

  data.forEach((post, index) => {
    if (index < 10) {
      // Limit to 10 FAQ items for example
      const titleDiv = document.createElement("div");
      titleDiv.className = "title";
      titleDiv.innerHTML = post.title;
      titleDiv.addEventListener("click", faqClickHandler);

      const descriptionDiv = document.createElement("div");
      descriptionDiv.className = "description";
      descriptionDiv.textContent = post.body;

      accordion.appendChild(titleDiv);
      accordion.appendChild(descriptionDiv);
    }
  });
}

getFaqData();
