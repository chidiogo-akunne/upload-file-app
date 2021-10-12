import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../../components/loader";

export default function SuspenseBoundary(props: React.PropsWithChildren<any>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  return (
    <Suspense fallback={Loading()}>
      {loading ? <Loading /> : props.children}
    </Suspense>
  );
}

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
