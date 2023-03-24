type Variants = 'primary' | 'secondary';

export interface IButton {
  label?: string;
  disabled?: boolean;
  height?: string;
  width?: string;
  onPress: () => void;
  icon?: React.ReactNode;
  variant?: Variants;
  backgroundColor?: string;
  fullWidth?: boolean;
  textColor?: string;
}

export interface IButtonText {
  color?: string;
  variant?: Variants;
  title?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
}