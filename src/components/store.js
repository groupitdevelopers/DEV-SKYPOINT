import { createGlobalState } from "react-hooks-global-state"

const { setGlobalState, useGlobalState } = createGlobalState({
  showSubscribe: false,
  modalLink: "",
  windowWidth: 0
})

export { setGlobalState, useGlobalState }
