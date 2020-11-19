/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView,Platform} from 'react-native';


class App extends React.Component {
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

            <View
                style={{
                    justifyItems:'center',
                    alignItems:'center',
                    paddingTop:40,
                }}>

                <Text style={{
                    fontSize:28,
                    fontWeight:'bold',
                    color:'rgba(255,255,255,0.95)',
                }}>KProfile</Text>

                <Text style={{
                    fontSize:18,
                    fontWeight:'100',
                    color:'rgba(255,255,255,0.70)',
                }}>Login to your Instagram™ account</Text>
            </View>
        </SafeAreaView>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
        paddingTop: Platform.OS === 'android' ? 40:0,
    },
});

export default App;
