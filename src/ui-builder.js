// src/ui-builder.js
import { components } from "./components.js";

document.addEventListener("DOMContentLoaded", function () {
  const componentList = document.getElementById("components");
  const canvas = document.getElementById("canvas");
  const jsonOutput = document.getElementById("json-output");

  // Render the list of components
  Object.keys(components).forEach((key) => {
    const comp = document.createElement("div");
    comp.textContent = key;
    comp.draggable = true;
    comp.setAttribute("data-type", key);
    componentList.appendChild(comp);
  });

  // Handle drag and drop
  canvas.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  canvas.addEventListener("drop", (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("text/plain");
    const component = components[type];

    // Create element
    const element = document.createElement(component.tag);
    if (component.tag === "img") {
      element.src = component.defaultSrc;
    } else {
      element.textContent = component.defaultContent;
    }
    canvas.appendChild(element);

    // Update JSON output
    updateJSON();
  });

  // Dragstart event
  document.querySelectorAll("[draggable]").forEach((comp) => {
    comp.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", event.target.getAttribute("data-type"));
    });
  });

  // Update JSON output
  function updateJSON() {
    const layout = [];
    canvas.childNodes.forEach((child) => {
      layout.push({
        tag: child.tagName.toLowerCase(),
        content: child.textContent || child.src,
      });
    });
    jsonOutput.value = JSON.stringify(layout, null, 2);
  }
});
