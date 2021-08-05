import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import styled from "styled-components";

import Globe from "./components/Globe";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { persistor, store } from "./state/store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
`;

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Wrapper>
          <Header />
          <Globe />
          <Projects />
        </Wrapper>
      </PersistGate>
    </Provider>
  );
}
