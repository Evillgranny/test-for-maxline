class Whopper {
    constructor(whopper, whopperActiveClass, menu, menuActive) {
        this.whoper = whopper
        this.whopperActiveClass = whopperActiveClass
        this.menu = menu
        this.menuActive = menuActive
    }

    openMenu () {
        this.whoper.classList.add(this.whopperActiveClass)
        this.menu.classList.add(this.menuActive)
    }

    closeMenu () {
        this.whoper.classList.remove(this.whopperActiveClass)
        this.menu.classList.remove(this.menuActive)
    }
}

export { Whopper }
