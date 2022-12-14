

import {Footer} from "../components/footer.js"
import {navbar} from "../components/navbar.js"

import {homeprofiles} from "./homeprofiles.js"

let navbardiv = document.getElementById("navbar");
navbardiv.innerHTML = navbar();

let footerdiv = document.getElementById("footer");
footerdiv.innerHTML = Footer ();

// Display products on index/homepage
homeprofiles();