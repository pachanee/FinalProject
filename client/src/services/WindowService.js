import Api from '@/services/Api'
export default {
    index(search) {
        return Api().get('windows')
    },
    show(windowId) {
        return Api().get('window/' + windowId)
    },
    post(window) {
        return Api().post('window', window)
    },
    put(window) {
        return Api().put('window/' + window.id, window)
    },
    delete(window) {
        return Api().delete('window/' + window.id, window)
    },
}