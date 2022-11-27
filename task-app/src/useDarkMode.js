import  {useEffect} from "react";



const useDarkMode=(isDark)=>{
    useEffect(()=>{



      const body = document.body
      const items=document.querySelectorAll(".item");
      const input= document.querySelector("input.itemInput");
      const itemCount =document.querySelector(".itemCount");
      const toggle =document.querySelector(".Toggles");
      const attribute=document.querySelector(".attribution");
      const bgImage = document.querySelector('.header');




        if( isDark === true ) {

          body.classList.add('darkModeBody')
          itemCount.classList.add("darkmodeContent");
          toggle.classList.add("toggleDark");
          input.classList.add("darkmodeInput");
          attribute.classList.add("toggleDark");


         if(window.screen.width<400){
          // bgImage.style.backgroundImage=`url("./images/bg-mobile-dark.jpg")`
 bgImage.style.backgroundImage=`url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMDAwMDAwQEBAQFBQUFBQcHBgYHBwsICQgJCAsRCwwLCwwLEQ8SDw4PEg8bFRMTFRsfGhkaHyYiIiYwLTA+PlQBAwMDAwMDBAQEBAUFBQUFBwcGBgcHCwgJCAkICxELDAsLDAsRDxIPDg8SDxsVExMVGx8aGRofJiIiJjAtMD4+VP/CABEIAMgBdwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAABAgMEBQAGBwj/2gAIAQEAAAAA/LjO5LFmdpHkLyt5NPa/P68lXjdqvFf18mgH17edTlsxu/tGZ3FZ5bblnbp8ep4ut6/wsNumvXIDFq6+JQMmrJRgksRHvdkl69RrWgTIxq5uHpeWh9V4hb2Ye0ayro38mmZb5FQsJB9DndnLlzxMWJmxZ2p5yt6bxy3M9hegA0tPErdNfCVX7i3srlsFm48eo5tOLs3X85W9d4vrNE9eRV1beLB0t7jTbmBtevpZW/Vi57ONFcFYvn7Plq/rPHdYqM1pAL82dA011BFzc/Vt8ZF3SNkdgG70BmobPmoPTeU5oC1tOi2nyYjPoxwx8S/ZWyKshs288V5700HS17eFBq4ndG1iQo+iM1enuCGMM/PlSPG7tLGkdvRkiEvRZ9R6/ckmnQswaGhRoFdG0lHgXJ8naF2/E9mpNnWb84e01LJhvZJ6N79eaNraUyZJnhPMxOObBUJwPT2rLpZ6HKDVpY68+tnWoNDUqYpF62tI9zd0FvpIq3MyxkPK09irkGWmRFLo1LEOnpUMwro3oabAkPms9uozB2g7m4S7Hn+gMC8j6FSaKzpwZ7LcuxVgWBkDTVIJHdrJyywSPbwXogsqy36csOnfqZhM9joO5uLvJHTLr3SWIAOi7ozQPcVnsVpTtR0qxfQtw0RxPNULCWd1AKrCAvPFQPcwmeKSbaiyeaTUly1BYk+l6vtwwmMq0VSvr18+lDmwatVEjtcrS6i5fGW/Yy+XpCx3o59+oXWR1EOdHp18zL87Hp69fNq2u4y2ZM0mW5Pn93MzdtjZ6qkaqFZYYL0ieOrrJqNTqW2UNM1V+e1LS5i7c2dd06KrIrOqosabWfPUrCbs4WJl7u4kmSWEl24nO9BQAMgAiJiCybGYqosuT02nHXBBfi3MzFmLYHoolmuihCo4qWr27tNFizA3WrNionE8SSzMS5zJ5pkEcU56tJDG6LsU6sccRJex12KLjzcSxYsxtCTqk8ySrEkXd0FeO0I+SGESvJzTrGDxZm5mY0G6cCeFHZivIsKxbNZeRK4mbibMtRSSxYsT/8QAGgEBAQADAQEAAAAAAAAAAAAAAwIAAQQHCP/aAAgBAhAAAAD62M8IiiMCCEhvnO+ODj0ooTmLSYBHAmdc075iOPVRPC2YkUDISV80YBQfrE6CdcYnBQZSV8575yifUMqDATgiI4iN80b5ok/TdREkUwRiejm+PVckRHpsnMmZwJEeji+TW+Yzn1KZiIMRICPRXHNc8hnHqwzB6ktcoZyajZDuOYpj1QtTEGUhzZy6kyPUDBz6jkHBnByXNzbwTM5g5n0+YiDiAgwE8iCM4iJ9RiJM8IhyD5ok5Ezk4//EABoBAQEBAQEBAQAAAAAAAAAAAAMCBAEHAAX/2gAIAQMQAAAA/NtPmZlXultLKkaVnTa15WlRqaz+0uytazoXjql+OO0vx3dV0WtrOlOOqV4xd6L7+g6ozWiJzTfHW78i+FU2qirqdKtOunNCXfkvbtFa1bQq1d81VzSt35JadtFZNTotJfNNfaESvH+1SUz69OlUpOI/1aUSvHnu073RzfpnbSdt/kdLryFq7SK16Nf2ztoi1bXdeTdpbtVb59OrvzIt2l3XlFdWkVHVNDp9dslpd35KnUtLRtPyLpq7R7S6T//EAEYQAAEEAQICBgUHCgUDBQAAAAEAAgMRBBIhMVEFEBNBYXEUIjJCkSMzYnKBkrEVICQ0Q1JTocHRRFRjc4KisvElg8Lh4v/aAAgBAQABPwDRLfemslHNaZeZWibmUGTcytM3NyEU5HEoxT8yhFNV7rsJvFCCY816NN4puJP4oYUy9Cl7rtNwpu5Do6U70VH0W90rQ92ht7miV0hDo1+saDbCe+7tTSE5dfSasx5Z0PkJ70TusffIj394J/tu8yu5XzUprDj+sorErPrBZB+Xf9bqwYjK91OIA4+KbBGzu3XSHtsHgiFSg+eZ5pnzf/FYhBOWT3RrLIqIfQHUAKCAT3NsX/JRnbbuV2uyi1fqp9pCKPb9F5/zQibW2N7tLsxZrGH/AIQj3/Vh7SI7Nluxm0Bv9qOXE0fMM4AL0yPiIGbuBUGQJHNaIGWSVolI2ij9kBaZr+aj438FU9j1I+J/mgJgK0x8AF8tuaj/APCBnB4x7FNE521R8K+KLpSBRjGwU3TDopC3YkPK6VmL9TjQOi6R5Kcj00+EgWdktl6NmYwOra3kU3ZPeSLpAlYI1ZkI+mFJVlWrUxvGi2qj8VFfatoWbWR88/eze6ty6ONB/mFYXSB+WHkgiseu3ZfNAgRf8VjO+Tyj9FZW5Z9UIGkESn8ULatW6AF2cs2gG/5oqm/5lypt/rDvgVpZ/mHqcEBuiVz99xSLHk8HfBCJ57j8FBCdbQ7W0d5AQiiHvy/BCKHnL8F2UX+qhFDxqVdlFXsSp0eO1pcWSABTT4ox5TFdilhZUkuUGh3BpJWS8uyn0T7ZXSEliQDc6OCD26m33kKajnu/3z+K6Tkro54HAs/qjv1dG0M2H6yctlayqEEH2rG3yI/rKbeaQ/SKCwZI4w7W6uFI5Da9Vrj9izHOe8EitlZ5K1j32raVW3c2Nk0XHLp2WTQc0fRCoAoFBxPerNrUaQtzlFK2XZssTvJqDZB7w+4g1/7w+4g19e1/0Kn/ALzvuIah7zvur1+b/uhAP5yfAL1+cnwC9f8A1P5L1/p/EIB30/vBb8nffCkyIontYS8F1UdVp+fI+PJBcSGj+qZKH4eQ7xbuujJmsyiT/DcApJG+kOF8XrNpkMtckKL2+YT3XnHf9uf+5dISCXAeG2fV8hxWpE2sEkZLDytE9WoLJfqiiI4AcVA8MmYeRUltldY95WsJoIJI3tPrksz5/wCxBHioKEoTt2N+xR7slHgssfKD6oQu1pVUgimA2m48Ty6XCmDSQCGcDShy5w/spWsjLRxcTujOQLMkNeZTctp/bQfEoZbO+eH+a9Lj/jxfAr0yIf4iL7qGbD/mI/ur02D/ADDPur02D+O37i9Nx/44+6hn45/xH/SpekZHCRl7aTvSM9ZeNqPucUJSY8ryH4qM3gznxC6MNZDvCMqz2xP01mvf6PK4tIbzKikLpGDm4Jh15jTzmv8AmulTXRjwObeq1hmp/Jjz8GlFdyG5FrM2EQ8FiH9Jj81JvI/6xRWFvG7zT+HFZXzxQW5UHzg8ivdHmFHQZKVm7Tf8QghZ6tgUU01axMhzcqGiRs0fzWJNFlxSidofplcATx2XSb2MxX14LAYMqYMLyLHAd6j6Lw5mBzcgi62u1NhQxSPaHvcGu2IK9Fhr2pOC9FhHB71BgsnmbGJHCwd6R6Ekbd5MaymyYcxjcRYUM7jI36wRmc4Snh6h/FNkAyMc8mApkh7DJ2Pd+KxyXYc2+1rAbcrvWI9Q8NkPnr+mukj/AOnyeYUTtMrD9IKA/pEZ+mCukpY39GuaxwLrBocgtStY7gx7j/pyfzaUVabxCy3hxZR7liuAnYSU5w1HzVjmsUyiMloFXxRfO7ksgu7U3xVlesoLMgF1snMOwvvQbTJNypxUnEnYIgdVLig1AALHfWTF/wAfxWDORFJ4yuXSExOI669od/ioZ3xEPY4tc3gQmZeTIQHSU0WRZoLCe7MfMGzytcAHNYGhznc6vkskyxse+LKc7Txa5gDh5rFxsjKhD48tur3mloFbWsgS4U2ORktlEmrfSBXcnjpGCcwsy9YDWlxDra2+ay55JZnOe/U7vNUsMkzNF16wQA0SWfd/qmSAZcHIMH4LXWPMKO9LHkIxJhpPtBYD3ukdTPd7yhqM9D95ZjHHElDn6gK24d6dGGkG+Cw/1qG/4jV0oQMR+nb2fxVAKghwPketjQXAeKymhpYB+6sZjXSsCe23OPitItYTfkPtQFAjxU/zrkOrG+dCk4jzTRcchrvU+0tcgFxR4dfAIKB1ZMZ8WrCeDCd/fKzpP0evpBYsfatedJIYLNLbQRe9KJk0kjmxbEb8eCycsh5ETzpewNcefNYvSePDC9gjcHujILr7+6k7JfpDTWzXj73FR5PqhoBG1OI71M6nbE0sNtku7hugxzmkBot3qjz4pgIk190TA1yLXx45BA+UqvsRa/Hxy0gW8ghYj349zSMppFCjaxoZppdbW7B1ndZ2TUT4qOp1I9q67HBpPwWHvlQ1++F0jnMewwiw4EWfJWbW6skHq3pRRSEB+n1W8SsmRsr2lvAClifPtJuhuUTZKjhfJZaOCibLEzToTnvj3ftZ2UhL3uK0OtUVE17Xg0nOe6gGlAuZG8Fp3Kldrfa3W5Q6r8EHBCOCB4c/Ja4gj1YwXcPE0ospgpkQdueJKypS6Cidw+isaeWNkgYT61Agd4WuUmnCvGlHLJGXae/Yp0rtO7BuNyAotb3taQ0X3lo/FSPD5PO0LYe/zClcS7ieCwtJ79wCaQZYFHi8ALQLyDZ0jar4lSNezHjLnEk3p8Apu07CIyO9b3fJMMsuG4EtDWnYrAyixxjDL1LpDtDIJCyhsE6amusHdpCwSBmRE8Nay9siQkcXEhWFasUeoHZQSMOG9ti6K2tYrmiR3jG5BYNevSBWb7LEF3Iph4KM+sNu5ZRFDz6uJVIhCwuK0oGqTIZ4xrI0+Z3T5S5pBPEgrAkY17tbgNlrx3n1n/BRejufLqeQNXqqYYohfpkJNbBQux2aHdqbABpOZCMhobIaom0TX+Icsh/yntXtxWG3YuB4f1TS4AAcS6x4UmyEiej6p7+ZUkzjjxbezYWVKx8cBvg1OLPyaK4k7/FdGwtGs+QXSoqdoHANU7ajK6Ov02H6y6UnDpjGGimd/ieqlwBVrcBYkIdqeTs0J1FxIFDksRn6Q1EC1G17nU27XYzt3JIT45CNytwVut018nMpss45p75XgXa1FWUHG1qK1laytZXpELGGOCIAg+0NyftKGLM4jtXDU4E6b/Hkm9HMA9oE/WC9BAHd94I4dd4+KEDOaOOhAaRx3rsja7Ad9qJxiBAvcj+Sim9YeDStQ9GZ9YrIbqcyMGhQ/mst+lrYmjZia0x4J1u8aXR2SWve27XSUgdM14ui0BTvBiNLo39dh+t/RZhvKm+uVtaa206gCqCHAKAgYMhWyw/1geTvwRXR7R2j3Hubt9qcA4hZlNgJ50OqhXVAwFo2QjbamaGsWkXxWhabQatJRaqKbHGAI4YXMZ7zi0lzvxoIPLAA2Ntf7a7Rx/ZD7iHbOG0Q+4pJXjZzG/dQ0lU1ANQF8KT2lvFAtPeEWjwWkdys6Q3uBXa3kN8wpiHZH2hZ5Ftbe1LCjEcdirduukMiOSUNAPqcVM4GPhW66Ps5cVeKzmOjyHE+9vStB5CLrB6rNBY8gOLJGTv3K1iH9IHk78ECsA1r+xHcrNPybR9LqPVDQATSCQsqtLQOa2vq8kBsrXAqgtJHvFajzKY4X64JHgi/GDNjJfmnOLuGpBvgVoZzKojgtTh3oOfIKou8inRBh3BBQbGQg1gVNCFdy2MmonvBWU8Pe0g9yxPmm3+6FJu9xI95TMHoZfW+sBdHODcthPcCVlTCedzwdjwCK3TvZKC3UI7KB7iNyNr6sbeQ0eDXLgsaZ0b9hdps4dxWU8OYKPegd1aJUb/VCjeVO69JVolWUeHUEDScycn9X387QimP+Hd8QmsljF+ju+81TzvPFhCbkzgkBzwOVlCef+I/4lDJnH7ST7xQy8numkH/ACKbnZQ/avP22mZ8n0z8P7KWcyCxG8nx0n+ikJJ4D4UmV37JwA4bhBpTgURusaQdkN+DQi4FzvNTurA85f6KD23H6BQ63cPt6owC9o8QsvZzG9waioaaXu5MKCwYQ0lz+WyMbCshjWR2qVdUbCRxTRK0ClJrLdzwVu6rIVlXugSFZQknJ+dh+6EBlnhJF8AnnJA9dzBXgE+WXhqCEsgAqRDLn4ayQu3kdxP8kCEHDkgQE2bb3a8E7SXWEGajxHxAQpG+ap3NesgXNOxKMTbWRpbhtbY+c4KIgF31SgVavdHh1Q/ONWUbkHktSiIp4+iowDI0cyFwbQVG1kTl509zSr6mjU6lFHbR4JgBCyQ0Btd6tFVaG3VatPgyhs5zUzHnrg1HEndvQ+woYk5aTWwI7+abgZBrby3Tei8qrX5MmAsuoI9Hyj3l6C+61o4co94L0KYVadjStRilZZQ1m9irdyKLjyKsrtHWjpcsuN7WR3ekglqANq66gu7qi+cCnNy9TNg7yUG8rPNHgrtO3cfNV1RcVFuxb0nuLnnr3/MolaIy0Coq7yiyI+7CeRTo2Xu1o8ioMHGEQY8M23cDvbiP6BOx8RrzUcBHKyEYIXdzG+AKGPG0cWuJ5oQMcdhGPivRGWDpZfgVJjNsbRgL0Rpbwb9pXop5MT8c1W3iU1phJ9lwOzm1YIQ6KimYJYg3szemzRTui2NO7WqXCYy7aLTsZgO7F2cbXj1Lo8FlvmfM7tDuOXAeATXAFR4HbRgsIL63Z3/ZzTsYtO4KMQBT20B1Mawb7p7A512UY/FBlA7qBhbK0okUgQih1RcSorV2EeP5g6gimzRFt9m4eYau2hsnQQsRuPPOLFtZbnbdzUH4ojGuG3HezXetOHx7L/tXZYb/ANnp+6hi4lcG/EI4WMTYb5+sE3o/G46SL5kf3X5OZe0YIHiEOjmC/kHfYR/degC9oX7eSkw31QgkP/EKfGmbwhf8FgzZEL3RyQl8bu42KPMFXA9p9RzAOJ9oD7tqbGikoxlr75G1LjyRk2wrIzPQy2o2ueeBcCaCkkc9xLiSTxKGxWLO97tJ5IStkFTAu+l7w/upsYsAeKcw8HBZDx6jQ0Chx531C9IVFWQrUbqcF2i1+oVZVK1GaUZpa6aVavqCCHX+XOjHD9UNea/LPRn+Vf8AELF6Sw4YWTtxngyuLQLF0OJU/T2IeEMg8tKPTGI7d0U/xH91+VMEi6yfK/8A9I9KYI/Z5N/X/wDtHpPDI2iyaJ49oP7r8qYgv5HI2/1Qh0vjd0E/h8oEel8c8cae/wDcX5Zxy2hBOK/1U7peEX8lkC/9UKTpSA/s5x/7iPSWOOEUtd/yixukY8twh0Oc4kaWyEEbf1UPSGDBYla/tA48LAHhSys+HIjeI5QxxaaJaeP2WpW5Uh9cl1d6MTxxC0OURkY62qOV5YNftITOafVcswETkOZoIAtvU0bBV4LvRBTHOYbaUJrHrNHmNl2oLSB1X1NUZsI0WlWr6wEOvQBZJFDxCw8QZczY2Cy9wA34LPdEZuyid8lA3Q2j3N4n7SnCI79oNvJdzt+HGiF6niAQKtaQOLuHcg4VQPEoMcRYQDaduNlq47jgtTABRukT9m/ei8b7pxBO3DuVhvrA7jdB/wCUoXybdvGLfQ9tvPzHeu0IPHghMaskFTEHktIpDYrWSmzHHDnBup+2kng3xReS4uO5KsFQhz3BjBZKOoGiKrit1zXBWOodQCpNJC1WDRVFBpQBQCoqit+S3QEJItt8za6MZiQ4mXlGPcN7OMl3Fzv7IOgA3j4gg0nNhfH6jCK702FhIAY87cQUIYyQSx/HjaETG3qs0F2bDRY0/wBkWMcL0PHPek8Buwa8bLS7S4UQfxTaaTY/nunNB2BdSdEAeBQZYtOZzBWPOcSdssbjqYbHIrIxcfLi9Lxqa2x2kX7hP/xK0tsij8UYiACUYwd6K0IDUdgbUjY4I3l7gZLprGu4eJK49UTqKZPHMNOQC4AUHj2h/dSY72DU0h7P3m/15ddBV1D80FWgVshSFKhaACjHraLKyYDE3GwGuNtbrkG3tP37/BS47IXtaXPIAsqOCEl3aSSN3FAAkkqLF9ejM4aa3Kd0W9gBE7t6s6SNkcRrY3N7ZxPI7DZSRGMODZHAkIPlYzSX2TuLQdI4Eh52tXJXvXypEkkai4EndVr9lx24osvftN9tk2Gx86L5J0Qou7TcDmuyIPG1iZEmJKJGusHZzTwc3ksnF4TQOJhkvTY4HvafEL5QAguXrosIPFOdo3sWESXEnn+ZD7Khlkgfqae6iDuCORC7OLLd8lUTz7l+qfIlPjfE8seC0jiD1ceoDqHVseofmhWV0TgyzTmaShFjjtJL5Du+1ej9KZ2TJK1oL5LdZ8eSHR3ScoNhhIq9903Gz2MGzXcdy4psmXCfXjjPJHNy3BzTGAOWojjyTxM9oOirG/rLTlNLm6HEUA5GCctBMB8CCuzlZHXY0eIcXIufsHRFp4E6qTmykn1Tx5q5W6gQRe61SN911IF7uaqQDgrfxPcg+Qjguj89kTZcfIaXQy1qriwjg4LKgkx30H21wtjxwcFclbPKDpOZpPa7UaJKIKA622ECA0etZPEK03KJaGTN7VtbHg4eRU0TQ64nFzCO8Uh196vqCCpDrC36ixuJ0RFEHtD8x+p31GqL5JgvJ2Gw0kJoZIGn0oOI33XbRv0h84JDe8WiccPrtARfcE1sTrp5A4jbvQgj0OJyAdW10gxzNjNwHrX5o9m5l+kEAEbLTE9uoy21o7xwPkuwcaLXsAHMJkbbNSnga24otBOq01pt2l4KscQGkmwi9hLQOCmYABsAEa+zinEDkoJonxmCbZrjbHn3Hf2KlxJIXEOABRiody7La12IKdBScwtO6pMATWrTSrdNJabBUTYZTT3aDWxqxfipIJIjThx3B4gqlXUB1DrH5uaGzZr2Mc8xxAMZ30GCk3BhLA4SHx2RxoGuFG22d73KlxoKAcNJqxY4hRY0LLcbIJANqFkGqnazz0WpRiRGhGaurr+6fHFxYx67JjnBuk92ydHENNNd8VUDm0GO3HEoRsBNh1jjSkjjaSadw5psLSQNz6pPFPjiDL0nV4o0wkllhEiQ0AUW78CnRm+BtaHXvaxXDLi7FzvlWj5Mn3gPd8+SdEwfvLs21xK7Np7yuyHMp0YKMZC0kJvBUVp77WlAbqKeRgLNiw+64WF6PFkbwODXfw3H8CnMdG4tcCCEBaAVbodQCCpV1UQv/8QALBEBAQACAQIFAwMEAwAAAAAAAQACESEDMQQQEiJRQXGRYYGhExQyUkJTYv/aAAgBAgEBPwB8Zj/p/JPjMf8AT+SfGD/wPyX9fP8A6v5s/FuLpwD958Z/5x/M+My+D8z4vL4xjxHVz3oLDqPp5urlv02WUstk8zY60Wb7m+pb5LN93ktuyycXTPUjq6fmfFOuxZ9ZyZ6j8/zerJ7bjBOcl2JZZazdfEPF1Hfpll4lsnmY36bN5b6lk2byzLLdfHRz7j+SOhg4OS61+kdPoZOjLL8T4fpfL+Cy6Xh8XTmn7X9v0vTsVL24mgCyy7/cssvdeqybcvEt9ZYy1jZPNvksnmzfcyz5ZO4dCWYHbQ6snL08PP2L76X7WeQY6slne7Le7mymyeLvPedrLosr6zZTPl67HLbP3l57+WeUssyz/jLZMLb5jLWVlns7SxnpnPeLORKTkXqJ5uJfJmZSXmyeWX2/vbLN3Db5LDnIupxizYd7PszNl5Pk7uZkZGyt3HMrrUzfTfljvZqzX0srYruzVJZylL1XPxNzMyy2XMzLK2bb9tt3Ydm6jxc2B9bqZaJZZ8m6j9Ddv7zmTmfN6y9Qzlp03tbqoRkLpssQs3ybF0XUy7S2OXF1ct6lltzaPm9OLyrJj8yHzIfM+n5nXzZJ82zVnhj8zjzOVlkLb2TLqydzGSXUdszMsuyWWWW3M+WTxZFnlqbHL6TzMysrKyyy2y0eT95mZJx/WyP1l3xZY5WWE4p5PaXck7mWZl82fJtzZdrLksi7khqcTVkE9pJsgTck958mb//EADERAQACAQMBAwsEAwEAAAAAAAEAAhEDITESBBBBBRMUIjJRUmFxkZJCU4HwgqGi0f/aAAgBAwEBPwA8nv7n/LK+T7fuv4s9Asc6r+LDsul46/8AqU7BW5k1bP8AjDyceN7/AIyvk+gG9/tDsGntveeh9n08dSzU0RvkmhXDaUGVrAzK8Qls9UobEDZgbSht3BMSun1Am59X/wBhpfL+/eOh1CcZ8f6w7EZ9pmn2etDHP1IaNfhPtOild0A+kb1ttUOGUoXoZf1THrTSOZWuIDAhxAm3VKmxPCVlDYgQCYnZtXLsdC8h7LLdr1TUKlBz85bV7VSuWlMfKzDtev8ABX8maet2y5mukJn4p6ZrF+loCPG89a/K7PjKU2PoylDpnSLKVgSpvCBtCNM2lTaY2lTaUNoQ7q1aYjXqRJpK2MjbeU82XeowBxljYD1chnbCylFv1PvlSuOYdOJVMQSVlYEDEOIQ3ZWeEJWBCYnmhlqtariVci9KYn6RwzJtzuTTrsTpgQNpQ3Ie1/EJUiTG0xkxK1hWdMrTCQqwGBAZkODeZZUhDMqw3lTeHEpTiHt/xMbShEZjZlvZmnzAluJXnuIQhuzMEg023g1ghC1ZTeBAc1hU6swlY+BNsRwEoECIYlQGVIECYmajyQ3m3hCrmVosK48ZWspkZXeV3SBKkqQN4G0tyTSqZhLShlgQh3ZmjXZXE6V8Kwo+4hS+OJ5u3unQiMrQQQnTcZ2etsZXaXEMk09VzhJXLDmGYzTIRJp1gQgdw2+E+0b3PVKmCF7/AAwtc/TC1/hIN/CsG74SjbjEeoeJTWvw0hfJxK1c5xKGCYlYAypiE6cyhgh3ECVMOd9oAsBgQriYZUlUGBKjnmVccylVgS1YbSsIQIQIEDuy7bQhBQ7qr7oOGFpV+UK43JW1ZW4Sth7ggQd4QhCECB3E3ybsJX6whtK+Ersys4tBguZVU7iEqo4hCHcQn//Z)`
         }
         else{
          // bgImage.style.backgroundImage=`url("./images/bg-desktop-dark.jpg")`
            bgImage.style.backgroundImage=`url('http://localhost:3000/static/media/bg-desktop-dark.73e47dbb723ebc772ef0.jpg')`
         }

          items.forEach(element => {
            element.classList.add("darkmodeContent");
          });

        } else {
          body.classList.remove('darkModeBody');
          input.classList.remove("darkmodeInput");
          input.classList.remove("darkmodeContent");
          itemCount.classList.remove("darkmodeContent");
          toggle.classList.remove("toggleDark");
          attribute.classList.remove("toggleDark");

          if(window.screen.width<400){
            // bgImage.style.backgroundImage=`url("./images/bg-mobile-light.jpg")`
             bgImage.style.backgroundImage=`url(data:image/jpeg;base64,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)`
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