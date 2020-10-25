var song = new Audio;
var muted = false;
var vol = 1;
song.type = 'audio/mpeg';
song.src = './media/KYLE - Playinwitme (feat. Kehlani).mp3'

const skip = (time) => {
    if (time == 'back') {
        song.currentTime = (song.currentTime - 5);
    }
    else if (time == 'fwd') {
        song.currentTime = (song.currentTime + 5);
    }
}

const playPause = () => {
    if (!song.paused) {
        song.pause();
        document.getElementById('play-pause').innerHTML = '<i class="fas fa-play"></i></button>';
    }
    else {
        song.play();
        document.getElementById('play-pause').innerHTML = '<i class="fas fa-pause"></i></button>';
    }
}

const stop = () => {
    song.pause();
    song.currentTime = 0;
    document.getElementById('seek').value = 0;
}

const setPos = (pos) => {
    song.currentTime = pos;
}

const mute = () => {
    if (muted) {
        song.volume = vol;
        muted = false;
        document.getElementById('mute').innerHTML = '<i class="fas fa-volume-up"></i></button>';
    }
    else {
        song.volume = 0;
        muted = true;
        document.getElementById('mute').innerHTML = '<i class="fas fa-volume-off"></i></button>';
    }
}

const setVolume = (volume) => {
    song.volume = volume;
    vol = volume;
}

song.addEventListener('timeupdate', () => {
    curtime = parseInt(song.currentTime, 10);
    document.getElementById('seek').max = song.duration;
    document.getElementById('seek').value = curtime;
})