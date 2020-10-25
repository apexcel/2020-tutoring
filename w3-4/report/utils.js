const getTime = () => {
    let currentTime = new Date();
    let time = document.getElementById('time');
    let times = new Array(`${currentTime.getFullYear()}년`, `${currentTime.getMonth()}월`, `${currentTime.getDay()}일`, `${currentTime.getHours()}시`, `${currentTime.getMinutes()}분입니다`);
    time.innerHTML = `${times[0]} ${times[1]} ${times[2]} ${times[3]} ${times[4]}`
}

var selValue = 1;
const getSelect = (select) => {
    let selIndex = select.selectedIndex;
    selValue = select.options[selIndex].value;
}

const alertMsg = () => {
    let gender = document.getElementsByName('gender');
    let checker = document.getElementsByName('interest');
    let name = document.getElementById('nameInput');
    let email = document.getElementById('emailInput');
    var checkNum = 0;
    let checks = [];
    let checkGender;

    if (name.value == '' || name.value == null) {
        alert('이름을 입력해주세요.')
    }

    if (email.value == '' || email.value == null) {
        alert('이메일을 입력해주세요.')
    }

    if (!gender[0].checked && !gender[1].checked) {
        alert('성별을 선택해주세요.');
    }
    if (gender[0].checked) {
        checkGender = '남';
    }
    else {
        checkGender = '여'; 
    }

    for (let i = 0; i < checker.length; i++) {
        if (checker[i].checked) {
            checkNum++;
            checks.push(checker[i].value);
        }
    }
    if (checkNum == 0) {
        alert('최소한 하나의 관심 영역을 선택해주세요.')
    }
    if (checkNum > 0 && name.value != '' && email.value != '' && (gender[0].checked || gender[1].checked)) {
        confirm(` 이름: ${name.value}\n 이메일: ${email.value}\n 성별: ${checkGender}\n 학년: ${selValue}\n 관심 영역: ${checks}`);
    }
};

const mouseOverEvent = () => {
    let item = document.getElementById('js_pover')
    item.style.color = 'green';
}

const clickEvent = () => {
    let item = document.getElementById('js_p')
    item.style.color = 'red';
}

const clickEvent2 = () => {
    let item = document.getElementById('js_dbp')
    item.style.color = 'blue';
}

$(document).ready(() => {
    getTime();
})