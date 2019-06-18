import styled from 'styled-components';
import hotelImage from 'utils/hotel.jpg';

const Header = styled.header`
  background: url(${hotelImage}) no-repeat;
  position: relative;
  padding-top: 56.25%;
  background-size: cover;
  font-family: 'Sucrose Bold Two';
`;

const HeaderImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
`;

const HeaderHotelName = styled.h1`
  position: fixed;
  top: 2rem;
  right: 2rem;
  font-size: 12vw;
  color: #fff;
  line-height: 0.8;
  margin-top: 0;
  text-align: center;
`;

const HeaderHotelNameSecondary = styled.span`
  display: block;
  font-size: 4.75vw;
`;

export { Header, HeaderImage, HeaderHotelName, HeaderHotelNameSecondary };
