import  {useEffect} from "react";

const useDarkMode=(isDark)=>{
    useEffect(()=>{
        const body = document.body
        const items=document.querySelectorAll(".item");
        const deskToggle= document.querySelector(".deskToggle");
        const input= document.querySelector("input.itemInput");
        const itemCount =document.querySelector(".itemCount");
        const toggle =document.querySelector(".Toggles");
        const attribute=document.querySelector(".attribution");
        const bgImage = document.querySelector('.header');



        if( isDark === true ) {
          body.classList.add('darkModeBody')
          deskToggle.classList.add("darkmodeContent");
          itemCount.classList.add("darkmodeContent");
          toggle.classList.add("toggleDark");
          input.classList.add("darkmodeInput");
          attribute.classList.add("toggleDark");

         if(window.screen.width<400){
            bgImage.style.backgroundImage=`url('./images/bg-mobile-dark.jpg')`
         }
         else{
            bgImage.style.backgroundImage=`url('http://localhost:3000/static/media/bg-desktop-dark.73e47dbb723ebc772ef0.jpg')`
         }

          items.forEach(element => {
            element.classList.add("darkmodeContent");
          });

        } else {
          body.classList.remove('darkModeBody');
          input.classList.remove("darkmodeInput");
          deskToggle.classList.remove("darkmodeContent");
          input.classList.remove("darkmodeContent");
          itemCount.classList.remove("darkmodeContent");
          toggle.classList.remove("toggleDark");
          attribute.classList.remove("toggleDark");

          if(window.screen.width<400){
            bgImage.style.backgroundImage=`url('../src/images/bg-mobile-light.jpg')`
        }
        else{
            bgImage.style.backgroundImage=`url('http://localhost:3000/static/media/bg-desktop-light.3508d620efd5a52bb4ce.jpg')`;
        }


          items.forEach(element => {
            element.classList.remove("darkmodeContent");
          });

        }

    }, [isDark])

}

export default useDarkMode