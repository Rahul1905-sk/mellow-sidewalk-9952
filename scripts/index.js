

import {footerSection} from "../components/footer.js"
import {navbar} from "../components/navbar.js"


let footerdiv = document.querySelector("#part1");
footerdiv.innerHTML = footerSection ()

let navbardiv = document.querySelector("#navbar");
navbardiv.innerHTML = navbar();