import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:9005/api/",
    withCredentials: false,
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