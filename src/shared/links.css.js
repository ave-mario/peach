import styled from 'styled-components';

const ResendCodeLink = styled.a`
  font-size: 14px;
  color: #113d84;
  display: inline-block;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &:after {
    background-color: #113d84;
    display: block;
    content: '';
    height: 2px;
    width: 0%;
    left: 50%;
    position: absolute;
    transition: width 0.3s ease-in-out;
    transform: translateX(-50%);
  }
  &:hover:after,
  :focus:after {
    width: 100%;
  }
`;

export default ResendCodeLink;
