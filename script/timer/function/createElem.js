export const createElem = (tag, attr) => {
  const elem = document.createElement(tag);
  if (attr) {
    Object.assign(elem, attr);
  }
  return elem;
};