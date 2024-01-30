import { Camera, CameraType } from "expo-camera";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCamera = styled(Camera)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Snap = styled.TouchableOpacity`
  position: absolute;
  left: 40%;
  bottom: 5%;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 5px solid white;
`;

export const CameraScreen = ({navigation}) => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem('@dp', photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>Camera Access Denied</Text>
      </View>
    );
  }

  return (
    <ProfileCamera
      ref={(camera) => {
        cameraRef.current = camera;
      }}
      type={CameraType.front}
      ratio={"16:9"}
    >
      <Snap onPress={snap}></Snap>
    </ProfileCamera>
  );
};
