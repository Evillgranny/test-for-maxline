import { Accordion } from "../../model/Accordions/Accordion";
import { accordionButtons } from "../../view/accordion/accorderon";

const accordionF = new Accordion()

accordionButtons.forEach(i => {
    i.addEventListener('click', () => {
        !i.classList.contains('active') ?
            accordionF.accordionShow(i, i.nextElementSibling) :
            accordionF.accordionHide(i, i.nextElementSibling)
    })
})


