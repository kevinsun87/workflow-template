import Welcome from './src/main'


Welcome.install = (Vue) => {
    Vue.component(Welcome.name, Welcome)
}


export default Welcome