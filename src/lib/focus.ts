export default function(document: Document) {
  document.body.addEventListener('click', () => (document.body.className = ''))
  document.addEventListener(
    'keydown',
    e => (e.keyCode === 9 ? (document.body.className = 'focus-on') : undefined)
  )
}
