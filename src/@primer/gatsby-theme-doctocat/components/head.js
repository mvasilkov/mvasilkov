import theme from '@primer/components/lib-esm/theme'

export { default } from '@primer/gatsby-theme-doctocat/src/components/head'

/*
https://uigradients.com/#DayTripper
linear-gradient(to right, #ff5858, #f857a6)
average == mix(#ff5858, #f857a6) == #fc587f
*/

theme.colors.rei = {
    pink: '#fc587f',
}

theme.fonts.normal = `-apple-system, 'Segoe UI', 'DejaVu Sans', system-ui, sans-serif`
theme.fonts.mono = `'SF Mono', SFMono-Regular, ui-monospace, 'IBM Plex Mono', 'DejaVu Sans Mono', Menlo, Consolas, monospace`
