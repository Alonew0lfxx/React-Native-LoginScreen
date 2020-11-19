import React from 'react';
import {View, TouchableNativeFeedback, Text} from 'react-native';
import {PropTypes} from 'prop-types';

class Button_Login extends React.Component {

    render() {
        return (<TouchableNativeFeedback>

            <View
                style={[{
                    paddingVertical:15,
                    borderRadius: 5,
                    paddingHorizontal:10,
                    backgroundColor: '#654fff',
                    justifyItems:'center',
                    alignItems:'center',
                }, this.props.style]}>

                <Text style={{
                    fontWeight:'bold',
                    color:'#fff'
                }}>Hemen Giriş Yap</Text>

            </View>
        </TouchableNativeFeedback>);
    }
}
Button_Login.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button_Login ;
