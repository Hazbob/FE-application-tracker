export function statusColourSetter(status:string){
    if(status === "APPLIED"){
        return 'bg-blue-300'
    }

    if(status === "INTERVIEW_SCHEDULED"){
        return 'bg-orange-400'
    }
    if(status === "INTERVIEW_COMPLETED"){
        return 'bg-blue-700'
    }
    if(status === "SKILL_ASSESSMENT"){
        return 'bg-purple-700'
    }
    if(status === "OFFER_ACCEPTED"){
        return 'bg-green-700'
    }
    if(status === "OFFER_DECLINED"){
        return 'bg-red-600'

    }

}