export default (node, userHandler) => {
  const clickHandler = (e) => {
    if (node && !node.contains(e.target) && !event.defaultPrevented) {
      userHandler(e);
    }
  };

  document.addEventListener("click", clickHandler, true);

  return {
    destroy() {
      document.removeEventListener("click", clickHandler, true);
    },
  };
};
