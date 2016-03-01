write = document.getElementById('a');
if (Modernizr.canvas) {
  console.log("esta canvas")
  write.innerHTML = "hay canvas";
} else {
  console.log("no esta canvas");
  write.innerHTML = "no hay canvas";
}

write = document.getElementById('b');
if (Modernizr.video) {
  console.log("esta video")
  write.innerHTML = "hay video";
} else {
  console.log("no esta video");
  write.innerHTML = "no hay video";
}

write = document.getElementById('c');
if (Modernizr.video.ogg ) {
  console.log("esta video.ogg")
  write.innerHTML = "hay video.ogg";
} else {
  console.log("no esta video.ogg");
  write.innerHTML = "no hay video.ogg";
}

write = document.getElementById('d');
if (Modernizr.applicationcache ) {
  console.log("esta applicationcache")
  write.innerHTML = "hay applicationcache";
} else {
  console.log("no esta applicationcache");
  write.innerHTML = "no hay applicationcache";
}
