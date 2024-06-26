export default (node: Element, userHandler: ((e: any) => any) | undefined) => {
  const clickHandler = (e: any) => {
    if (node && !node.contains(e.target) && !e.defaultPrevented && userHandler !== undefined)
      userHandler(e);
  };

  document.addEventListener('click', clickHandler, true);

  return {
    destroy() {
      document.removeEventListener('click', clickHandler, true);
    }
  };
};
