import { h } from 'hyperapp'

export default ({ song, isPlaying, play, pause }) =>
  song ? (
    <div class={isPlaying ? 'player player--playing' : 'player'}>
      {console.log('isPlaying', isPlaying)}
      <button
        className="player__play-pause"
        onclick={() => (isPlaying ? pause() : play())}
      >
        {isPlaying ? (
          <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1664 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45zm-896 0v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45z" />
          </svg>
        ) : (
          <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1576 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z" />
          </svg>
        )}
      </button>
      <div class="player__content">
        <div class="player__artist">{song.band}</div>
        <div class="player__title">{song.track}</div>
        <audio
          src={song.tracklink}
          oncreate={el => (isPlaying ? el.play() : el.pause())}
          onupdate={el => (isPlaying ? el.play() : el.pause())}
        />
        <div class="player__progress">
          <div
            class="player__progress-bar"
            oncreate={el => {
              const audio = el.parentNode.previousElementSibling
              console.log('is this an audio?', audio)
              const intervalId = setInterval(() => {
                const duration = audio.duration
                const currentTime = audio.currentTime
                const percent = currentTime / duration * 100
                el.style.width = `${percent}%`
              }, 1000)
              el.setAttribute('data-id', intervalId)
            }}
            onremove={el => {
              const intervalId = el.getAttribute('data-id')
              clearInterval(Number(intervalId))
            }}
          />
        </div>
      </div>
    </div>
  ) : null
