<svelte:options tag="magic-emoji" />

<script>
  import EMOJI from './emoji.json'
  // reference: https://github.com/muan/unicode-emoji-json

  const findEmoji = (query) => {
    const result = Object.entries(EMOJI)
      .find(([emoji, emojiObj]) => emojiObj.description.includes(label.toLowerCase()))
    return result ? result[0] : '❓'
  }

  const fuzzyFind = (string, query, ratio = 0.8) => {
    const stringLower = string.toLowerCase()
    const queryLower = query.toLowerCase()

    let matches = 0
    if (stringLower.indexOf(queryLower) > -1) return true

    for (let i = 0; i < queryLower.length; i++) {
      stringLower.indexOf(queryLower[i]) > -1 ? matches += 1 : matches -=1
    }

    return (matches/stringLower.length >= ratio || query == "")
  }

  export let label = 'question'
  $: emoji = findEmoji(label)
</script>

<span
  role="img"
  aria-label={label}
>{emoji}</span>
