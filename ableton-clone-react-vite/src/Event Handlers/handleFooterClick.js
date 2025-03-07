
export default function handleFooterClick(e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'footer_click', // footer click event
        'url': e.target.href, // href captured for debugging
        'footer__description': e.target.innerText
    });
};