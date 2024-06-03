const music = new Audio('audio/1.mp3');
//music.play();

const songs = [
    {
        id:"1",
        songName: `Black Mamba<br>
        <div class="subtitle">Aespa</div>`,
        poster:"img/1.jpg"
    },
    {
        id:"2",
        songName: `Daechwita<br>
        <div class="subtitle">Agust D</div>`,
        poster:"img/2.jpg"
    },
    {
        id:"3",
        songName: `7 Rings<br>
        <div class="subtitle">Ariana Grande</div>`,
        poster:"img/3.jpg"
    },
    {
        id:"4",
        songName: `Stuck with U<br>
        <div class="subtitle">Ariana Grande, Justin Bieber</div>`,
        poster:"img/4.jpg"
    },
    {
        id:"5",
        songName: `Backbone<br>
        <div class="subtitle">Hardy Sandhu</div>`,
        poster:"img/5.jpg"
    },
    {
        id:"6",
        songName: `Candy<br>
        <div class="subtitle">Baekhyun</div>`,
        poster:"img/6.jpg"
    },
    {
        id:"7",
        songName: `Lovely<br>
        <div class="subtitle">Billie Eilish ft. Khalid</div>`,
        poster:"img/7.jpg"
    },
    {
        id:"8",
        songName: `How You Like That<br>
        <div class="subtitle">Blackpink</div>`,
        poster:"img/8.jpg"
    },
    {
        id:"9",
        songName: `Pretty Savage<br>
        <div class="subtitle">Blackpink</div>`,
        poster:"img/9.jpg"
    },
    {
        id:"10",
        songName: `Finesse<br>
        <div class="subtitle">Bruno Mars ft. Cardi B</div>`,
        poster:"img/10.jpg"
    },
    {
        id:"11",
        songName: `Met Him Last Night<br>
        <div class="subtitle">Demi Lovato ft. Ariama Grande</div>`,
        poster:"img/11.jpg"
    },
    {
        id:"12",
        songName: `Emo Emo<br>
        <div class="subtitle">Sid Sriram</div>`,
        poster:"img/12.jpg"
    },
    {
        id:"13",
        songName: `La Di Da<br>
        <div class="subtitle">Everglow</div>`,
        poster:"img/13.jpg"
    },
    {
        id:"14",
        songName: `Bon Bon Chocolot<br>
        <div class="subtitle">Everglow</div>`,
        poster:"img/14.jpg"
    },
    {
        id:"15",
        songName: `The Eve<br>
        <div class="subtitle">Exo</div>`,
        poster:"img/15.jpg"
    },
    {
        id:"16",
        songName: `Shoot<br>
        <div class="subtitle">Itzy</div>`,
        poster:"img/16.jpg"
    },
    {
        id:"17",
        songName: `Think About Us<br>
        <div class="subtitle">Little Mix</div>`,
        poster:"img/17.jpg"
    },
    {
        id:"18",
        songName: `Butter<br>
        <div class="subtitle">BTS</div>`,
        poster:"img/18.jpg"
    },
    {
        id:"19",
        songName: `Tusa<br>
        <div class="subtitle">Karol G ft. Nicki Minaj</div>`,
        poster:"img/19.jpg"
    },
    {
        id:"20",
        songName: `Home<br>
        <div class="subtitle">BTS</div>`,
        poster:"img/20.jpg"
    }
];

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
};

const makeAllBg = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    });
};


let index = 0;
let poster_master_player = document.getElementById('poster_master_player');
let title = document.getElementById('title');
let download_music = document.getElementById('download_music');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_player.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `audio/${index}.mp3`;

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach((elss) => {
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute("download", songName);
        });

        makeAllBg();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105, .1)';
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_cur = music.currentTime;
    let music_dur = music.duration;
    //console.log(music_dur);

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_cur / 60);
    let sec2 = Math.floor(music_cur % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_cur / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100; 
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100; 
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index = index-1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_player.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');


    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach((elss) => {
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBg();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105, .1)';
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});


next.addEventListener('click', () => {
    index = index+1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
        music.src = `audio/${index}.mp3`;
        poster_master_player.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');


        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach((elss) => {
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBg();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105, .1)';
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_songs')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});