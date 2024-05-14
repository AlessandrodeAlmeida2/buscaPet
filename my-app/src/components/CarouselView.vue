<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="tittle-carousel">
    <h1>Pets perdidos</h1>
  </div>
  <div id="drag-container">
  <div id="spin-container">
    <!-- Add your images (or video) here -->
    <img
        v-for="(item, index) in items"
        :key="index"
        :src="item.photo_url">
    <!-- Text at center of ground -->
    <p></p>
  </div>
  <div id="ground"></div>
</div>
</template>

<script setup>
    import { ref, onMounted, provide, watch } from 'vue'
    import { supabase } from '../supabase'

    const items = ref([])
    const itemId = ref(null)
    const getId = ref(null)
    const categoria = ref('perdido')
  
    provide('itemId', itemId)
    provide('getId ', getId)
  
    async function getItems() {
    let query = supabase.from('tabela1').select();

      if (categoria.value !== 'todas') {
          query = query.eq('situation', categoria.value);
      }
  
      const { data } = await query;
      items.value = data;
    }

    watch(categoria, getItems);
  
    onMounted(async () => {
      await getItems()
      console.log(items.value);

          // Author: Hoang Tran (https://fb.com/99.hoangtran)

// Github verson (1 file .html): https://github.com/HoangTran0410/3DCarousel/blob/master/index.html

// Give me a coffee <3 https://github.com/HoangTran0410/HoangTran0410/blob/main/DONATE.md


// You can change global variables here:
var radius = 340; // how big of the radius
var autoRotate = true; // auto rotate or not
var rotateSpeed = -60; // unit: seconds/360 degrees
var imgWidth = 150; // width of images (unit: px)
var imgHeight = 190; // height of images (unit: px)


/*
     NOTE:
       + imgWidth, imgHeight will work for video
       + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
       + Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&playlist=1&song=1&background=28
       + Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
*/


// ===================== start =======================
// animation start after 1000 miliseconds
setTimeout(init, 1000);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aEle = [...aImg]; // combine 2 arrays

// Size of images
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  // Constrain the angle of camera (between 0 and 180)
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;

  // Apply the angle
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

// auto spin
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// setup events
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

document.onmousewheel = function(e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};
    })
    
  </script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  /* for touch screen */
  touch-action: none; 
}

body {
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #111;
  -webkit-perspective: 1000px;
          perspective: 1000px;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
}

#drag-container, #spin-container {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 500px;
  margin: auto;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transform: rotateX(-10deg);
          transform: rotateX(-10deg);
}

#drag-container img, #drag-container video {
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 00px;
  font-size: 50px;
  text-align: center;
  -webkit-box-shadow: 0 0 8px #fff;
          box-shadow: 0 0 8px #fff;
  -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
}

#drag-container img:hover, #drag-container video:hover {
  -webkit-box-shadow: 0 0 15px #fffd;
          box-shadow: 0 0 15px #fffd;
  -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0007);
}

#drag-container p {
  font-family: Serif;
  position: absolute;
  top: 100%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%) rotateX(90deg);
          transform: translate(-50%,-50%) rotateX(90deg);
  color: #fff;
}

#ground {
  width: 900px;
  height: 900px;
  position: absolute;
  top: 100%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%) rotateX(90deg);
          transform: translate(-50%,-50%) rotateX(90deg);
  background: -webkit-radial-gradient(center center, farthest-side , #9993, transparent);
}

@-webkit-keyframes spin {
  from{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  } to{
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}

@keyframes spin {
  from{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  } to{
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}
@-webkit-keyframes spinRevert {
  from{
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  } to{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  }
}
@keyframes spinRevert {
  from{
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  } to{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  }
}
</style>
  