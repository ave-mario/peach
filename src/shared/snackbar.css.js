import styled, { css } from 'styled-components';
import errorIcon from 'utils/error_icon.png';

const SnackBar = styled.div`
  visibility: hidden;
  max-width: 50px;
  height: 50px;
  margin: auto;
  background-color: #d31010;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 30px;
  font-size: 17px;
  white-space: nowrap;
  ${props =>
    props.show === true &&
    css`
      visibility: visible;
      animation: fadein 0.5s, expand 0.5s 0.5s, stay 3s 1s, shrink 0.5s 4s,
        fadeout 0.5s 4.5s;

      @keyframes fadein {
        from {
          bottom: 0;
          opacity: 0;
        }
        to {
          bottom: 30px;
          opacity: 1;
        }
      }

      @keyframes expand {
        from {
          min-width: 50px;
        }
        to {
          min-width: 350px;
        }
      }

      @keyframes stay {
        from {
          min-width: 350px;
        }
        to {
          min-width: 350px;
        }
      }

      @keyframes shrink {
        from {
          min-width: 350px;
        }
        to {
          min-width: 50px;
        }
      }

      @keyframes fadeout {
        from {
          bottom: 30px;
          opacity: 1;
        }
        to {
          bottom: 60px;
          opacity: 0;
        }
      }
    `}
`;
const SnackBarImage = styled.div`
  width: 50px;
  height: 50px;
  float: left;
  background-image: url(${errorIcon});
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
  background-color: #ba101e;
  color: #fff;
`;

const SnackBarDescription = styled.div`
  color: #fff;
  padding: 16px;
  overflow: hidden;
  white-space: nowrap;
`;

export { SnackBar, SnackBarDescription, SnackBarImage };
