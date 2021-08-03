import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import styled from "styled-components";

import Globe from "./components/Globe";
import { persistor, store } from "./state/store";

const Wrapper = styled.div``;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: auto;
  margin: 6rem;
  z-index: 1;
`;
const Header = styled.h1`
  margin: 0;
`;

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Wrapper>
          <HeaderWrapper>
            <Header>
              Charlie
              <br />
              Hulcher
            </Header>
          </HeaderWrapper>
          <Globe />
        </Wrapper>
      </PersistGate>
    </Provider>
  );
}
