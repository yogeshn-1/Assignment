import "normalize.css";
import "./index.css";
import styled from "styled-components";
import Header from "./Components/Header";
import Body from "./Components/Body";
const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
function App() {
  return (
    <Page>
      <Header />
      <Body />
    </Page>
  );
}

export default App;
