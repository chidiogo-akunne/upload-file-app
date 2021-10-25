import React, {
  createContext,
  useReducer,
  useContext,
  useCallback,
  useEffect,
} from "react";

const initialState = {
  darkMode: false,
};

export const ThemeContext = createContext<any>(null);

const themeReducer = (
  state: typeof initialState,
  action: { type: "LIGHTMODE" | "DARKMODE" }
) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

//create custom theme
export function useTheme() {
  const store = useContext(ThemeContext);

  if (!store) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return store;
}

export function ThemeProvider(props: React.PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    //get dark mode value from local storage and dispatch to context
    const theme = window.localStorage.getItem("theme");
    if (!theme) {
      return;
    }
    dispatch({ type: theme as "LIGHTMODE" | "DARKMODE" });
  }, []);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
