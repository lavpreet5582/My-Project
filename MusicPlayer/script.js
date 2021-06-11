
let volumebtn = document.querySelector(".volume-btn");
let C = document.querySelector(".container");
let flag = false;
volumebtn.addEventListener("click", function () {
  let modal = document.createElement("div");
  modal.classList.add("volume-line");
  modal.innerHTML = `<i class="fa fa-volume-down"></i>
                            <input type="range" min="1" max="100"
                            value="99" class="volume_slider" onchange="setVolume()">
                            <i class="fa fa-volume-up"></i>`;
  if (!flag) {
    C.appendChild(modal);
    flag = true;
  } else {
    document.querySelector(".volume-line").remove();
    flag = false;
  }
});
let songs_list = [
  {
    name: "Dernière Danse ",
    artist: "Indila",
    image: "./Images/download.jpg",
    path: "./Songs/Indila - Dernière Danse (Clip Officiel).mp3",
    index: 0
  },
  {
    name: "Believer",
    artist: "Imagine Dragons",
    image: "./Images/Believer-English-2017-20170803185842-500x500.jpg",
    path: "./Songs/Imagine Dragons - Believer (320  kbps).mp3",
    index: 1
  },
  {
    name: "Brown Munde",
    artist: "AP Dhillon",
    image: "./Images/download (1)brown.jpg",
    path: "./Songs/Brown Munde_320(PaglaSongs).mp3",
    index: 2
  },
  {
    name: "Alone",
    artist: "Alan Walker",
    //image: "data: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",
    image: "./Images/1389_4.jpg",
    path: "./Songs/Alone 320Kbps(DJPubg.Com).mp3",
    index: 3
  },
  {
    name: "Faded",
    artist: "Alan Walker",
    image: "./Images/artworks-000228531849-tfw01d-t500x500.jpg",
    path: "./Songs/Faded_320(PaglaSongs).mp3",
    index: 4
  }, {
    name: "Old Skool",
    artist: "Sidhu Moose Wala",
    image: "./Images/download (1)oldskool.jpg",
    path: "./Songs/Old Skool - Sidhu Moose Wala.mp3",
    index: 5
  }, {
    name: "Same beef",
    artist: "Sidhu Moose Wala",
    image: "./Images/samebeef.jpg",
    path: "./Songs/Same Beef - Bohemia.mp3",
    index: 6
  }, {
    name: "Me And My GirlFriend",
    artist: "Sidhu Moose Wala",
    image: "./Images/download (1)sidhume.jpg",
    path: "./Songs/Me-And-My-Girlfriend-Sidhu-Moose-Wala.mp3",
    index: 7
  }, {
    name: "Runaway - By Aurora",
    artist: "Aurora",
    image: "./Images/download (1)aurora.jpg",
    path: "./Songs/Aurora-Runaway.mp3",
    index: 8
  }, {
    name: "Kalla Sohna nai",
    artist: "Akhil",
    image: "./Images/Kalla-Sohna-Nai-AKHIL-ft.-Sanjeeda-Sheikh-lyrics.jpg",
    path: "./Songs/Kalla Sohna Nai - Akhil.mp3",
    index: 9
  }
];


let songindex = 0;
let nflag = false;
let playbtn = document.querySelector(".play-btn");
let songs = new Audio(songs_list[songindex].path);
let updateTimer;

//PlayandPause buttons==

playbtn.addEventListener("click", function () {
  clearInterval(updateTimer);
  // resetValues();

  if (!nflag) {
    this.innerText = "pause_circle_filled";
    songs.play();
    nflag = true;
  } else {
    this.innerText = "play_circle_filled";
    songs.pause();
    nflag = false;
  }
  // let currtime = document.querySelector(".current-time");
  // currtime.innerText = parseFloat(songs.currentTime*(60/songs.duration)/30).toFixed(2);
  // let seek = document.querySelector(".seek_slider");
  // seek.value = songs.currentTime*(100/songs.duration);
  // let totaltime = document.querySelector(".total-duration");
  // totaltime.innerText = songs.duration;
  updateTimer = setInterval(seekbarUpdate, 1000);
  // seekbarUpdate();

});


//next and previous buttons==

let nextbtn = document.querySelector(".next-btn");
nextbtn.addEventListener("click", function () {
  let images1 = document.querySelector(".image");

  if (songindex < songs_list.length) {
    if (nflag) {
      songs.pause();
      songindex++;
      nextsong(songindex);
    } else {
      songindex++;
      nextsong(songindex);
      nflag = true;
    }
  } else {
    songindex = songindex % songs_list.length;
    songs.pause();
    nextsong(songindex);
  }
  let images = document.querySelector(".now");
  let songplaying = document.querySelector(".now-playing");
  songplaying.innerText = songs_list[songindex].name;
  images.src = songs_list[songindex].image;
  images1.src = songs_list[songindex].image;
  playbtn.innerText = "pause_circle_filled";

});
let prevbtn = document.querySelector(".prev-btn");
prevbtn.addEventListener("click", function () {
  let images1 = document.querySelector(".image");
  if (songindex > 0) {
    if (nflag) {
      songindex--;
      songs.pause();
      prevsong(songindex);
    } else {
      prevsong(songindex);
    }
  }
  let images = document.querySelector(".now");
  let songplaying = document.querySelector(".now-playing");
  songplaying.innerText = songs_list[songindex].name;
  images.src = songs_list[songindex].image;
  images1.src = songs_list[songindex].image;
  playbtn.innerText = "pause_circle_filled";

});

function prevsong(songindex) {
  clearInterval(updateTimer);
  songs = new Audio(songs_list[songindex].path);
  resetValues();
  // seekbarUpdate();


  backgroundChange();
  setTimeout(() => {
    songs.play();
  }, 1000);
  updateTimer = setInterval(updateTimer, 1000);

}

function nextsong(songindex) {
  clearInterval(updateTimer);
  songs = new Audio(songs_list[songindex].path);
  resetValues();
  backgroundChange();


  setTimeout(() => {
    songs.play();
  }, 1000);
  // seekbarUpdate();
  updateTimer = setInterval(seekbarUpdate, 1000);

}


function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  let seek_slider = document.querySelector(".seek_slider");
  seekto = songs.duration * (seek_slider.value / 100);

  // Set the current track position to the calculated seek position
  songs.currentTime = seekto;
}

function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  let volume1 = document.querySelector(".volume_slider");
  songs.volume = volume1.value / 100;
}
function backgroundChange() {
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
  let backcolor = "rgb" + "(" + red + ", " + green + ", " + blue + ")";
  let songscontainer = document.querySelector(".songs-container");
  songscontainer.style.background = backcolor;
}
function seekbarUpdate() {
  let seekPosi = 0;

  // Check if the current track duration is a legible number
  let seek_slider = document.querySelector(".seek_slider");
  if (!isNaN(songs.duration)) {
    seekPosi = songs.currentTime * (100 / songs.duration);
    seek_slider.value = seekPosi;

    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(songs.currentTime / 60);
    let currentSeconds = Math.floor(songs.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(songs.duration / 60);
    let durationSeconds = Math.floor(songs.duration - durationMinutes * 60);

    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    // Display the updated duration
    let currtime = document.querySelector(".current-time");
    let totalduration = document.querySelector(".total-duration");
    currtime.innerText = currentMinutes + ":" + currentSeconds;
    //   curr_time_o.textContent = currentMinutes + ":" + currentSeconds;
    totalduration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

function resetValues() {
  let currtime = document.querySelector(".current-time");
  let totalduration = document.querySelector(".total-duration");
  let seekslider = document.querySelector(".seek_slider");
  currtime.innerText = "00:00";
  totalduration.innerText = "00:00";
  seekslider.value = 0;
}

let songsname = document.querySelectorAll(".song");
for (let i = 0; i < songsname.length; i++) {
  songsname[i].addEventListener("click", listsongplay);

}
let pflag = false;
function listsongplay() {
  clearInterval(updateTimer);
  backgroundChange();
  if (nflag) {
    songs.pause();
  }
  resetValues();
  let song = this.getAttribute("id");
  song--;
  songs = new Audio(songs_list[song].path);
  if (!nflag) {
    songs.play();
    nflag = true;
  } else {
    songs.pause();
    setTimeout(() => {
      songs.play();
    }, 1000);
    nflag = true;
  }
  updateTimer = setInterval(seekbarUpdate, 1000);
  let images = document.querySelector(".now");
  let songplaying = document.querySelector(".now-playing");
  songplaying.innerText = songs_list[song].name;
  images.src = songs_list[song].image;
  let images1 = document.querySelector(".image");
  images1.src = songs_list[song].image;
  playbtn.innerText = "pause_circle_filled";
}