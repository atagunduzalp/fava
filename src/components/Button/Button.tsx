import React from 'react';
import {ButtonText, Wrapper} from './Button.styles';

import {IButton} from './Button.type';

const Button = ({
  label,
  disabled,
  height,
  width,
  onPress,
  variant,
  icon,
  backgroundColor,
  textColor,
  fullWidth = true,
}: IButton) => {
  return (
    <Wrapper
      onPress={onPress}
      disabled={disabled}
      width={width}
      variant={variant}
      icon={icon}
      label={label}
      fullWidth={fullWidth}
      height={height}
      backgroundColor={backgroundColor}>
      {label && (
        <ButtonText
          numberOfLines={1}
          adjustsFontSizeToFit
          icon={icon}
          disabled={disabled}
          fullWidth={fullWidth}
          variant={variant}
          color={textColor}>
          {label}
        </ButtonText>
      )}
    </Wrapper>
  );
};

export default Button;