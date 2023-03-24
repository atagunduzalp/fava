type InputTypes = 'text' | 'password' | 'mail';

export interface IInput {
  placeHolder?: string;
  value: string;
  onChange: ((value: string) => void) | null;
  inputType: InputTypes;
}