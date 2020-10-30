function time() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const second = now.getSeconds();
    const el = document.getElementById('time');
    el.innerHTML = `${year}년도 ${month + 1}월 ${date}일 ${hours}시 ${minutes}:${second}`
}
$(document).ready(() => {
    setInterval(() => {
        time()
    }, 1000)
});
