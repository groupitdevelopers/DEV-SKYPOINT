import { createGlobalState } from "react-hooks-global-state"

const { setGlobalState, useGlobalState } = createGlobalState({
  showSubscribe: false,
  modalLink: ""
})

export { setGlobalState, useGlobalState }
