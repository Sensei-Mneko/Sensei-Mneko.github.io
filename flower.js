 	  var nekomax = 35
 	  var nekocolor = new Array("#AAAACC", "#DDDDFF", "#CCCCDD", "#F3F3F3", "#F0FFFF")
 	  var nekotype = new Array("Arial Black", "Arial Narrow", "Times", "Comic Sans MS")
 	  var nekoletter = "&#x1F338;"
 	  var sinkspeed = 1
 	  var nekomaxsize = 20
 	  var nekominsize =8
 	    var nekoingzone = 1

 	  // Do not edit below this line
 	  var neko = new Array()
 	  var marginbottom
 	  var marginright
 	  var timer
 	  var i_neko = 0
 	  var x_mv = new Array();
 	  var crds = new Array();
 	  var lftrght = new Array();
 	  var browserinfos = navigator.userAgent
 	  var ie5 = document.all && document.getElementById && !browserinfos.match(/Opera/)
 	  var ns6 = document.getElementById && !document.all
 	  var opera = browserinfos.match(/Opera/)
 	  var browserok = ie5 || ns6 || opera

 	  function randommaker(range) {
 	    rand = Math.floor(range * Math.random())
 	    return rand
 	  }

 	  function initneko() {
 	    if (ie5 || opera) {
 	      marginbottom = document.body.clientHeight
 	      marginright = document.body.clientWidth
 	    }
 	    else if (ns6) {
 	      marginbottom = window.innerHeight
 	      marginright = window.innerWidth
 	    }
 	    var nekosizerange = nekomaxsize - nekominsize
 	    for (i = 0; i <= nekomax; i++) {
 	      crds[i] = 0;
 	      lftrght[i] = Math.random() * 15;
 	      x_mv[i] = 0.03 + Math.random() / 10;
 	      neko[i] = document.getElementById("s" + i)
 	      neko[i].style.fontFamily = nekotype[randommaker(nekotype.length)]
 	      neko[i].size = randommaker(nekosizerange) + nekominsize
 	      neko[i].style.fontSize = neko[i].size
 	      neko[i].style.color = nekocolor[randommaker(nekocolor.length)]
 	      neko[i].sink = sinkspeed * neko[i].size / 5
 	      if (nekoingzone == 1) { neko[i].posx = randommaker(marginright - neko[i].size) }
 	      if (nekoingzone == 2) { neko[i].posx = randommaker(marginright / 2 - neko[i].size) }
 	      if (nekoingzone == 3) { neko[i].posx = randommaker(marginright / 2 - neko[i].size) + marginright / 4 }
 	      if (nekoingzone == 4) { neko[i].posx = randommaker(marginright / 2 - neko[i].size) + marginright / 2 }
 	      neko[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * neko[i].size)
 	      neko[i].style.left = neko[i].posx
 	      neko[i].style.top = neko[i].posy
 	    }
 	    moveneko()
 	  }

 	  function moveneko() {
 	    for (i = 0; i <= nekomax; i++) {
 	      crds[i] += x_mv[i];
 	      neko[i].posy += neko[i].sink
 	      neko[i].style.left = neko[i].posx + lftrght[i] * Math.sin(crds[i]);
 	      neko[i].style.top = neko[i].posy

 	      if (neko[i].posy >= marginbottom - 2 * neko[i].size || parseInt(neko[i].style.left) > (marginright - 3 * lftrght[i])) {
 	        if (nekoingzone == 1) { neko[i].posx = randommaker(marginright - neko[i].size) }
 	        if (nekoingzone == 2) { neko[i].posx = randommaker(marginright / 2 - neko[i].size) }
 	        if (nekoingzone == 3) { neko[i].posx = randommaker(marginright / 2 - neko[i].size) + marginright / 4 }
 	        if (nekoingzone == 4) { neko[i].posx = randommaker(marginright / 2 - neko[i].size) + marginright / 2 }
 	        neko[i].posy = 0
 	      }
 	    }
 	    var timer = setTimeout("moveneko()", 50)
 	  }

 	  for (i = 0; i <= nekomax; i++) {
 	    document.write("<span id='s" + i + "' style='position:absolute;top:-" + nekomaxsize + "'>" + nekoletter + "</span>")
 	  }
 	  if (browserok) {
 	    window.onload = initneko
 	  }
