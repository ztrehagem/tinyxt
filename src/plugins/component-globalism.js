import Vue from 'vue'

const context = require.context('../components', true, /\.vue$/)
context.keys().forEach((path) => {
  const component = context(path)
  const [, name] = path.match(/\/(\w*)\.vue$/) || []
  Vue.component(name, component.default)
})
