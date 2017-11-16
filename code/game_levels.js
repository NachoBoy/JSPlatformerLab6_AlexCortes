var GAME_LEVELS = [
  ["!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxx!!!!xxx!!!yyy!!!!!!!!!!!!",
   "                                            !                                   ",
   "            xxxxxx    yyy   xxxxxx      yyyy!                                   ",
   "                                            !                                   ",
   "                      ooo                   !                                   ",
   "                                            !                                   ",
   "              u                             !       u                           ",
   "                                            !                                   ",
   "                      ooo          o o      !                      u            ",
   "                                            !                    !  !           ",
   "                                            !                    !  !           ",
   "                                                                 !  !           ",
   "  x                                                              !  !           ",
   "  x                                         u                    !  !           ",
   "  x                                               yyy            !  !           ",
   "  x          yyyy                                                !  !           ",
   "  x  @       x  x                 !!!!!!!!!     !!!!!!     !!!!!!!  !!!!!!!!!!  ",
   "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxx     xxxxxx     xxxxxx!  !xxxxxxxxx  ",
   "                              x   x       x                x     !  !   xx xx   ",
   "                              x!!!x       x                x     !  !  x  x  x  ",
   "                              x!!!x       x     o o o      x     !  ! oox   x   ",
   "                              xxxxx       xxxxxxxxxxxxxyyyyx     !   oooox x    ",
   "                                                                 !  ooooo x     ",
   "                                                                 !xxxxxxxx      "],
  ["             xxxxxxxxxxxxxxxxxxxxyyyyxx!!x                        xxxxxxxxxxxxxxxxxxxxxxxxxx                      ",
   "              xx                     xx!!x                     xxxx                        x                      ",
   "               xx                    xx!!xxxxxxxxxxyyyyyyyyyyyxx                           x                      ",
   "                x    xxxxxxxxxxxx    xxx!!!!!!!!!!xx         xx                      x     x                      ",
   "                x    x          x      xxxxxxxxxx!!x         x                       x     x                      ",
   "                x    x          x               xx!x         x                       x     x                      ",
   "                                x                x!x         x                       xx   xx                      ",
   "                                x                xxx         x     xxoxx             xx   xx                      ",
   "                                  u                          xx   x  x  x  xx        xx   xx                      ",
   "                                                             uxx!  x   x  !xx        xx   xx                      ",
   "                                                               xxx !x!x! xxxxxxxxxxxxxxxoxxxxx                    ",
   "                                               x     x            xxxxyyy          x         x                    ",
   "                                               x     x                             x         x                    ",
   "                                               x   !!x               u             x =       x                    ",
   "                                               x o   x                             x       = x                    ",
   "                                               x     x                             x         x                    ",
   "                                               x     x      o  o     x   x         x         x                    ",
   "               x     x        xxx   xxx        x     x               x   x         x         x                    ",
   "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxx   xxx   x                    ",
   "             xx       xx        x o x          x     x               x   x   xv              x                    ",
   "     @       x    u    x        x   x          x     x               x   x   x               x                    ",
   "    xxx      x    o    x        x   x          x!!  ox               x o xxxxx   xxx         x                    ",
   "    x x      x    o    x       xx o xx         x     x               x o   o     x x         x                    ",
   "!!!!x x!!!!!!x    o    x!!!!!!xx     xx!!!!!!!!x     x!!!!!!!!!!     x u   o     x x         x                    ",
   "!!!!x x!!!!!!x    o    x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxxxxx   o   xx                    ",
   "!!!!x x!!!!!!x    o    x!!!!!x    o                  x!!!!!!xx !                    xx  u  xx                     ",
   "!!!!x x!!!!!!x         x!!!!!x                    u  x!!!!!xx  !                     xxxxxxx                      ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxxxx!!!!xx   !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
   "!!!!x x!!!!!!x!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
  ["                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                                                                                                             x",
   "                             xx xx                                                                           x",
   "                            x  x  x                                                                          x",
   "                             x!!!x                                                                           x",
   "                              x!x                                                                            x",
   "                               x                                                                             x",
   "        xxxx   x   x  x    x xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "        x  x   x   x  xx   x x          !!!!!!!!!!!!!!!!                                                    !x",
   "  xxx   xxxx   x   x  x x  x x                                                                              !x",
   "  x x   xxx    x   x  x  x x x o                          o                                                 !x",
   "  x     x  x   x   x  x   xx x                                                                              !x",
   "  x     x  x   xxxxx  x    x x                                                                              !x",
   "  x                          xxxxxxxxxyyyyyyyyyyyyyyyyyyyyxxxxxxxxxxxxxxxxxyyyyyyyyyyyyxxxxxxxx             !x",
   "  x =                                                                            o                          !x",
   "  x =                                                                                                       !x",
   "  x =                                                                            !                          !x",
   "  x =                                                                           !!!                         !x",
   "  x =                                                                          !!!!!                        !x",
   "  x =          @                          !!!!!!!!!!!!!!!!                    !!!!!!!                u      !x",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx      yyyyyxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   yyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              ",
   "                                                                                                              "],
  ["    xxx                       ",
   "    xux   x   x  xxx  x   x   ",
   "    x x    x x  x   x x   x   ",
   "    x x     x   x   x x   x   ",
   "    x x     x   x   x x   x   ",
   "    x x     x   x   x x   x   ",
   "    x@x     x    xxx  xxxxx   ",
   "    x x                       ",
   "    x x                       ",
   "    x x                       ",
   "    x x   x   x   x x x    x  ",
   "    x x   x   x   x x xx   x  ",
   "    x x   x   x   x x x x  x  ",
   "    x x    x x x x  x x  x x  ",
   "    x x     x   x   x x   xx  ",
   "    x x                       ",
   "    x x                       ",
   "    x x                       ",
   "    x x                       ",
   "    x x                       ",
   "    x x                       ",
   "    x x                       ",
   "    x x                       ",
   "    x x                       ",
   "    x x                       ",
   "    x x                       ",
   "    x x                       ",
   "    x x                       ",
   "    x x     xx xx             ",
   "    x x    x!!x!!x            ",
   "    x x     x!!!x             ",
   "    x x      x!x              ",
   "    xox       x               ",
   "    xxx                       "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
