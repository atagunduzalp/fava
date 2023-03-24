import {IButton, IButtonText} from './Button.type';

import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity<IButton>`
  height: ${props => props.height ?? '48px'};
  background-color: ${props => props.backgroundColor};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<IButtonText>`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  color: ${props => props.color};
  text-align: center;
`;