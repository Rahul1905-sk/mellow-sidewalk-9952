

import {navbar} from "../components/navbar.js";
import { footerSection } from "../components/footer.js";
import {loader} from "../components/loader.js"
loader()


let navbar1 = document.querySelector("#navbar");
navbar1.innerHTML = navbar();


let footer1=document.getElementById("footer");
footer1.innerHTML = footerSection();