import React, { useState } from "react";
import { styled } from "styletron-react";

const Front = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  borderRadius: "15px",
  position: "relative",
  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.5)",
  "@media (min-width: 975px)": {
    flexDirection: "row"
  }
});

const MainDiv = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10vw"
});

const Line = styled("div", {
  height: "300vh",
  width: "90px",
  backgroundColor: "#1177fb",
  position: "absolute",
  top: "0",
  left: "10%",
  transform: "skew(30deg)"
});

const RightLine = styled("div", {
  height: "300vh",
  width: "90px",
  backgroundColor: "#1177fb",
  position: "absolute",
  top: "0",
  transform: "skew(30deg)",
  left: "20%"
});

const Left = styled("div", {
  display: "flex",
  backgroundColor: "white",
  borderRadius: "5px 5px 0px 0px",
  justifyContent: "center",
  alignItems: "center",
  flex: "1",
  "@media (min-width: 975px)": {
    borderRadius: "5px 0px 0px 5px"
  }
});

const SignUp = styled("div", {
  margin: "40px",
  padding: "50px"
});

const NameField = styled("div", {
  display: "flex",
  justifyContent: "space-between"
});

const Inputt = styled("input", {
  display: "block",
  padding: "12px 0 12px 12px",
  width: "100%",
  fontWeight: "lighter",
  borderRadius: "2px",
  border: "1px solid #bcc0c4",
  margin: "5px 0px",
  ":focus": {}
});

const InputContainer = styled("div", {
  margin: "15px 0px 0px 0px"
});

const FirstNameInputContainer = styled("div", {
  margin: "15px 10px 0px 0px"
});

const LastNameInputContainer = styled("div", {
  margin: "15px 0px 0px 10px"
});

const AgeLabel = styled("label", {});

const ToCenter = styled("div", {
  textAlign: "center"
});

const Btn = styled("button", {
  marginTop: "20px",
  width: "100%",
  padding: "16px 0px",
  borderRadius: "25px",
  backgroundColor: "#1177fb",
  color: "white",
  border: "0px solid",
  fontWeight: "bold",
  outline: "none",
  ":disabled": {
    backgroundColor: "#92bef7"
  }
});

const Heading = styled("div", {
  textAlign: "center",
  marginBottom: "15px"
});

const Divider = styled("div", {
  padding: "10px",
  margin: "5px",
  textAlign: "center",
  position: "relative",
  "::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "0",
    width: "100%",
    height: "1px",
    backgroundColor: "#bcc0c4"
  }
});

const Or = styled("span", {
  padding: "10px",
  backgroundColor: "white",
  position: "relative",
  zIndex: "1"
});

const Gender = styled("div", {
  display: "flex",
  flexDirection: "column"
});

const Group = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px"
});

const Visibility = styled("div", {
  visibility: "hidden"
});

const SignUpLogo = styled("img", {
  width: "30px",
  borderRadius: "50px",
  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.5)",
  margin: "5px 10px",
  padding: "5px"
});

const SignUpLogoContainer = styled("div", {
  display: "flex",
  justifyContent: "center"
});

const Small = styled("small", {
  color: "#cf4b44"
});

const RightBox = styled("div", {
  backgroundColor: "#1177fb",
  flex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0 0 5px 5px",
  color: "white",
  textAlign: "center",
  padding: "200px 0",
  "@media (min-width: 975px)": {
    borderRadius: "0 5px 5px 0"
  }
});

const Radio = styled("input", {
  appearance: "none",
  display: "inline-block",
  position: "relative",
  backgroundColor: "#f1f1f1",
  color: "#666",
  top: "10px",
  height: "30px",
  width: "30px",
  border: "0",
  borderRadius: "50px",
  cursor: "pointer",
  marginRight: "8px",
  outline: "none",
  transition:
    "background-color 1s ease-out , border 0.5s ease-in , padding 0.5s ease-in",

  ":hover": {
    backgroundColor: "#92bef7"
  },
  ":checked": {
    backgroundColor: "#1177fb",
    border: "10px solid #f7f7f7",
    padding: "5px"
  }
});

const Checkbox = styled("input", {
  appearance: "none",
  display: "inline-block",
  position: "relative",
  backgroundColor: "#f1f1f1",
  color: "#666",
  top: "10px",
  height: "30px",
  width: "30px",
  border: "0",
  // borderRadius: "50px",
  cursor: "pointer",
  marginRight: "8px",
  outline: "none",
  transition:
    "background-color 1s ease-in , border 0.5s ease-in , padding 0.5s ease-in",

  ":hover": {
    backgroundColor: "#92bef7"
  },
  ":checked": {
    backgroundColor: "#1177fb",
    border: "10px solid #f7f7f7",
    padding: "5px"
  }
});

const handleSubmit = (e, object) => {
  e.preventDefault();
  const result = JSON.stringify(object, null, 2);
  if (object.tac) {
    alert(result);
  } else {
    alert("you must agree terms and conditions to login");
  }
};

let formInitCounter = 0;
function Form() {
  formInitCounter++;
  console.log(formInitCounter);

  const [object, setObject] = useState({
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    age: 18,
    email: "example@example.com",
    password: "*****",
    tac: false
  });

  object.age = object.age <= 0 ? 0 : object.age;

  const handleChange = e => {
    const { name, type, checked } = e.target;
    let { value } = e.target;

    value = type === "checkbox" ? checked : value;

    setObject({ ...object, [name]: value });
  };

  let tog = object.age >= 18 ? true : false;

  return (
    <div>
      <Line />
      <RightLine />
      <MainDiv>
        <Front>
          <Left>
            <SignUp>
              <Heading>
                <h2>Sign Up With</h2>
              </Heading>
              <SignUpLogoContainer>
                <SignUpLogo src="./img/f.png" alt="facebook logo" />
                <SignUpLogo src="./img/g.png" alt="Google logo" />
                <SignUpLogo src="./img/link.png" alt="Linkdin logo" />
              </SignUpLogoContainer>

              <Divider>
                <Or>OR</Or>
              </Divider>

              <form onSubmit={e => handleSubmit(e, object)}>
                <NameField>
                  
                  <FirstNameInputContainer>
                    <label htmlFor="firstName">First name</label>
                    <Inputt
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={object.firstName}
                      onChange={handleChange}
                    />
                  </FirstNameInputContainer>
                  <LastNameInputContainer>
                    <label htmlFor="lastName">Last name</label>
                    <Inputt
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={object.lastName}
                      onChange={handleChange}
                    />
                  </LastNameInputContainer>
                </NameField>
                <InputContainer>
                  <Gender>
                    <label>Your gender</label>
                    <Group>
                      <div>
                        <label htmlFor="male">
                          <Radio
                            type="radio"
                            id="male"
                            name="gender"
                            checked={object.gender === "male"}
                            value="male"
                            onChange={handleChange}
                          />
                          Male
                        </label>
                      </div>
                      <div>
                        <label htmlFor="female">
                          <Radio
                            type="radio"
                            id="female"
                            name="gender"
                            checked={object.gender === "female"}
                            value="female"
                            onChange={handleChange}
                          />
                          Female
                        </label>
                      </div>
                      <div>
                        <label htmlFor="other">
                          <Radio
                            type="radio"
                            id="other"
                            name="gender"
                            checked={object.gender === "other"}
                            value="other"
                            onChange={handleChange}
                          />
                          Other
                        </label>
                      </div>
                    </Group>
                  </Gender>
                </InputContainer>
                <InputContainer>
                  <AgeLabel htmlFor="age">
                    {" "}
                    Your Age{" "}
                    <Inputt
                      type="number"
                      id="age"
                      name="age"
                      value={object.age}
                      onChange={handleChange}
                    />
                    {!tog ? (
                      <Small>your age is less than 18</Small>
                    ) : (
                      <Visibility>something</Visibility>
                    )}
                  </AgeLabel>
                </InputContainer>

                <InputContainer>
                  <label htmlFor="email">Email</label>
                  <Inputt
                    type="email"
                    id="email"
                    name="email"
                    value={object.email}
                    onChange={handleChange}
                  />
                </InputContainer>
                <InputContainer>
                  <label htmlFor="password">Password</label>
                  <Inputt
                    type="password"
                    id="password"
                    name="password"
                    value={object.password}
                    onChange={handleChange}
                  />
                </InputContainer>

                <InputContainer>
                  <ToCenter>
                    {tog ? (
                      <label htmlFor="tac">
                        <Checkbox
                          type="checkbox"
                          id="tac"
                          name="tac"
                          checked={object.tac}
                          onChange={handleChange}
                        />
                        I agree to
                        <a href="#Top"> Terms and Conditions</a>
                      </label>
                    ) : (
                      <Visibility>
                        <label htmlFor="tac">
                          <input
                            type="checkbox"
                            id="tac"
                            name="tac"
                            checked={object.tac}
                            onChange={handleChange}
                          />
                          I agree to
                          <a href="#Top"> Terms and Conditions</a>
                        </label>
                      </Visibility>
                    )}
                  </ToCenter>
                </InputContainer>

                <Btn type="submit" disabled={!tog}>
                  Sign up
                </Btn>
              </form>
            </SignUp>
          </Left>

          <RightBox>
            <img src="https://source.unsplash.com/100x100/" alt="logo" />
            <h1>Already have an account?</h1>
            <p>
              It's easy to start, just sign in with your <br /> Facebook
              account or email.
            </p>
            <Btn
              $style={{
                backgroundColor: "white",
                color: "black",
                width: "auto",
                padding: "16px 32px"
              }}
            >
              Sign in
            </Btn>
          </RightBox>
        </Front>
      </MainDiv>
    </div>
  );
}

export default Form;
