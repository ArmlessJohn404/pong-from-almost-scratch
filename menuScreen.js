/*
pong-almost-from-scratch
This is an attempt of making the game pong using modern programming languages

Copyright (C) 2016  Luiz Eduardo Amaral - <luizamaral306@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
"use strict";

// start screen
startScreen.init = function() {
  let cursorWidth = gridSize*20;
  let cursorHeight = gridSize*4;
  let cursorThickness = 5;
  let positions = [
    [(Game.width-cursorWidth-2*cursorThickness)/2, gridSize*23.5],
    [(Game.width-cursorWidth-2*cursorThickness)/2, gridSize*28.5],
    [(Game.width-cursorWidth-2*cursorThickness)/2, gridSize*33.5]
  ]
  startScreen.cursor = new Cursor(cursorWidth, cursorHeight, positions, cursorThickness)
}

startScreen.draw = function() {
  Game.context.clearRect(0, 0, Game.width, Game.height);
  let t1 = "PONG ALMOST";
  let t2 = "FROM SCRATCH";
  let o1 = "1P START";
  let o2 = "2P START";
  let o3 = "CREDITS";
  let b1 = "ENTER - GO                       ESC - GO BACK"
  let b2 = "PLAYER1 - W/S                PLAYER2 - UP/DOWN"
  let b3 = VERSION;
  let menuSize = 5;
  let hintSize = 3;
  writeText((Game.width-t1.length*4*gridSize)/2, gridSize*5, t1);
  writeText((Game.width-t2.length*4*gridSize)/2, gridSize*12, t2);
  writeText((Game.width-o1.length*4*menuSize)/2, gridSize*25, o1, menuSize);
  writeText((Game.width-o2.length*4*menuSize)/2, gridSize*30, o2, menuSize);
  writeText((Game.width-o3.length*4*menuSize)/2, gridSize*35, o3, menuSize);
  writeText((Game.width-b1.length*4*hintSize)/2, Game.height-hintSize*35, b1, hintSize);
  writeText((Game.width-b2.length*4*hintSize)/2, Game.height-hintSize*28, b2, hintSize);
  writeText((Game.width-b3.length*4*hintSize)/2, Game.height-hintSize*14, b3, hintSize);
  startScreen.cursor.draw();
}

startScreen.update = function() {
  startScreen.cursor.update()
  if (Key.isDown(13)) {
    Game.blip4();
    if (startScreen.cursor.current === 0) Game.changeState(enemyScreen);
    else if (startScreen.cursor.current === 1) Game.changeState(versusScreen);
    else if (startScreen.cursor.current === 2) Game.changeState(creditsScreen);
  }
}

// credits screen
creditsScreen.init = () => {
  Game.context.clearRect(0, 0, Game.width, Game.height);
  let t1 = "PONG ALMOST FROM SCRATCH"
  let m1 = "This is an attempt of making the game pong using modern";
  let m2 = "programming languages. The AI enemy is vicious!"
  let m3 = "You can find more information about the project in it's";
  let m4 = "github page:";
  let m5 = "https://github.com/ArmlessJohn404/pong-almost-from-scratch"
  let m6 = "Thanks to noisecollector, projectsu012 and n-audioman for"
  let m7 = "the sounds."
  let m8 = "Thanks to the playtesters Luciane, Marcelo and Ulisses."
  let m9 = ""
  let b1 = "Copyright (C) 2016  Luiz Eduardo Amaral"
  let b2 = "<luizamaral306(at)gmail.com>"
  let b3 = "This software is under a GNU GPL3 license. Have fun! :)"
  let creditsTitleSize = 5;
  let creditsSize = 3;
  writeText(50, gridSize*5, t1, creditsTitleSize);
  writeText(50, gridSize*5+creditsTitleSize*21, m1, creditsSize);
  writeText(50, gridSize*5+creditsTitleSize*21+creditsSize*7, m2, creditsSize);
  writeText(50, gridSize*5+creditsTitleSize*21+creditsSize*21, m3, creditsSize);
  writeText(50, gridSize*5+creditsTitleSize*21+creditsSize*28, m4, creditsSize);
  writeText(50, gridSize*5+creditsTitleSize*21+creditsSize*42, m5, creditsSize);
  writeText(50, gridSize*5+creditsTitleSize*21+creditsSize*56, m6, creditsSize);
  writeText(50, gridSize*5+creditsTitleSize*21+creditsSize*63, m7, creditsSize);
  writeText(50, gridSize*5+creditsTitleSize*21+creditsSize*77, m8, creditsSize);
  writeText(50, gridSize*5+creditsTitleSize*21+creditsSize*84, m9, creditsSize);
  writeText(50, Game.height-(gridSize*5+creditsSize*21), b1, creditsSize);
  writeText(50, Game.height-(gridSize*5+creditsSize*14), b2, creditsSize);
  writeText(50, Game.height-(gridSize*5+creditsSize*7), b3, creditsSize);
}

creditsScreen.update = () => {if (Key.isDown(27)) {
  Game.blip4();
  Game.changeState(startScreen);
}}
creditsScreen.draw = () => {}
