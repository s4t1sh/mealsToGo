import React from "react";
import LottieView from "lottie-react-native";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Brand,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";

const Lottie = styled(LottieView)`
  width: 100%;
  flex: 1;
`;

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <Lottie
          autoPlay
          source={require("../../../../assets/animation.json")}
        />
      </AnimationWrapper>

      <Spacer>
        <Brand>Meals To Go</Brand>
      </Spacer>

      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("login")}
        >
          LOGIN
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("register")}
          >
            REGISTER
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
