export default (node: Element, useActionArray: any[]) => {
  useActionArray.map((useAction) => {
    // check if useAction is function
    if (typeof useAction === 'function') return useAction(node);

    // check if useAction has parameters
    if (Array.isArray(useAction)) {
      let params;
      [useAction, params] = useAction;
      return useAction(node, params);
    }
  });
};
