// ==UserScript==
// @name          LPIS Registration Tool
// @homepageURL   https://www.timschreiber.net/
// @version       1.0.0
// @description   This tool is designed to help students of WU Vienna to register for courses and exams.
// @match         https://lpis.wu.ac.at/kdcs/*
// ==/UserScript==

console.log("The LPIS Registration Tool has noted that you are currently browsing the LPIS platform")

/**
 * Check if the user has selected the 'Individual Registration' tab
*/
const checkIndividualRegistration = ['Einzelanmeldung', 'Individual Registration'].includes(document.querySelector('.thd').innerHTML)

console.log(checkIndividualRegistration)


/**
 * Define the menu
 */
const menu = document.createElement('div')
menu.setAttribute('id', 'tool-menu')
const close_button = document.createElement('button')
close_button.innerHTML = '&#10060;'
close_button.setAttribute('id', 'tool-menu-close')
close_button.addEventListener('click', toggleMenu)
menu.appendChild(close_button)
const heading = document.createElement('h3')
heading.innerHTML = 'Registration Tool'
menu.appendChild(heading)


let menuState = false
function toggleMenu (){
  if(!menuState) document.body.appendChild(menu)
  if(menuState) document.body.removeChild(menu)
  menuState = !menuState
}


/**
 * Add a button on top of the page
 */
const button = document.createElement('button')
button.innerHTML = '<span style="margin: 0 4px 0 -4px;">&#9889;</span>  Registration Tool'
button.setAttribute('id', 'tool-button')
button.addEventListener('click', toggleMenu)
document.body.appendChild(button)


let head = document.getElementsByTagName('head')[0];
if (head) {
  let style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.textContent = `
    #tool-button{
      position: absolute;
      top: 1em;
      right: 1em;
      appearance: none;
      border: none;
      background-color: #006fd0;
      padding: .4em 1em;
      border-radius: 4px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition-duration: 0.2s;
      font-family: helvetica, sans-serif;
    }

    #tool-button:hover{
      background-color: #004784;
    }

    #tool-menu{
      position: absolute;
      top: .9em;
      right: .9em;
      min-width: 400px;
      min-height: 400px;
      background-color: white;
      border: 1px solid #dddddd;
      border-radius: 6px;
      padding: 10px;
    }

    #tool-menu-close{
      position: absolute;
      cursor: pointer;
      right: 10px;
      appearance: none;
      border: none;
      background-color: #ffffff;
    }

    #tool-menu > h3 {
      margin: 0
    }
  `;
  head.appendChild(style);
}

