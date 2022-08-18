import styled from 'styled-components';
import constants from '../constants';

const StyledButton = styled.button`
  -moz-box-flex: 0;
  background-color: ${constants.COLOR_PRIMARY};
  border: 1px solid ${constants.COLOR_SECONDARY};
  border-image: none 100% 1 0 stretch;
  border-radius: 0 2px 2px 0;
  box-sizing: border-box;
  color: ${constants.COLOR_WHITE};
  cursor: pointer;
  display: inline-block;
  flex: 0 1 auto;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2;
  margin: 1.5rem 1rem 0 1rem;
  padding: 1rem 2rem 0.8rem;
  position: relative;
  text-align: center;
  text-decoration: none currentcolor solid;
  text-decoration-thickness: auto;
  text-transform: uppercase;
  touch-action: manipulation;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  :hover {
    background-color: ${constants.COLOR_PRIMARY_LIGHT};
    border-color: ${constants.COLOR_SECONDARY_LIGHT};
    z-index: 2;
  }
`;

export default StyledButton;
