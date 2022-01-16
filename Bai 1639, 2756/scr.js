var studentList = []
var currentIndex = -1

$(function() {
	init()
})

function init() {
	var json = localStorage.getItem('studentList')
	if(json != '' && json != null) {
		studentList = JSON.parse(json)

		showData()
	}
}

function saveData() {
	var std = {
		"username": $('#username_id').val(),
		"fullname": $('#fullname_id').val(),
		"email": $('#email_id').val(),
		"birthday": $('#birthday_id').val()
	}

	if(currentIndex >= 0) {
		studentList[currentIndex] = std
		currentIndex = -1
	} else {
		studentList.push(std)
	}

	saveLocalStorage()
	showData()

	return false;
}

function selectedItem(index) {
	currentIndex = index

	$('#username_id').val(studentList[index].username)
	$('#fullname_id').val(studentList[index].fullname)
	$('#email_id').val(studentList[index].email)
	$('#birthday_id').val(studentList[index].birthday)
}

function removeItem(index) {
	option = confirm('Are you sure to remove this item?')
	if(!option) return

	studentList.splice(index, 1)

	saveLocalStorage()
	showData()
}

function showData() {
	$('#result').empty()

	for (var i = 0; i < studentList.length; i++) {
		$('#result').append(`<tr>
			<td>${i+1}</td>
			<td>${studentList[i].username}</td>
			<td>${studentList[i].fullname}</td>
			<td>${studentList[i].email}</td>
			<td>${studentList[i].birthday}</td>
			<td><button class="btn-warning" onclick="selectedItem(${i})">Edit</button></td>
			<td><button class="btn-danger" onclick="removeItem(${i})">Remove</button></td>
		</tr>`)
	}
}

function saveLocalStorage() {
	var json = JSON.stringify(studentList)

	localStorage.setItem('studentList', json)
}