var accList = []

var fullnameTag = document.getElementById('fullname_id')
var ageTag = document.getElementById('age_id')
var emailTag = document.getElementById('email_id')

function saveLocalStorage(){
    var json = JSON.stringify(accList)
    localStorage.setItem('accList', json)
}

function openLocalStorage(){
    var json = localStorage.getItem('accList')
    if(json != null && json != ''){
        accList = JSON.parse(json)
    }
}

function addAcc(){
    var acc = {
        "name" : fullnameTag.value,
        "age" : ageTag.value,
        "email" : emailTag.value
    }
    var t = 0
    openLocalStorage()
    for (i = 0; i < accList.length; i++){
        if(accList[i].email == acc.email){
            accList[i].name = acc.name
            accList[i].age = acc.age
            t = 1
        }
    }
    if (t == 0){
        accList.push(acc)
    }

    saveLocalStorage()

    return false
}