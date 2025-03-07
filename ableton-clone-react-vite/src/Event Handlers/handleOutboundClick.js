export default function handleOutboundClick(e) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'outbound_link_click', // outbound link click event
        'url': e.target.parentElement.href, // href captured for debugging
        'outbound__description': e.target.attributes.getNamedItem('alt').value.split(' ')[0]
    });
};