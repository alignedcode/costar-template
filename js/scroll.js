var scrolledElement = document.querySelector("#logo").getBoundingClientRect()
var elements = [".localnav__logo","#in-app","#get-button"]
var isScrolled = false;

window.onscroll = function (event) {
    if (window.scrollY > scrolledElement.height && !isScrolled) {
        isScrolled = true
        elements.forEach(element => {
            const elem = document.querySelector(element)
            elem.classList.remove('opacity-0')
            elem.classList.add('fadeIn')
        })

    }else if(window.scrollY < scrolledElement.height && isScrolled){
        isScrolled = false
        elements.forEach(element => {
            const elem = document.querySelector(element)
            elem.classList.remove('fadeIn')
            elem.classList.add('opacity-0')
        })
    }

}