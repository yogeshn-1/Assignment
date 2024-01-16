import logo from "../assets/header_logo.png";
import styled from "styled-components";
const Container = styled.div`
  padding: 5px 20px 20px;
  background-color: #f6f6f6;
  border-radius: 15px;
  box-shadow: 5px 5px 7px 3px #182a46;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 30vw;
  margin-left: auto;
  margin-right: auto;
`;
const Button = styled.button`
  background: linear-gradient(#4b94c5 50%, #3f79a2 50%);
  width: fit-content;
  align-self: flex-end;
  border-radius: 5px;
  padding: 10px;
  border: 0;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(#4b95d6 50%, #3f7ab3 50%);
  }
`;
const Body = () => {
  return (
    <div className="body">
      <img src={logo} />
      <Container>
        <Form action="post">
          <p style={{ fontSize: "12px" }}>
            Please enter your administrator login and password.{" "}
          </p>
          <input placeholder="Username" defaultValue="guest"></input>
          <input placeholder="Password"></input>
          <Button>Sign in</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Body;
