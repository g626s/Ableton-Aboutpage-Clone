export default function handleInternalClick(e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'internal_link_click', // internal link event
        'url': e.target.href, // href captured for debugging
        'internal_link_description': e.target.innerText,
    });
};