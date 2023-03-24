import styled, {css} from 'styled-components/native';

export const TextInputBase = styled.View<{
  isFocus: boolean;
  isError: boolean;
  hasSuffix: boolean;
}>`
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.isFocus ? 'red' : '#6096b4')};
  padding: 8px;
  ${props =>
    props.isError &&
    css`
      border-bottom-color: #de4140;
    `}
  ${props =>
    props.hasSuffix &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `}
`;
export const InputWrapper = styled.TextInput<{hasSuffix: boolean}>`
  ${props =>
    props.hasSuffix &&
    css`
      flex: 1;
    `}}
`;