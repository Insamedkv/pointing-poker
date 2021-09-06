import React from 'react';

interface IModalBodyProps {
  content: string | React.FC;
}

const ModalBody: React.FC<IModalBodyProps> = ({ content }) => {
  return <>{content}</>;
};

export { ModalBody };
