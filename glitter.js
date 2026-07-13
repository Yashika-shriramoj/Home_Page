/* =====================================================
   HERO BACKGROUND VIDEO
   Replaces the canvas placeholder (#glitterCanvas) with a
   looping, muted, autoplaying <video> using the same
   positioning/sizing CSS rules (.glitter-canvas), so no
   HTML or CSS edits are needed elsewhere.
   ===================================================== */
(function(){
  const canvas = document.getElementById("glitterCanvas");
  if(!canvas) return;

  const VIDEO_SRC = "web-bg-animation.mp4"; // place this file alongside index.html

  const video = document.createElement("video");
  video.id = "glitterCanvas"; // keep the id in case other code/CSS targets it
  video.className = canvas.className; // reuse .glitter-canvas positioning/sizing rules
  video.src = VIDEO_SRC;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute("aria-hidden", "true");
  video.style.objectFit = "cover";

  canvas.replaceWith(video);

  // Autoplay can still be blocked in some browsers even when muted;
  // this retries once the video's data is ready.
  video.addEventListener("loadeddata", () => {
    video.play().catch(() => { /* ignore — video will just sit on first frame */ });
  });

  // Pause the video when the hero scrolls out of view (saves CPU/battery),
  // resume when it's back — the CSS reduced-motion rule on .glitter-canvas
  // (display:none) already handles prefers-reduced-motion users.
  if("IntersectionObserver" in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.01 });
    io.observe(video);
  }
})();
