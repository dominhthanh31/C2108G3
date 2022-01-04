var accList = []

var result = document.getElementById('result')

function openLocalStorage(){
    var json = localStorage.getItem('accList')
    if (json != null && json != ''){
        accList = JSON.parse(json)
    }
}

openLocalStorage()
console.log(accList)

for(i = 0; i < accList.length; i++){
    result.innerHTML += `<tr>
        <td>${i+1}</td>
        <td>${accList[i].name}</td>
        <td>${accList[i].age}</td>
        <td>${accList[i].email}</td>
    </tr>`
}