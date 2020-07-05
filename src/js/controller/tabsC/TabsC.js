import { Tabs } from "../../model/Tabs/Tabs";
import { allTabs } from "../../view/tabs/tabs";

let allTabsF = new Tabs()

allTabs.forEach(i => {
    i.addEventListener('click', (event) => {
        allTabsF.tabClick(event, i)
    })
})

export { allTabsF }
