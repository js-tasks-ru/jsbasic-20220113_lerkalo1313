function highlight(table) {
  for (i = 1; i < table.rows.length; i++) {
    const row = table.rows[i]

    const lastIndex = row.cells.length - 1

    const dataSet = row.cells[lastIndex].dataset.available

    if (dataSet === 'true') {
      row.classList.add('available')
    } else if (dataSet === 'false') {
      row.classList.add('unavailable')
    } else {
      row.hidden = true
    }

    const genderIndex = row.cells.length - 2

    if (row.cells[genderIndex].innerHTML === 'm') {
      row.classList.add('male')
    } else row.classList.add('female')

    const ageIndex = row.cells.length - 3

    if (Number(row.cells[ageIndex].innerHTML) < 18) {
      row.style = 'text-decoration: line-through;'
    }
  }
}
