const cardTimes = document.querySelectorAll('.card__times')
cardTimes.forEach(function (item) {
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

const btnTime = document.querySelectorAll('.card__times > button')
btnTime.forEach(function (btn) {
    btn.addEventListener("click", showTime)
})

function showTime(event) {
    const additionallyTimes = event.currentTarget.parentNode.querySelectorAll('.add_time')
    additionallyTimes.forEach(function (item) {
        item.classList.toggle('hidden__time');
    })
}

const cardFooters = document.querySelectorAll('.card__footer')
cardFooters.forEach(function (cardFooter) {
    console.log(cardFooter.querySelector('.price-option'))
    if (!cardFooter.querySelector('.price-option')) {
        cardFooter.classList.add('price_center')
    }
})