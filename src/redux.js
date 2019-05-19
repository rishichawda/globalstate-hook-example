import React from "react";

const context = React.createContext();

export const useGlobalState = (initialState = {}, reducer) => {
  let init;
  let appState = {};
  if (typeof initialState === "function") {
    init = initialState;
  } else {
    appState = initialState;
  }
  const [state, dispatch] = React.useReducer(
    reducer,
    appState,
    init
  );
  return { ...state, dispatch };
};

export const connect = (mapState, mapDispatch) => {
  const componentWithNewProps = (ReactComponent) => {
    const componentWithContext = (thisprops) => {
      const { dispatch, ...rest } = React.useContext(context);
      const mappedProps = mapState ? mapState(rest) : {};
      const mappedDispatch = mapDispatch ? mapDispatch(dispatch) : {};
      const props = {
        ...mappedProps,
        ...mappedDispatch,
      };
      return <ReactComponent {...props} {...thisprops} />
    }
    return componentWithContext
  }
  return componentWithNewProps
}

export const Provider = ({ children, initialValue }) => {
  return (
    <context.Provider value={{ ...initialValue }}>
      {children}
    </context.Provider>
  );
};
