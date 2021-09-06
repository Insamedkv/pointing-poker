export interface IButton {
  buttonCaption: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  variant?: 'text' | 'outlined' | 'contained';
  className?: string;
  onClick?: React.MouseEventHandler;
}
