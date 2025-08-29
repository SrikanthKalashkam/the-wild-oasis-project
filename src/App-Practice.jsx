import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading type="h1" as="h1">
              The Wild Oasis
            </Heading>

            <div>
              <Heading type="h2" as="h2">
                Check in and out
              </Heading>
              <Button variation="primary" size="medium">
                Check in
              </Button>
              <Button>Check out</Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading type="h3" as="h3">
              Form
            </Heading>
            <form>
              <Input type="number" placeholder="Number of guests"></Input>
              <Input type="number" placeholder="Number of guests"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
