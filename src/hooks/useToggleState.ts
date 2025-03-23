import { useState } from "react";

export default function useToggleState(initialState: boolean = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((prev) => !prev);
  const onOpen = () => setState(true);
  const onClose = () => setState(false);

  return { state, setState, toggle, onClose, onOpen };
}
