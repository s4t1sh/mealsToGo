import auth from '@react-native-firebase/auth';

const loginRequest = (email, password)=>{
    auth().signInWithEmailAndPassword(email, password)
};

export default loginRequest;