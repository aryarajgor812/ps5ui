import styled, { keyframes } from "styled-components";
import bg from "../assets/console_UI/bg.png";

const Background = () => {
  return <BackgroundImage src={bg}></BackgroundImage>;
};

const FadeInAnimation = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const BackgroundImage = styled.img`
  width: 1920px;
  height: 1080px;
  position: absolute;
  animation-name: ${FadeInAnimation};
  animation-duration: 0.5s;
  animation-iteration-count: initial;
`;
export default Background;
