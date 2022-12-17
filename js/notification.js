const mark = document.querySelector("header .mark")
const notiNum = document.querySelector("header .unread-num")
const unreadMsges = document.querySelectorAll(".unread-box")

const markAsRead = () => {
    unreadMsges.forEach((unreadMsg) => {
        unreadMsg.classList.toggle("active")
    })
}

mark.addEventListener("click", () => {
    if (notiNum.textContent == "3") {
        notiNum.textContent = "0"
    } else {
        notiNum.textContent = "3"
    }
    markAsRead()
})