// src/app.js
import { fetchEntries } from "./contentstack.js";

const contentContainer = document.getElementById("content");

fetchEntries("home_page")
  .then(response => {
    const entries = response[0];
    const layout = entries.layout_json;

    layout.forEach((item) => {
      const element = document.createElement(item.tag);
      if (item.tag === "img") {
        element.src = item.content;
      } else {
        element.textContent = item.content;
      }
      contentContainer.appendChild(element);
    });
  })
  .catch(error => console.error(error));
