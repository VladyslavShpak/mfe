import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Mount to start app

const mount = (element) => {
  ReactDOM.render(<App />, element);
};

//dev is isolation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  console.log(devRoot);
  if (devRoot) {
    mount(devRoot);
  }
}

//prod through container
export { mount };
