class Accordion {
    accordionShow (accordion, container) {
        accordion.classList.add('active')
        container.classList.add('active')
    }

    accordionHide (accordion, container) {
        accordion.classList.remove('active')
        container.classList.remove('active')
    }
}

export { Accordion }
