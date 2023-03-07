function invert() {
    let css = `*{
      background-color: black !important;  
      color: white !important; 
    }
    
    * button {
      border: 1px solid white !important;
    }`,
      head = document.getElementsByTagName('head')[0],
      style = document.createElement('style')
  
    if (!window.counter) {
      window.counter = 1
    } else {
      window.counter++
      if (window.counter % 2 == 0) {
        css =`*{
          background-color: white !important;  
          color: black !important; 
        }
        
        * button {
          border: 1px solid black !important;
        }`
      }
    }
  
    style.type = 'text/css'
    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }
    head.appendChild(style)
 
}

   
let active = true;
let status1 = true;

     let r = document.querySelector("#icons_div")
        r.onclick = () => {
       
        if (active && status1) {
            r.innerHTML = "🌞" 
            document.querySelector("div").style.borderColor = "rgba(53,47,47,0.374) important";
            document.querySelector("button").style.bordercolor = "rgba(53,47,47,0.374)";
             document.querySelector("#rhs img").style.filter = "invert(1)";
             r.style.filter = "invert(1)";
             invert();
            status1 = !status1
            active = !active;
  
        } else {

            r.innerHTML = "🦉"
            document.querySelector("div").style.borderColor = "rgba(53,47,47,0.374) important";
            document.querySelector("button").style.bordercolor = "rgba(53,47,47,0.374)";
            r.style.filter = "invert(1)";
            r.style.filter = "none";
            invert();
            
            
            status1 = ! status1
            active = !active;
        }
     
}
