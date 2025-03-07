export default function handleSubNavClick(e) {
    e.preventDefault(); // prevent default navigation
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'sub_nav_click', // navigation event
        'url': e.target.href, // href captured for debugging
        'nav_description': e.target.innerText
    });
};