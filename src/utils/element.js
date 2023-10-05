export default function (tag, className = "", children) {
  const element = document.createElement(tag);
  element.className = className;
  if (children.length) element.append(...children);
  return element;
}
