const mark = document.querySelector("header .mark")
const notiNum = document.querySelector("header .unread-num")
const unreadMsges = document.querySelectorAll(".unread-box")

const markAsRead = () => {
    unreadMsges.forEach((unreadMsg) => {
        unreadMsg.classList.add("active")
    })
}

mark.addEventListener("click", () => {
    notiNum.innerHTML = "0"
    markAsRead()
})