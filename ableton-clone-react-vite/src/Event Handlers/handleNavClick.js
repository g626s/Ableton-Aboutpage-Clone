export default function handleNavClick(e) {
    e.preventDefault(); // prevent default navigation
    const navSection = () => {
        let navSectionNode = e.target.parentElement.parentElement.parentElement.parentElement.nodeName;
        if (navSectionNode === "NAV" || navSectionNode === "UL" || navSectionNode === "SECTION") {
            return 'Main Navigation Section';
        }
        return navSection;
    }
    const isExpanded = () => {
        // to grab 'main_navigation_section', 'main_nav__link_list_', 'sub_navigation_section'
        let expanded = e.target.parentElement.parentElement.parentElement.parentElement.classList[0]; 
        if (expanded === "sub_navigation_section") {
            return true;
        } else {
            return false;
        }
    };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'nav_click', // navigation event
        'url': e.target.href, // href captured for debugging
        'nav_description': e.target.innerText,
        'nav_section': navSection(e),
        'nav_section_expanded': isExpanded(e)
    });
};