import { searchInput, appLinks } from "../../view/search/search";
import { SearchInput } from "../../model/SearchInput/SearchInput";

const searchInputF = new SearchInput(searchInput, 'header__nav__search_active',
    appLinks, 'header__mobile-apps_active')

searchInput.addEventListener('focus', () => {
    searchInputF.activeInput()
})

searchInput.addEventListener('blur', () => {
    searchInput.value.length === 0 && searchInputF.notActiveInput()
})

export { searchInputF }
