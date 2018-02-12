import { h } from 'hyperapp'
import { Link } from '@hyperapp/router'
import SearchIcon from './SearchIcon'

export default _ => (
  <nav class="main-nav">
    <div className="main-nav__content">
      <a href="http://www.demolatar.se" class="main-nav__logo" target="_blank">
        <img src="/images/logo.gif" class="main-nav__logo-img" />
      </a>
      <Link to="/" class="main-nav__link">
        <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z" />
        </svg>
      </Link>
      <Link to="/search" class="main-nav__link">
        <SearchIcon />
      </Link>
      <Link to="/about" class="main-nav__link">
        <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z" />
        </svg>
      </Link>
    </div>
  </nav>
)
