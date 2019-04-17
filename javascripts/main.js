function openMenu(x) {
    var z = document.getElementById('b2');
    var r = document.getElementById('resume1');
    var g = document.getElementById('git');
    var c = document.getElementById('cont');
    var m = document.getElementById('m');

    if (z.style.zIndex != '-5') {
        x.classList.toggle("change");

        r.style.webkitAnimationName = 'fadeinbox';
        r.style.webkitAnimationDuration = '0.75s';
        r.style.display = 'inline-block';

        g.style.webkitAnimationName = 'fadeinbox';
        g.style.webkitAnimationDuration = '0.75s';
        g.style.display = 'inline-block';

        c.style.webkitAnimationName = 'fadeinbox';
        c.style.webkitAnimationDuration = '0.75s';
        c.style.display = 'inline-block';

        z.style.zIndex = '-5';
    } else {
        x.classList.toggle("change");

        z.style.zIndex = '1';

        r.style.display = 'none';
        g.style.display = 'none';
        c.style.display = 'none';

        r.style.webkitAnimationName = '';
        g.style.webkitAnimationName = '';
        c.style.webkitAnimationName = '';
    }
}

setTimeout(function (event) {
    var dataText = ["DANIEL DOMALIK"];

    function typeWriter(text, i, fnCallback) {
        if (i < (14)) {
            document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function () {
                StartTextAnimation(i + 1);
            });
        }
    }

    StartTextAnimation(0);

}, 1500);

setTimeout(function (event) {
    var dataText = ["developer /// software-engineering"];

    function typeWriter(text, i, fnCallback) {
        if (i < (34)) {
            document.querySelector("h3").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {
        if (i < dataText[i].length) {
            typeWriter(dataText[i], 0, function () {
                StartTextAnimation(i + 1);
            });
        }
    }

    StartTextAnimation(0);
}, 1500);
