import "./root.component.css";

export function rootComponent() {
  const rootElement = document.createElement("root");
  const titleElement = document.createElement("h1");

  titleElement.innerText = "Vanilla exercise 👋";

  rootElement.className = "root";
  rootElement.appendChild(titleElement);

  return rootElement;
}
