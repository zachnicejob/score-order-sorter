# score-order-sorter
Sorts ensemble sheet music PDFs in score order

This application is run manually from your IDE. The user must enter the directory path containing PDFs in env/config and select the score order type by updating the appropriate function params in app.js.

## Current features:
- Scans folder and sorts files in score order by appending an number to the front of each filename
- Checks if folder has already been sorted and, if so, removes the initial prefix to prevent duplication
- Sorts instruments with multiple parts, such as Flute 1 and Flute 2

## Future features:
 - Accept score-order type selection from console input
 - Automatically opens files in Adobe acrobat to be printed
 - Automatically prints files after sorting is run

---

### :hammer_and_wrench: Languages and Tools :

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
</div>
---

<h3> 
    <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30"/>
    Reach Out! 
</h3>

<div id="badges">
  <a href="https://www.linkedin.com/in/zachary-nicely/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <img src="https://img.shields.io/github/last-commit/zachnicejob/score-order-sorter?style=for-the-badge" alt="Last Branch Commit"/>
</div>
