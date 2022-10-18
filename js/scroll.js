var scrolledElement = document.querySelector("#logo").getBoundingClientRect()
var elements = [".localnav__logo","#in-app","#get-button"]
var isScrolled = false;

window.onscroll = function (event) {
    if (window.scrollY > scrolledElement.height && !isScrolled) {
        isScrolled = true
        elements.forEach(element => {
            const elem = document.querySelector(element)
            elem.style.opacity = 1;
            elem.classList.add('fadeIn')

        })

    }

}