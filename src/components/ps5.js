import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import Ps5Header from "../assets/console_UI/Header.png";
import { motion, AnimatePresence } from "framer-motion";
import PlayStationApps from "./playStationApps";
import Background from "./background";
import Playable from "./playable";
import AddGame from "./addGame";
import milesMoralesIcon from "../assets/apps/spiderManMilesMorales/icon.png";
import milesMoralesLogo from "../assets/apps/spiderManMilesMorales/logo.png";
import milesMoralesBG from "../assets/apps/spiderManMilesMorales/bg.png";
import ghostsOfTsushimaIcon from "../assets/apps/ghostOfTsushima/icon.png";
import ghostsOfTsushimaLogo from "../assets/apps/ghostOfTsushima/logo.png";
import ghostsOfTsushimaBG from "../assets/apps/ghostOfTsushima/bg.png";
import playStationStoreIcon from "../assets/console_UI/PSStore.png";
import playStationExploreIcon from "../assets/console_UI/PSExplore.png";
import NBA2k22Icon from "../assets/apps/nba2k21/icon.png";
import Destiny2Icon from "../assets/apps/destiny/icon.png";
import PSNowIcon from "../assets/console_UI/PSNow.png";
import PSLibraryIcon from "../assets/console_UI/library.png";
import PSPlusIcon from "../assets/console_UI/PSPlus.png";
import GoGIcon from "../assets/apps/GuardiansOfTheGalaxy/icon.png";
import VanguardIcon from "../assets/apps/CallOfDutyVanguard/icon.png";
import plusIcon from "../assets/console_UI/overflow_button.png";

const PlayStationUserInterface = () => {
  const [appArray, setAppArray] = useState([
    {
      nameGeneric: "Add Game",
      gameType: null,
      gameIcon: plusIcon,
      gameLogo: null,
      isGame: false,
      isSelected: false,
      isAddGame: true,
    },
    {
      nameGeneric: "PlayStation Store",
      gameType: null,
      gameIcon: playStationStoreIcon,
      gameLogo: null,
      gameBG: milesMoralesBG,
      isGame: false,
      isSelected: false,
    },
    {
      nameGeneric: "Explore",
      gameType: null,
      gameIcon: playStationExploreIcon,
      gameLogo: null,
      isGame: false,
      isSelected: false,
    },
    {
      nameGeneric: "Marvel's Spider-Man: Miles Morale",
      subText:
        "The worlds of Peter Parker and Spider-Man collide in an original action-packed story",
      gameType: "ps5",
      gameIcon: milesMoralesIcon,
      gameLogo: milesMoralesLogo,
      gameBG: milesMoralesBG,
      isGame: true,
      isSelected: true,
    },
    {
      nameGeneric: "Ghost's of Tsushima",
      gameType: "ps4",
      subText:
        "Venture beyond the battlefield to experience the ancient beauty of Tsushina",

      gameIcon: ghostsOfTsushimaIcon,
      gameLogo: ghostsOfTsushimaLogo,
      gameBG: ghostsOfTsushimaBG,
      isGame: true,
      isSelected: false,
    },
    {
      gameIcon: NBA2k22Icon,
      nameGeneric: "NBA2k22",
      gameType: "ps4",
      subText:
        "Play as the Los Angeles Clippers and take on the infamous Los Angeles Lakers",
      gameLogo: null,
      gameBG: null,
      isGame: true,
      isSelected: false,
    },
    {
      gameIcon: Destiny2Icon,
      nameGeneric: null,
      gameType: null,

      gameLogo: null,
      gameBG: null,
      isGame: true,
      isSelected: false,
    },
    {
      gameIcon: VanguardIcon,
      nameGeneric: null,
      gameType: null,

      gameLogo: null,
      gameBG: null,
      isGame: true,
      isSelected: false,
    },
    {
      gameIcon: PSPlusIcon,
      nameGeneric: null,
      gameType: null,

      gameLogo: null,
      gameBG: null,
      isGame: false,
      isSelected: false,
    },
    {
      gameIcon: PSNowIcon,
      nameGeneric: null,
      gameType: null,

      gameLogo: null,
      gameBG: null,
      isGame: false,
      isSelected: false,
    },
    {
      gameIcon: GoGIcon,
      nameGeneric: null,
      gameType: null,

      gameLogo: null,
      gameBG: null,
      isGame: true,
      isSelected: false,
    },
    {
      gameIcon: PSLibraryIcon,
      nameGeneric: null,
      gameType: null,

      gameLogo: null,
      gameBG: null,
      isGame: true,
      isSelected: false,
    },
  ]);
  const [currentApp, setCurrentApp] = useState(3);
  const [movement, setMovement] = useState(-260);
  const [showAddGame, setShowAddGame] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  const moveAppBar = useCallback((appMovement) => {
    const newIndex = currentApp + appMovement;
    if (newIndex >= 0 && newIndex < appArray.length) {
      const newAppArray = [...appArray];
      newAppArray[newIndex].isSelected = true;
      newAppArray[currentApp].isSelected = false;
      setAppArray(newAppArray);
      setCurrentApp(newIndex);
      setMovement(movement + 130 * -appMovement);
    }
  }, [appArray, currentApp, movement]);

  const handleAddGame = (newGame) => {
    const newApp = {
      nameGeneric: newGame.name,
      gameType: "PC",
      gameIcon: newGame.icon,
      gameLogo: null,
      gameBG: null,
      isGame: true,
      isSelected: false,
      path: newGame.path,
    };
    setAppArray([...appArray, newApp]);
    setShowAddGame(false);
  };

  const launchGame = useCallback(() => {
    const game = appArray[currentApp];
    if (game.isGame && game.path) {
      console.log(`Launching game at path: ${game.path}`);
      // window.location.href = `game-launcher://${game.path}`;
    }
  }, [appArray, currentApp]);

  const onKeyPressed = useCallback((e) => {
    if (e.key === "ArrowLeft") {
      moveAppBar(-1);
    } else if (e.key === "ArrowRight") {
      moveAppBar(1);
    } else if (e.key === "Enter") {
      if (appArray[currentApp].isAddGame) {
        setShowAddGame(true);
      } else {
        launchGame();
      }
    }
  }, [moveAppBar, appArray, currentApp, launchGame]);

  useEffect(() => {
    const gameLoop = () => {
      const gamepads = navigator.getGamepads();
      if (gamepads[0]) {
        const gp = gamepads[0];
        if (gp.buttons[14].pressed && !buttonPressed) {
          setButtonPressed(true);
          moveAppBar(-1);
        } else if (gp.buttons[15].pressed && !buttonPressed) {
          setButtonPressed(true);
          moveAppBar(1);
        } else if (gp.buttons[0].pressed && !buttonPressed) {
          setButtonPressed(true);
          if (appArray[currentApp].isAddGame) {
            setShowAddGame(true);
          } else {
            launchGame();
          }
        } else if (
          !gp.buttons[14].pressed &&
          !gp.buttons[15].pressed &&
          !gp.buttons[0].pressed
        ) {
          setButtonPressed(false);
        }
      }
    };
    const interval = setInterval(gameLoop, 100);
    return () => clearInterval(interval);
  }, [moveAppBar, appArray, currentApp, launchGame, buttonPressed]);

  return (
    <PlayStation5UI onKeyDown={onKeyPressed} tabIndex="0">
      <AnimatePresence>
        {showAddGame && (
          <AddGame
            onAdd={handleAddGame}
            onCancel={() => setShowAddGame(false)}
          />
        )}
      </AnimatePresence>
      <Background AppArray={appArray} currentApp={currentApp}></Background>
      <Header src={Ps5Header} />
      <AppSelection>
        <motion.div
          animate={{
            x: movement,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 0.25, type: "tween" }}
        >
          <PlayStationApps items={appArray} />
        </motion.div>
      </AppSelection>
      <Playable AppArray={appArray} currentApp={currentApp}></Playable>
    </PlayStation5UI>
  );
};

const PlayStation5UI = styled.div`
  min-width: 1920px;
  min-height: 1080px;
  max-width: 1920px;
  max-height: 1080px;
  background: black;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

const Header = styled.img`
  padding-top: 30px;
  width: 1800px;
  z-index: 1;
`;

const AppSelection = styled.div``;

export default PlayStationUserInterface;
