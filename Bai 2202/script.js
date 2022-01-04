var userList = []

var json = localStorage.getItem('userList')
if(json != null && json != '') {
	userList = JSON.parse(json)
}

function saveRegister() {
	var fullnameTag = document.getElementById('fullname_id')
	var ageTag = document.getElementById('age_id')
	var emailTag = document.getElementById('email_id')
	var pwdTag = document.getElementById('pwd_id')
	var confirmPwdTag = document.getElementById('confirm_pwd_id')

	if(pwdTag.value != confirmPwdTag.value) {
		alert('Password is not match, Plz check it again!!!')
		return false
	}

	var user = {
		'fullname': fullnameTag.value,
		'age': ageTag.value,
		'email': emailTag.value,
		'password': pwdTag.value
	}

	// console.log(user)
	var isFind = false
	for (var i = 0; i < userList.length; i++) {
		if(userList[i].email == user.email) {
			//Update nguoi dung -> trung dia chi email
			userList[i] = user
			isFind = true
			break
		}
	}
	if(!isFind) {
		//Them moi nguoi dung -> do ko tim thay email trung
		userList.push(user)
	}

	//update vao localStorage
	var json = JSON.stringify(userList)
	localStorage.setItem('userList', json)

	return false
}

function login() {
	var emailTag = document.getElementById('email_id')
	var pwdTag = document.getElementById('pwd_id')

	for(var user of userList) {
		if(user.email == emailTag.value && user.password == pwdTag.value) {
			//login thanh cong
			window.open('show.html', '_self')
			return false
		}
	}
	alert('Login failed!!!')

	return false
}

function showUserList() {
	var resultTag = document.getElementById('result')

	var index = 0
	for(var user of userList) {
		resultTag.innerHTML += `<tr>
				<td>${++index}</td>
				<td>${user.fullname}</td>
				<td>${user.age}</td>
				<td>${user.email}</td>
				<td>${user.password}</td>
			</tr>`
	}
}