// script para descer a pagina suavemente.
document.addEventListener('DOMContentLoaded', function () {
    var navbarGroup = document.querySelector('.navbar-group');

    navbarGroup.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();

            var targetId = event.target.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offset = targetElement.offsetTop;

                var scrollOptions = {
                    top: offset,
                    behavior: 'smooth'
                };

                window.scrollTo(scrollOptions);
            }
        }
    });
});

// funcionamento do pop-up
var scrollPosition = 0;

function showPopup(event) {
    event.preventDefault();

    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    var popup = document.getElementById("popup");
    popup.style.display = "flex";

    document.body.style.overflow = "hidden";
}

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

    document.body.style.overflow = "auto";

    setTimeout(function () {
        window.scrollTo(0, scrollPosition);
    }, 1);
}

// surgimento dos elementos ao decorrer do scroll
const observer = new IntersectionObserver(entries => {
    console.log(entries)
    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('init-hidden-off')
        }
    })
}, {
    threshold: [0, .5, 1]
})
Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
})

// script para copiar o email a clicar na imagem
function copiarEmailParaAreaTransferencia(event) {
    event.preventDefault();

    var imagem = document.getElementById("emailImage");
    var email = "contato.daviwmpereira@gmail.com";

    var tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    var mensagemCard = document.getElementById("mensagemCard");
    mensagemCard.style.display = "block";

    setTimeout(function () {
        mensagemCard.style.display = "none";
    }, 1500);
}

// script para alterar o texto ao passar o mouse pela imegem das habilidades
var originalText = document.getElementById('text-1').innerHTML;

function changeText(element) {
    var newText = element.getAttribute('data-text');
    document.getElementById('text-1').innerHTML = newText;
}

function restoreText() {
    document.getElementById('text-1').innerHTML = originalText;
}
