import handleSubmit from "./js/formHandler";

// TODO: include your scss file here

window.addEventListener('DOMContentLoaded', () => {
    // TODO: get the button for submit
    // TODO: add event listener to it when the click to call handleSubmit function
    const buttonSubmit = document.getElementById('btn-submit')
    buttonSubmit.addEventListener('click', () => {
        handleSubmit()
    })
})


export { handleSubmit }