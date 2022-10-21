const cardTimes = document.querySelectorAll('.card__times')

cardTimes.forEach(function (item, i) {
    const numberTimes = item.querySelectorAll('.card__time').length
    const cardTime = item.querySelectorAll('.card__time')
    if (numberTimes > 4) {
        cardTime[2].insertAdjacentHTML('afterend','<button class="card__time" >ещё...</button>')
        cardTime.forEach(function (time, n){
            if (n > 2) {
                time.classList.add('hidden__time', 'add_time')
            }
        })
    }
})

const cards = document.querySelectorAll('.card')
cards.forEach(function (card, i) {
    card.addEventListener("click", showTime)
})

function showTime(event) {
    const additionallyTimes = event.currentTarget.querySelectorAll('.add_time')
    additionallyTimes.forEach(function (item) {
        item.classList.toggle('hidden__time');
    })
}
