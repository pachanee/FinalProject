import Api from '@/services/Api'
export default {
    index(search) {
        return Api().get('advices')
    },
    show(adviceId) {
        return Api().get('advice/' + adviceId)
    },
    post(advice) {
        return Api().post('advice', advice)
    },
    put(advice) {
        return Api().put('advice/' + advice.id, advice)
    },
    delete(advice) {
        return Api().delete('advice/' + advice.id, advice)
    },
}