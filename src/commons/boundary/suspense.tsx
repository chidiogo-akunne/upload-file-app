import React, { Suspense, useEffect, useState, useContext } from "react";
import Loader from "../../components/loader";
import { ThemeContext } from "../../context";

//import style
import { LoaderWrapper } from "./styles";

export default function SuspenseBoundary(props: React.PropsWithChildren<any>) {
  const [loading, setLoading] = useState(true);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    //get dark mode value from local storage and dispatch to context
    const darkMode = window.localStorage.getItem("darkMode");
    if (darkMode === "dark") {
      theme.dispatch({ type: "DARKMODE" });
    } else {
      theme.dispatch({ type: "LIGHTMODE" });
    }
    //wait for 2 seconds before setting state
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function Loading() {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  //check if loading is false before mountiing children
  return (
    <Suspense fallback={Loading}>
      {loading ? <Loading /> : props.children}
    </Suspense>
  );
}
