import React, { lazy } from "react";
import SuspenseBoundary from "./commons/boundary/suspense";
const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <SuspenseBoundary>
      <Home />
    </SuspenseBoundary>
  );
}

export default App;
