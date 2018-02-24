import { h } from 'hyperapp'
import PauseIcon from './PauseIcon'
import PlayIcon from './PlayIcon'

export default ({ song, isPlaying, play, pause }) =>
  song ? (
    <div class={isPlaying ? 'player player--playing' : 'player'}>
      {console.log('isPlaying', isPlaying)}
      <button
        className="player__play-pause"
        onclick={() => (isPlaying ? pause() : play())}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
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
