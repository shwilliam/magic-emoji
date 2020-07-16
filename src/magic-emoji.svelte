<svelte:options tag="magic-emoji" />

<script>
  import Fuse from 'fuse.js'
  import EMOJI from './emoji.json' // based on muan/unicode-emoji-json

  const emojiEntries = Object.entries(EMOJI)
  const findEmoji = (query) => {
    const fuse = new Fuse(Object.values(EMOJI), {
      includeScore: true,
      keys: ['name', 'description'],
    })

    const results = fuse.search(query)
    const topResult = results[0]

    return topResult ? topResult.refIndex : -1
  }

  export let text = 'question'
  $: emojiIdx = findEmoji(text)
  $: emoji = emojiEntries[emojiIdx][0]
  $: emojiDescription = emojiEntries[emojiIdx][1].description
</script>

<span
  role="img"
  aria-label={emojiDescription}
>{emoji}</span>
