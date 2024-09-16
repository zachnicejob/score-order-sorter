import readline from 'node:readline';
import * as elems from '../constants/scoreOrders.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const scoreOptions = Object.values(elems);

const printOptions = () => {
    console.log('Available score orders:');
    scoreOptions.forEach((option, index) => {
      console.log(`${index + 1}. ${option[0]}`);
    });
  };

const getUserInput = async () => {
//   return new Promise((resolve, reject) => {
//     rl.question('Please enter a specific input: ', (answer) => {
//       resolve(answer);
//     });
//   });
    let userInput;
        userInput = rl.question('Please enter a score order from the above list: ', userInput => {
          console.log(`Score order selected: ${userInput}`);
          rl.close();

          return userInput;
        })
};

export const getUserScorePreference = async () => {
    printOptions();
  
    let userInput;
    userInput = await getUserInput();

    scorePreference = scoreOptions.filter(score => {
        score[0].toLowerCase() = userInput;
    });
    
    if (userInput in scoreOptions) {
      console.log('That doesn\'t match a score on the list. Please try again.');
      await getUserScorePreference();
    };

    return scorePreference;
};