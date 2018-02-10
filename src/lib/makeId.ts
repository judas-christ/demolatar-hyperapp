export default function makeId(text: string) {
  return text.replace(/[^a-zA-Z]/g, '-')
}
