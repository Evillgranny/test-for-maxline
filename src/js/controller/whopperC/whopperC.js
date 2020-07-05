import { whopper, menu } from "../../view/whopper/whopper";
import { Whopper } from "../../model/Whopper/Whopper";

let whopperF = new Whopper(whopper, 'whopper_active',
    menu, 'header__center_active')

whopper.addEventListener('click', () => {
    whopper.classList.contains('whopper_active') ? whopperF.closeMenu() : whopperF.openMenu()
})

export { whopperF }
