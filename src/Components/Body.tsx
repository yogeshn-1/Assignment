import logo from "../assets/header_logo.png";
import styled from "styled-components";
const Container = styled.div`
  padding: 5px 20px 20px;
  background-color: #f6f6f6;
  border-radius: 10px;
  width: 30%;
  box-shadow: 5px 5px 7px 3px #182a46;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 24px;
`;
const Button = styled.button`
  background: linear-gradient(#4b94c5, #3f79a2);
  width: fit-content;
  align-self: flex-end;
  border-radius: 5px;
  padding: 7px;
  border: 0;
  color: white;
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
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <Button>Sign in</Button>
        </Form>
      </Container>
    </div>
  );
};

export default Body;
