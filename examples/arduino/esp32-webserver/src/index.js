import logo from './logo.svg'

document.querySelector(`#root`).innerHTML = `
  <div class="app">
    <div class="header">
      <img src=${logo} class="logo" alt="logo" />
      Hello from <code>bud-embedded</code> on Arduino
    </div>
  </div>
`

/**
 * Hot reload (can be removed by React and Vue users)
 */
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept(console.error)
}
