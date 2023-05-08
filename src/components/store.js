import { createGlobalState } from "react-hooks-global-state"

const { setGlobalState, useGlobalState } = createGlobalState({
  showSubscribe: false
})

export { setGlobalState, useGlobalState }
