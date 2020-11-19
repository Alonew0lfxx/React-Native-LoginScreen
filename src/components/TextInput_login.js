import React from 'react';
import {TextInput, View} from 'react-native';
import PropTypes from 'prop-types';

class TextInput_login extends React.Component {
    state = {
        getText:'',
    }
    render() {
        const {isSelected,hint,isPassword,isLastComponent} = this.props;
        return (<View
            style={{
                marginTop:8,
                borderWidth:2,
                borderRadius:5,
                borderColor: isSelected === true ? '#654fff' :'rgba(0,0,0,0.5)',
            }}>

            <TextInput
                returnKeyType={isLastComponent === true ? 'go' : 'next'}
                secureTextEntry={isPassword}
                autoCapitalize={'none'}
                placeholder={hint}
                ref={this.props.inputRef}///  klavye den ileri tuşuna bastınmı sıradaki öğeye geçmesi için gerekli!
                onSubmitEditing={this.props.onSubmitEditing}
                onChangeText={
                    text => this.setState({text})
                }>
            </TextInput>
        </View>);
    }
}

/**
 * Bunu eklememiz gerekli aksi halde
 * (String str, bool boolean) yapınca
 * gerekli stringlerin alınması gerektiğini ide'ye belirtir.!
 * @type {{hint: *, isSelected: *}}
 */
TextInput_login.propTypes ={
    isPassword: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isLastComponent: PropTypes.bool.isRequired,
    hint: PropTypes.string.isRequired,
}

export default TextInput_login;
