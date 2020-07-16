# `<magic-emoji>`

> Experimental web component for displaying accessible Emoji

## Usage

Use `<magic-emoji>` by passing a `text` property to the component. This will
output an Emoji that best matches the text and provide a helpful `aria-label`
with a human-readable description for screen readers and other assistive technologies.

Alternatively, `<magic-emoji>` also accepts an `icon` prop that lets you specify
the Emoji being displayed. In that case, the component will simply add a description.

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module" src="https://unpkg.com/magic-emoji@latest"></script>
  </head>
  <body>
    <magic-emoji text="bug"></magic-emoji>
  </body>
</html>
```

### Properties

`<magic-emoji>` requires **one of** either `text` or `icon` to be passed as a prop.

| Name   | Type           | Example         |
| ------ | -------------- | --------------- |
| `text` | String         | `text="rocket"` |
| `icon` | String (emoji) | `icon="🚀"`     |

## Contributing

This project is open to and encourages contributions! Feel free to discuss any
bug fixes/features in the [issues](https://github.com/shwilliam/magic-emoji/issues).
If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/magic-emoji)
2. Create a branch (`git checkout -b new-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/magic-emoji/pull/new/master)
