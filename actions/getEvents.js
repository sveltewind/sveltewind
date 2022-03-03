// imports
import { bubble, listen, get_current_component } from 'svelte/internal';

export default () => {
  const component = get_current_component();
  return node => {
    const events = Object.keys(component.$$.callbacks);
    const listeners = [];

    events.forEach(event =>
      listeners.push(listen(node, event, e => bubble(component, e))),
    );

    return {
      destroy: () => {
        listeners.forEach(listener => listener());
      },
    };
  };
};
