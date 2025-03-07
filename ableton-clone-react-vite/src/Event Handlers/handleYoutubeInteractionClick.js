export default function handleYoutubeInteractionClick(e) {
    e.preventDefault();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'youtube_play_event', // youtube play event
        'url': e.target.attributes.getNamedItem('data-frame-src').value,
        'youtube_description': e.target.attributes.getNamedItem('data-frame-title').value
    });
};