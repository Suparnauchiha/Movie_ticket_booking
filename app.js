let url=window.location.href;
// console.log(url)

let url_segment = url.split('?');
// console.log(url_segment[1]);

//activing play button for playing vdo
let play_btn = document.getElementById('play');
let video = document.getElementById('video');

//conditions for playing the video
play_btn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.style.display = 'unset';// for displaying the video
        play_btn.classList.remove('bi-play-fill');
        play_btn.classList.add('bi-pause');//when video will play ,pause button will be shown
    } else {
        video.pause();
        video.style.display = 'none';
        play_btn.classList.add('bi-play-fill');
        play_btn.classList.remove('bi-pause');
    }
})
//if video is completed,then again play
video.addEventListener('ended', () => {
    video.play();
})
