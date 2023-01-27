const video = document.getElementById("demo-vid");
let playState = null;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      video.pause();
      playState = false;
    } else {
      video.play();
      playState = true;
    }
  });
}, {});

observer.observe(video);

const onVisibilityChange = () => {
  if (document.hidden || !playState) {
    video.pause();
  } else {
    video.play();
  }
};

document.addEventListener("visibilitychange", onVisibilityChange);