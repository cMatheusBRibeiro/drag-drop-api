const draggable = document.querySelector('#draggable')
draggable.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', draggable.id)
})

for (const dropZone of document.querySelectorAll('.drop-zone')) {
    dropZone.addEventListener('dragover', e => {
        e.preventDefault()
        dropZone.classList.add('drop-zone--over')
    })

    dropZone.addEventListener('dragleave', e => {
        e.preventDefault()
        dropZone.classList.remove('drop-zone--over')
    })

    dropZone.addEventListener('drop', e => {
        e.preventDefault()

        const draggableElementId = e.dataTransfer.getData('text/plain')
        const draggableElement = document.getElementById(draggableElementId)
        dropZone.appendChild(draggableElement)
        dropZone.classList.remove('drop-zone--over')
    })
}