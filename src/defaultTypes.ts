export interface IButton {
  buttonCaption: string;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  variant?: 'text' | 'outlined' | 'contained';
  className?: string;
  onClick?: React.MouseEventHandler;
}

export interface IAvataraInfo {
  firstName: string;
  lastName?: string;
  size: 'large' | 'medium';
  src?: string | ArrayBuffer;
}

export interface IIssue {
  issueID: string;
  issueName: string;
  issueLink: string;
  issuePriority: 'low' | 'medium' | 'hight';
  inProgress?: boolean;
}

export interface IInput {
  label: string;
  type?: 'text' | 'number' | 'file' | 'date';
  readOnly?: boolean;
  required?: boolean;
  value?: string;
}

export interface IUserInfo {
  firstName: string;
  lastName?: string;
  position?: string;
  imgPath?: string;
}

export interface ICardItemProps {
  name: string;
}
