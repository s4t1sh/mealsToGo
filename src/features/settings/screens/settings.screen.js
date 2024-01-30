import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utitlity/safearea.utility";
import { List, Avatar } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: 16px;
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const SettingScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null)

  const getProfileImage = async () => {
    const photoUri = await AsyncStorage.getItem('@dp');
    setPhoto(photoUri);
  };
  
  // console.log(photo);

  useFocusEffect(()=>{
    getProfileImage();
  });

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {photo && <Avatar.Image source={{uri: photo}} backgroundColor="#2182BD"/>}
          {!photo && <Avatar.Icon size="180" icon="human" backgroundColor="#2182BD" />}
        </TouchableOpacity>

        <Spacer size="large" position="top">
          <Text>{user}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View Your Favourites"
          left={(props) => <List.Icon {...props} icon="heart" color="black" />}
          onPress={() => navigation.navigate("Favourites")}
        />

        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} icon="door" color="black" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

export default SettingScreen;
