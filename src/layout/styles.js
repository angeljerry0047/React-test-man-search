import styled from 'styled-components';
import theme from '../theme';

export const ExternalAddress = styled.a`
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: block;
  text-align: center;
  margin-right: 20px;
  color: ${theme.colorFooter} !important;
  
  &:hover {
    color: ${theme.colorFooter} !important;
  }
`