import styled from 'styled-components'

const StyledButton = styled.button`
    -moz-box-flex: 0;
    background-color: #cE5117;
    border: 1px solid #7b3723;
    border-image: none 100% 1 0 stretch;
    border-radius: 0 2px 2px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    flex: 0 1 auto;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2;
    margin: 0.5rem 1rem 0.5rem 1rem;
    padding: 1rem 2rem 0.8rem;
    position: relative;
    text-align: center;
    text-decoration: none currentcolor solid;
    text-decoration-thickness: auto;
    text-transform: uppercase;
    touch-action: manipulation;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    :hover {
      background-color: #d3371a;
      border-color: #7b3723;
      z-index: 2;
    }
  `;

export default StyledButton;
