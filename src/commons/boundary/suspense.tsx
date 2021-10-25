import React, { Suspense, useEffect, useState, useContext } from "react";
import Loader from "../../components/loader";
import { ThemeContext } from "../../context";

//import style
import { LoaderWrapper } from "./styles";

export default function SuspenseBoundary(props: React.PropsWithChildren<any>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //wait for 2 seconds before setting state
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
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
