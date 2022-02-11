function initCarousel() {
  let count = 1
  const btnRight = document.querySelector('.carousel__arrow_right')
  const btnLeft = document.querySelector('.carousel__arrow_left')
  const carouselInner = document.querySelector('.carousel__inner')

  btnLeft.style.display = 'none'
  const slideWidth = carouselInner.offsetWidth

  const nextRightSlide = () => {
    if (count === 4) return

    if (count === 3) {
      btnRight.style.display = 'none'
    }

    if (count === 1) {
      btnLeft.style.display = ''
    }

    carouselInner.style.transform = `translateX(-${slideWidth * count}px)`
    count++
  }

  btnRight.addEventListener('click', nextRightSlide)

  const nextLeftSlide = () => {
    if (count === 1) return

    if (count === 2) {
      btnLeft.style.display = 'none'
    }

    if (count === 4) {
      btnRight.style.display = ''
    }

    carouselInner.style.transform = `translateX(-${slideWidth * (count - 2)}px)`
    count--
  }

  btnLeft.addEventListener('click', nextLeftSlide)
}
