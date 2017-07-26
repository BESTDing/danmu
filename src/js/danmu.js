(function () {

  function getRandomColor() {
    return '#' + (function(h) {
          return new Array(7 - h.length).join("0") + h
        })((Math.random() * 0x1000000 << 0).toString(16));
  }

  function getRandomTop() {
    return Math.random() * 360;
  }

  (function addEvent() {
    var sendButton = document.querySelectorAll('.send-button')[0];
    sendButton.onclick = showDanmu;
    /**
     * 添加移除处理函数
     */
    var removeButton = document.querySelectorAll('.clear-button')[0];
    removeButton.onclick = removeDanmu;
  })();

  function showDanmu() {
    var inputEm = document.querySelectorAll('.send input[type="text"]')[0];
    var text = inputEm.value;
    inputEm.value = '';
    var showEm = document.createElement('div');
    showEm.innerHTML = text;
    showEm.style.color = getRandomColor();
    console.log(getRandomTop());
    showEm.style.top = getRandomTop() + 'px';
    var danmuEm = document.querySelectorAll('.danmu-wrapper')[0];
    var box = danmuEm.getBoundingClientRect();
    showEm.style.left = box.width + 'px';
    showEm.setAttribute('class', 'danmu-animaton');
    var danmuScreenEm = document.querySelectorAll('.danmu-screen')[0];
    /*
     * 添加动画
     */

    // console.log($('.danmu-animaton'));
    // $(showEm).animate({
    //   left: '-200px',
    //   visibility: 'inherit'
    // }, 1000)
    danmuScreenEm.appendChild(showEm);
  }

  function removeDanmu() {
    var danmusEm = document.querySelectorAll('.danmu-animaton');
    var parentEm = document.querySelectorAll('.danmu-screen')[0];
    for (var i = 0; i < danmusEm.length; i++) {
      parentEm.removeChild(danmusEm[i]);
    }
  }
})();