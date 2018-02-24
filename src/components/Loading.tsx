import { h } from 'hyperapp'

export default () => (
  <div class="loading">
    <svg
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="loading__icon"
    >
      <circle cx="128" cy="256" r="48" />
      <circle cx="256" cy="256" r="48" />
      <circle cx="384" cy="256" r="48" />
    </svg>
  </div>
)
