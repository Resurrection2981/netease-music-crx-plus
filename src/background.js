import { init } from "./background/chrome";
import { bootstrap } from "./background/store";
import * as storeUtils from "./store";

init();
bootstrap();

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command "${command}" triggered`);
});

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case "togglePlaying":
      storeUtils.togglePlaying();
      break;
    case "playPrev":
      storeUtils.playPrev();
      break;
    case "playNext":
      storeUtils.playNext();
      break;
    default:
  }
});
