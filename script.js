let inputText = document.querySelector('.inputText')
let inputSubmit = document.querySelector('.inputSubmit')

inputSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(inputText.value)
})