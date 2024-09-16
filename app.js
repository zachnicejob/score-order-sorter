// import { getUserScorePreference } from "./utils/score-type-selector.js";
import * as scoreOrder from './constants/scoreOrders.js';
// import * as config from './constants/config.js';
// import openWithAcrobat from './utils/openFiles.js';
import sortScores from "./utils/scoreSorter.js";

// const scorePreference = await getUserScorePreference();
sortScores(scoreOrder.ORCHESTRA_SCORE_ORDER);
// openWithAcrobat(config.DIRECTORY_PATH);