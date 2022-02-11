function toggleText() {
  const btn = document.querySelector('.toggle-text-button')
  const text = document.querySelector('#text')
  const btnHidden = () => {
    text.hidden = !text.hidden
  }

  btn.addEventListener('click', btnHidden)
}
