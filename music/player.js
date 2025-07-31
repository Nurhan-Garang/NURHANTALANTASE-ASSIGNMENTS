if (window.location.pathname.includes('player.html')) {
  const audio = document.getElementById('audio');
  const songListEl = document.getElementById('song-list');
  const currentSongEl = document.getElementById('current-song');
  const seekSlider = document.getElementById('seekSlider');
  const userSpan = document.getElementById('user-name');

  let user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!user) window.location.href = 'index.html';
  else userSpan.textContent = user.username;

  const songs = [
    {
      title: "safe inside",
      url: "https://youtu.be/W4-jhNvFEyU"
    },
    {
      title: "Gone too long",
      url: "https://youtu.be/ZnFBO0wuOFQ"
    },
    {
      title: "love lies",
      url: "https://youtu.be/UCM_Eqnfup8"
    }
  ];

  let currentIndex = 0;
  let isLooping = false;

  
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.title;
    li.addEventListener('click', () => {
      currentIndex = index;
      playCurrentSong();
    });
    songListEl.appendChild(li);
  });

  function playCurrentSong() {
    const song = songs[currentIndex];
    audio.src = song.url;
    currentSongEl.textContent = song.title;
    audio.play();
    showNotification(song.title);
  }

  function playNext() {
    currentIndex = (currentIndex + 1) % songs.length;
    playCurrentSong();
  }

  function playPrevious() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playCurrentSong();
  }

  function togglePlay() {
    if (audio.paused) audio.play();
    else audio.pause();
  }

  function toggleLoop() {
    isLooping = !isLooping;
    alert("Loop is now " + (isLooping ? "ON" : "OFF"));
  }

  function shuffleSongs() {
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    currentIndex = 0;
    playCurrentSong();
  }

  audio.addEventListener('ended', () => {
    if (isLooping && currentIndex === songs.length - 1) {
      currentIndex = 0;
      playCurrentSong();
    } else if (currentIndex < songs.length - 1) {
      playNext();
    }
  });

  // Seek slider update
  audio.addEventListener('timeupdate', () => {
    seekSlider.value = (audio.currentTime / audio.duration) * 100 || 0;
  });

  seekSlider.addEventListener('input', () => {
    audio.currentTime = (seekSlider.value / 100) * audio.duration;
  });

n
  function showNotification(title) {
    if (Notification.permission === "granted") {
      new Notification("🎶 Now Playing", { body: title });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification("🎶 Now Playing", { body: title });
        }
      });
    }
  }

 
  playCurrentSong();
}
