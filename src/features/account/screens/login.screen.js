import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { useContext } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from "lottie-react-native";
import {
  AuthButton,
  Brand,
  AuthInput,
  ErrorText,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
} from "../components/account.styles";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";

const Loading = styled(ActivityIndicator)`
  position: absolute;
  top: 50%;
  left: 45%;
  z-index: 100;
`;

const Lottie = styled(LottieView)`
  width: 100%;
  flex: 1;
`;

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />

      {isLoading ? (
        <Loading animating={true} color={"#ff3647"} size={"large"} />
      ) : (
        <>
          {/* <AnimationWrapper>
            <Lottie
              autoPlay
              source={require("../../../../assets/animation.json")}
            />
          </AnimationWrapper> */}
          <Spacer>
            <Brand>Meals To Go</Brand>
          </Spacer>
          <AccountContainer>
            <AuthInput
              label="Email"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />

            <Spacer size="large">
              <AuthInput
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
              />
            </Spacer>

            {error && (
              <Spacer size="large">
                <ErrorText>{error}</ErrorText>
              </Spacer>
            )}

            <Spacer size="large">
              <AuthButton
                mode="contained"
                onPress={() => onLogin(email, password)}
              >
                LOGIN
              </AuthButton>
            </Spacer>
          </AccountContainer>
        </>
      )}
    </AccountBackground>
  );
};
