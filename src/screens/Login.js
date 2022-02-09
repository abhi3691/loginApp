import React, { useState,useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions,TextInput,TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
export default function Login() {
  const [email,setEmail] = useState(null);
  const [Password,setPassword] =useState(null);
  const inputRef = useRef();
  const Naviation = useNavigation();
  const SignInFunction = () =>{
    if(email == 'Admin' && Password == '1234'){
      Naviation.navigate('Home')
    }
    else{
      Alert.alert('', 'User name and Password Mismatch' );
      inputRef.current.clear();
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
              <View style={styles.cardStyles}></View>
        <View style={{ flex: 1,justifyContent:'center' }}>
          <View style={{top:20}}>
            <Image
              source={require('../../assets/icon.png')}
              style={styles.IconStyle}
            />
          </View>
          <Text style={styles.Title}>Welcome Back,</Text>
          <Text style={styles.subTitle}>Sign in to continue</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.input}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
          style={styles.inputValue}
          ref={inputRef}
          placeholder='ernser.martin@feil.com'
          value={email}
          onChangeText={setEmail}
          />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputTitle}>Password</Text>
          <TextInput
          ref={inputRef}
          style={styles.inputValue}
          placeholder='**************'
          value={Password}
          onChangeText={setPassword}
          secureTextEntry={true}
          
          />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() => {
            SignInFunction()
          }}
          >
            <Text style={{color:'#fff'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStyles:{
    position:'absolute',
    height:20,
    width:width-28,
    backgroundColor:'#fff',
    left:-5,
    top:0,
  },
  card: {
    height: height - 100,
    width: width - 50,
    backgroundColor: '#fff',
    elevation: 4,
    top:15,
    paddingHorizontal:20,
  },
  IconStyle: {
    height: 100,
    width: 100,
   left:-25,
  },
  Title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    
  },
  ButtonStyle:{
    backgroundColor:'#5300c7',
    color:'#fff',
    height:50,
    marginHorizontal:20,
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
  },
  input:{
    borderBottomWidth:1,
    marginHorizontal:20,
    borderColor:'#aaa',
    marginTop:20,
  },
  inputTitle:{
    fontSize:16,
    fontWeight:'bold',
    color:'#000'
  },
  inputValue:{
    fontSize:16
  }
});
