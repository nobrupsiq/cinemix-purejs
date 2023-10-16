const links = document.querySelectorAll('.menu_list a');

function ativarLink(link) {
    const url = window.location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add('att');
    }
}

links.forEach(ativarLink);
