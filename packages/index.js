import Welcome from './Welcome'

const install = (Vue, opts = {}) => {
    Vue.use(Welcome)

    let options = {

    }
    

    Vue.prototype.$gloabCustomOptions = options

}

export {
    Welcome
}

export default {
    install
}