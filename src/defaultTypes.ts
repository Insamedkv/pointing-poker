import React from 'react';

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
  issueName: string;
  issueLink: string;
  issuePriority: 'low' | 'medium' | 'high';
  issueStatus: 'opened' | 'closed' | 'progress';
  issueID?: string;
  isCurrent?: boolean;
}

export interface IInput {
  label?: string;
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
  id?: string | number;
}

export interface ICardItemProps {
  valueIndex?: string;
  name?: string;
  onSubmit?: (value: string) => void;
  onClick?: React.MouseEventHandler;
  handleClick?: (value: boolean) => void;
  className?: string;
  value?: string;
  invisBtn?: boolean;
  foo?: void;
}
