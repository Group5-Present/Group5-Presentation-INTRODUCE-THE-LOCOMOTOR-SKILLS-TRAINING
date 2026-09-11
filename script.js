```javascript
/* =====================================================
   BASIC WEBSITE JAVASCRIPT
===================================================== */


/*
   Smooth scrolling for navigation links
*/

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {


        link.addEventListener(
            "click",
            function (event) {


                const targetId =
                    this.getAttribute("href");


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }
        );

    });
```
