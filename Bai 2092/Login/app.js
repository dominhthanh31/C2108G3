const ThongBao = document.querySelector('.ThongBao')
var tkTag = document.getElementById('tk_id')
var mkTag = document.getElementById('mk_id')

function showThongBao() {
    if(tkTag.value != '' && mkTag.value != '') {
        ThongBao.classList.remove('hide')
    }
    return false
}

function hideThongBao() {
    ThongBao.classList.add('hide')
    tkTag.value = ''
    mkTag.value = ''
}