const draggables = document.querySelectorAll('.draggable')
const dropZones = document.querySelectorAll('.drop-zone')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault()
        const afterElement = getDragAfterElement(dropZone, e.clientY)
        const draggable = document.querySelector('.dragging')
        
        if (afterElement == null)
            dropZone.appendChild(draggable)
        else
            dropZone.insertBefore(draggable, afterElement)
    })
})

function getDragAfterElement(dropZone, y) {
    const draggableElements = [...dropZone.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        
        if (offset < 0 && offset > closest.offset)
            return { offset: offset, element: child }
        return closest
    }, { offset: Number.NEGATIVE_INFINITY }).element
}