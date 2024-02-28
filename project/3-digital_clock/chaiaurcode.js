const clock = document.getElementById('clock')

setInterval(function(){ // it is used to run a function at a fix interval
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)