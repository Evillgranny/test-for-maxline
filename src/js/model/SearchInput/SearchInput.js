class SearchInput {
    constructor(input, activeClass, mobileBtns, mobileBtnsActiveClass) {
        this.input = input
        this.activeClass = activeClass
        this.mobileBtns = mobileBtns
        this.mobileBtnsActiveClass = mobileBtnsActiveClass
    }

    activeInput () {
        this.input.classList.add(this.activeClass)
        this.mobileBtns.classList.add(this.mobileBtnsActiveClass)
    }

    notActiveInput () {
        this.input.classList.remove(this.activeClass)
        this.mobileBtns.classList.remove(this.mobileBtnsActiveClass)
    }
}

export { SearchInput }
