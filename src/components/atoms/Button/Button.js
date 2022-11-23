import React from 'react';

import { ReactComponent as DeleteIcon } from '../../../assets/Icons/delete-icon.svg';
import { ReactComponent as DocumentIcon } from '../../../assets/Icons/document-icon.svg';
import { ReactComponent as MessageIcon } from '../../../assets/Icons/message-icon.svg';
import { StyledButton } from './Button.styles';

const Button = () => (
  <StyledButton>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
