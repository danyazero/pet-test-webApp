import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:9005/api/",
    withCredentials: true,
})

export function getQuestionReq(type, curQuest){
    return instance.get(`test?type=${type}&id=${curQuest}`)
}

export function sendResultReq(answers, type, name, email){
    return instance.post('/test', {answers, type, name, email})
}

export function getTestsListReq(){
    return instance.get('/test')
}

export function getDataAboutTestReq(id){
    return instance.get(`/test?type=${id}`)
}

export function loginWithoutCredsReq(email, password, remember){
    return instance.post('/login', {email, password, remember}, {withCredentials: false})
}

export function loginWithCredsReq(){
    return instance.get('/login')
}
