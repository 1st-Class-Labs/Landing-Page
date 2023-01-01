/*=============== SHOW MODAL2 ===============*/
const showModal2 = (openButton, modal2Content) => {
    const openBtn = document.getElementById(openButton),
        modal2Container = document.getElementById(modal2Content)

    if (openBtn && modal2Container) {
        openBtn.addEventListener('click', () => {
            modal2Container.classList.add('show-modal2')
        })
    }
}
showModal2('open-modal2', 'modal2-container')

/*=============== CLOSE MODAL2 ===============*/
const closeBtn = document.querySelectorAll('.close-modal2')

function closeModal2() {
    const modal2Container = document.getElementById('modal2-container')
    modal2Container.classList.remove('show-modal2')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal2))