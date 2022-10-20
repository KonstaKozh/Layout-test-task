
const cardTimes = document.querySelectorAll('.card__times')

cardTimes.forEach(function (item, i) {
    const numberTimes = item.querySelectorAll('.card__time').length
    const cardTime = item.querySelectorAll('.card__time')
    if (numberTimes > 4) {
        cardTime[2].insertAdjacentHTML('afterend','<button class="card__time" onclick="showTime()">ещё...</button>')
        // console.log('cardTime[2]',cardTime[2])
        cardTime.forEach(function (time, n){
            // console.log(time)
            if (n > 2) {
                time.classList.add('hidden__time')
            }
        })
    }
})
function showTime() {
    const hiddenTime = document.querySelectorAll('.hidden__time')
    console.log(hiddenTime)

    // if (hiddenTime.length === 0) {
    //     hiddenTime.forEach(function (item,i) {
    //         item.className = 'hidden__time'
    //     })
    // } else {
    //     hiddenTime.forEach(function (item, i) {
    //         item.className = 'card__time'
    //     })
    // }
}
