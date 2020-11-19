/* eslint-disable prettier/prettier */
import React from 'react';
import {Platform, SafeAreaView, ScrollView, StyleSheet, Text, View,KeyboardAvoidingView, TouchableNativeFeedback} from 'react-native';
import TextInput_login from '../components/TextInput_login';
import Button_Login from '../components/Button_ login';

class LoginPage extends React.Component {
    render() {
        return <SafeAreaView style={styles.container}>
            <View
                style={{
                    position: 'absolute',//objenin konumunu Z Olarak en Aşağı alır
                    backgroundColor: '#654fff',
                    borderRadius: 1000,
                    top: -145,
                    left: -75,
                    height: 512,
                    width: 512,
                }}/>

           <KeyboardAvoidingView behavior={'position'}>

               <View
                   style={{
                       width: '100%',
                       justifyItems: 'center',
                       alignItems: 'center',
                   }}>
                   <View
                       style={{
                           justifyItems: 'center',
                           alignItems: 'center',
                           paddingTop: 40,
                       }}>

                       <Text style={{
                           fontSize: 28,
                           fontWeight: 'bold',
                           color: 'rgba(255,255,255,0.95)',
                       }}>KProfile</Text>

                       <Text style={{
                           fontSize: 18,
                           fontWeight: '100',
                           color: 'rgba(255,255,255,0.70)',
                       }}>Your powerful profile manager</Text>
                   </View>
               </View>

               <ScrollView
                   scrollToOverflowEnabled={true}>
                   <View style={{
                       backgroundColor: '#fff',
                       marginVertical: 60,
                       marginHorizontal: 24,
                       padding: 20,
                       borderRadius: 10,
                       shadowColor: '#000',
                       shadowOpacity: 1,
                       elevation: 10,
                   }}>
                       <Text
                           style={{
                               fontSize: 24,
                               fontWeight: 'bold',
                               color: 'rgba(0,0,0,0.8)',
                           }}>AIO Profile Managment</Text>


                       <Text
                           style={{
                               fontSize: 16,
                               marginTop: 5,
                               color: 'rgba(0,0,0,0.5)',
                           }}>Hesabınıza dair bütün veriler tek bir uygulamada</Text>


                       <Text
                           style={{
                               marginTop: 24,
                               fontSize: 16,
                               fontWeight: 'bold',
                               color: 'rgba(0,0,0,0.8)',
                           }}>Giriş Yapın</Text>


                       <TextInput_login
                           hint={'Kullanıcı Adı'}
                           isSelected={true}
                           isPassword={false}
                           isLastComponent={false}
                           onSubmitEditing={() => this.passwordInput.focus()}/>

                       <TextInput_login
                           hint={'Şifre'}
                           isSelected={false}
                           isPassword={true}
                           isLastComponent={true}
                           inputRef={input => this.passwordInput = input}/>

                       <Button_Login
                           text={'Hemen Giriş Yap'}
                           style={{
                               marginTop:10,
                           }}
                          />


                   </View>


               </ScrollView>


           </KeyboardAvoidingView>

        </SafeAreaView>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
        paddingTop: Platform.OS === 'android' ? 40 : 0,
    },

});

export default LoginPage;
