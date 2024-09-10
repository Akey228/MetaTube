function headerBorder() {
    document.querySelector('.header-input-open').style.border = "1px solid #1c62b9";
}
// function notificationSvgFill() {
//     document.querySelector('.header-svg svg').setAttribute('fill', 'currentColor')
// }

function notificationSvgFill() {
    document.querySelector('.header-account-notifications-btn .header-svg svg').classList.add('header-svg-filled');
  }