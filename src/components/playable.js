import styled from "styled-components";
import { motion } from "framer-motion";
import overlay from "../assets/console_UI/overflow_button.png";
import play_game from "../assets/console_UI/play_game.png";

const Playable = (props) => {
  const handleLaunchGame = () => {
    const game = props.AppArray[props.currentApp];
    if (game.isGame && game.path) {
      console.log(`Launching game at path: ${game.path}`);
      // This is a placeholder for the actual game launching logic.
      // In a real application, this would use a custom protocol handler
      // or a local server to launch the game.
      // window.location.href = `game-launcher://${game.path}`;
    }
  };

  const currentGame = props.AppArray[props.currentApp];

  return (
    <PlayableDiv
      key={props.currentApp}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo src={currentGame.gameLogo} />
      <Subtext>{currentGame.subText}</Subtext>
      {currentGame.isGame && (
        <Buttons>
          <PlaygameButton src={play_game} onClick={handleLaunchGame}></PlaygameButton>
          <OverflowButton src={overlay}></OverflowButton>
        </Buttons>
      )}
    </PlayableDiv>
  );
};

const PlayableDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  z-index: 0;
  width: 1700px;
  align-items: flex-start;
  justify-content: flex-end;
  height: 550px;
`;

const Logo = styled.img`
  height: 235px;
  width: auto;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const PlaygameButton = styled.img`
  height: 75px;
  width: auto;
`;

const OverflowButton = styled.img`
  height: 75px;
  width: auto;
`;

const Subtext = styled.p`
  max-width: 775px;
  font-size: 30px;
  color: #8f8f90;
  margin-top: 45px;
  margin-bottom: 60px;
`;

export default Playable;
