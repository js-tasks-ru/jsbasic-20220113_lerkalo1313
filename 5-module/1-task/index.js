function hideSelf() {
  const btn = document.querySelector('.hide-self-button')

  const btnHidden = event => {
    event.target.hidden = true
  }

  btn.addEventListener('click', btnHidden)
}
