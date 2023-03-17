import {buildLegacyTheme} from 'sanity'

export const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--my-orange': '#FFA500',
}

export const myTheme = buildLegacyTheme({
  '--black': props['--my-black'],
  '--white': props['--my-white'],
  '--brand-primary': props['--my-orange'],
})
