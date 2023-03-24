import React, {useState} from 'react';

import {InputWrapper, TextInputBase} from './Input.styles';
import {IInput} from './Input.type';
import {Pressable, Text} from 'react-native';

const Input = ({placeHolder, value, onChange, inputType = 'text'}: IInput) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState(false);
  const onChangeTextHandler = (textValue: string) => {
    onChange?.(textValue);
  };
  return (
    <TextInputBase
      isFocus={isFocus}
      isError={false}
      hasSuffix={inputType === 'password'}>
      <InputWrapper
        placeholder={placeHolder}
        defaultValue={value}
        secureTextEntry={inputType === 'password' && !isShowPassword}
        onChangeText={e => onChangeTextHandler(e)}
        onFocus={() => setIsFocus(true)}
        hasSuffix={inputType === 'password'}
      />
      {inputType === 'password' && isFocus && value && (
        <Pressable onPress={() => setIsShowPassword(!isShowPassword)}>
          <Text>{isShowPassword ? 'Hide' : 'Show'}</Text>
        </Pressable>
      )}
    </TextInputBase>
  );
};

export default Input;