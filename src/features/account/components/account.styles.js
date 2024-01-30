import styled from "styled-components/native";
import { View, Text} from "react-native";
import { Button, TextInput } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home_bg.jpg")
})`
    position: relative;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Brand = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 25px;
`;
export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const AccountCover = styled.View`
position: absolute;
width: 100%;
height: 100%;
background: rgba(255, 255, 255,0.3);
`;

export const AccountContainer = styled.View`
    background-color: rgba(255, 255 , 255, 0.7);
    padding: 32px;
    margin-top: 8px;
`;

export const AuthButton = styled(Button).attrs({
    buttonColor: '#2182BD'
})`
    padding: 8px;
`;

export const ErrorText = styled.Text`
    color: #D0421B;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 0px;
  padding: 8px;
  left: 8%;
`;