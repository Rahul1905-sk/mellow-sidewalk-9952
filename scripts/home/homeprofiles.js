 const homeprofiles=()=> {
    let flag1 = false , flag2 = false, flag3 = false, flag4 = false, flag5 = false;
  
  
  
    document.getElementById("LIVE").addEventListener("click", () => {
      flag1 = true;
  
      if (flag1 === true) {
        document.getElementById("Live_profile").style.display = "block";
        document.getElementById("LIVE").style.borderBottomColor = "transparent";
        document.getElementById("LIVE").style.fontWeight = "800";

        document.getElementById("Mens_profile").style.display = "none";
        document.getElementById("MENS").style.borderBottomColor = "transparent";
        document.getElementById("MENS").style.fontWeight = "300";

       
        document.getElementById("WOMEN_profile").style.display = "none";
        document.getElementById("WOMEN").style.borderBottomColor ="transparent";
        document.getElementById("WOMEN").style.fontWeight = "300";
  
        document.getElementById("Accessories_profile").style.display = "none";
        document.getElementById("ACCE").style.borderBottomColor ="transparent";
        document.getElementById("ACCE").style.fontWeight = "300";

        document.getElementById("Winter_profile").style.display = "none";
        document.getElementById("WINTER").style.borderBottomColor = "transparent";
        document.getElementById("WINTER").style.fontWeight = "300";
       flag1 = false;
      }
    });


    document.getElementById("MENS").addEventListener("click", () => {
      flag2 = true;
  
      if (flag2 == true) {
        document.getElementById("Live_profile").style.display = "none";
        document.getElementById("LIVE").style.borderBottomColor = "transparent";
        document.getElementById("LIVE").style.fontWeight = "300";

        document.getElementById("Mens_profile").style.display = "block";
        document.getElementById("MENS").style.borderBottomColor = "transparent";
        document.getElementById("MENS").style.fontWeight = "800";
  
        document.getElementById("WOMEN_profile").style.display = "none";
        document.getElementById("WOMEN").style.borderBottomColor ="transparent";
        document.getElementById("WOMEN").style.fontWeight = "300";
  
        document.getElementById("Accessories_profile").style.display = "none";
        document.getElementById("ACCE").style.borderBottomColor ="transparent";
        document.getElementById("ACCE").style.fontWeight = "300";

        document.getElementById("Winter_profile").style.display = "none";
        document.getElementById("WINTER").style.borderBottomColor = "transparent";
        document.getElementById("WINTER").style.fontWeight = "300";
        flag2 = false;
      }
    });
  
    document.getElementById("WOMEN").addEventListener("click", () => {
      flag3 = true;
  
      if (flag3 === true) {
        document.getElementById("Live_profile").style.display = "none";
        document.getElementById("LIVE").style.borderBottomColor = "transparent";
        document.getElementById("LIVE").style.fontWeight = "300";

        document.getElementById("Mens_profile").style.display = "none";
        document.getElementById("MENS").style.borderBottomColor ="transparent";
        document.getElementById("MENS").style.fontWeight = "300";
  
        document.getElementById("WOMEN_profile").style.display = "block";
        document.getElementById("WOMEN").style.borderBottomColor = "transparent";
        document.getElementById("WOMEN").style.fontWeight = "800";
  
        document.getElementById("Accessories_profile").style.display = "none";
        document.getElementById("ACCE").style.borderBottomColor ="transparent";
        document.getElementById("ACCE").style.fontWeight = "300";

        document.getElementById("Winter_profile").style.display = "none";
        document.getElementById("WINTER").style.borderBottomColor = "tranparent";
        document.getElementById("WINTER").style.fontWeight = "300";
  
  
        flag3 = false;
      }
    });
  
    document.getElementById("ACCE").addEventListener("click", () => {
      flag4 = true;
  
      if (flag4 === true) {
        document.getElementById("Live_profile").style.display = "none";
        document.getElementById("LIVE").style.borderBottomColor = "tranparent";
        document.getElementById("LIVE").style.fontWeight = "300";

        document.getElementById("Mens_profile").style.display = "none";
        document.getElementById("MENS").style.borderBottomColor ="tranparent";
        document.getElementById("MENS").style.fontWeight = "300";
  
        document.getElementById("WOMEN_profile").style.display = "none";
        document.getElementById("WOMEN").style.borderBottomColor ="transparent";
        document.getElementById("WOMEN").style.fontWeight = "300";
  
        document.getElementById("Accessories_profile").style.display = "block";
        document.getElementById("ACCE").style.borderBottomColor ="transparent";
        document.getElementById("ACCE").style.fontWeight = "800";

        document.getElementById("Winter_profile").style.display = "none";
        document.getElementById("WINTER").style.borderBottomColor ="tranparent";
        document.getElementById("WINTER").style.fontWeight = "300";
        flag4 = false;
      }
    });

    document.getElementById("WINTER").addEventListener("click", () => {
      flag5 = true;
  
      if (flag5 === true ) {
    
        document.getElementById("Live_profile").style.display ="none";
        document.getElementById("MENS").style.borderBottomColor = "transparent";
        document.getElementById("MENS").style.fontWeight = "300";

        document.getElementById("Mens_profile").style.display = "none";
        document.getElementById("MENS").style.borderBottomColor = "transparent";
        document.getElementById("MENS").style.fontWeight = "300";
       
        document.getElementById("WOMEN_profile").style.display = "none";
        document.getElementById("WOMEN").style.borderBottomColor ="transparent";
        document.getElementById("WOMEN").style.fontWeight = "300";
  
        document.getElementById("Accessories_profile").style.display = "none";
        document.getElementById("ACCE").style.borderBottomColor ="transparent";
        document.getElementById("ACCE").style.fontWeight = "300";

        document.getElementById("Winter_profile").style.display = "block";
        document.getElementById("WINTER").style.borderBottomColor = "transparent";
        document.getElementById("WINTER").style.fontWeight = "800";
        flag5=false;
      }
      
      
      
    });

  }




  export {homeprofiles}