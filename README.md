# Ableton-Aboutpage-Clone
A front-end project to recreate the Ableton website using React and Vite. This project focuses on mastering typography, spacing, grid layouts, and multi-column footers while incorporating event listener functionality for Google Tag Manager (GTM) and GA4 tracking, along with AB Tasty for A/B testing.

## 🛠️ Technologies Used

- React for UI components

- Vite for fast build and development

- Styled Components/CSS Modules for styling

- Google Tag Manager (GTM) with dataLayer.push for event tracking

- AB Tasty for A/B testing integrations (In Progress)

## 🔑 Key Features

### UI/UX

- Custom Typography inspired by the Ableton website

- Consistent Spacing and padding for responsive design

- Unique Grid Layout for page sections

- Multi-column Footer with accessible links

### Tracking & Analytics

- Event Listeners for SPA navigation and user interaction tracking
    - #### Event Handlers: In React, an "event handler" is a function that is triggered when a specific user interaction (i.e. navigation or form submission) occurs on a component. This allows you to respond to these events by updating the component's state or performing other actions, and can be used to push data to the dataLayer (a common practice for tracking user behavior with analytics tools such as GA4->GTM for this demo) by executing code within the event handler function that pushes the relevant data to the dataLayer when the event is triggered. 
    - #### As best practice, using the [dataLayer method](https://developers.google.com/tag-platform/tag-manager/datalayer) for analytics purposes in React applications is recommended for flexibility and scalability, but most importantly SPA support. The dataLayer allows for the tracking of a wide range of events and parameters beyond basic page views. This flexibility is crucial for capturing detailed user behavior and custom events specific to the application. In SPAs, traditional page view tracking methods may not accurately capture user navigation. The dataLayer enables the tracking of virtual page views and route changes, providing a more accurate representation of user journeys.


- dataLayer.push for custom events (GTM -> GA4 integration) | A great tool to use to inspect the React component hierarchies in the Chrome Developer Tools is [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en), specifically the case to see how events are being handled.

    - #### Navigation click events (handleNavClick.js)
    <img src="misc_imgs/handleNavClick.png" alt="Handle Nav Click Event Handler Function" width="800"/>
    
    - #### Sub Navigation click events (handleSubNavClick.js)
    <img src="misc_imgs/handleSubNavClick.png" alt="Handle Sub Nav Click Event Handler Function" width="800"/>

    - #### Footer click events (handleFooterClick.js)
    <img src="misc_imgs/handleFooterClick.png" alt="Handle Footer Click Event Handler Function" width="800"/>

    - #### Internal link click events (handleInternalClick.js)
    <img src="misc_imgs/handleInternalClick.png" alt="Handle Internal Click Event Handler" width="800" />

    - #### Youtube interaction click events (handleYoutubeInteractionClick.js)
    <img src="misc_imgs/handleYoutubeInteractionClick.png" alt="Handle Youtube Interaction Click" width="800" />

    - #### Language and Location (In Progress)
    - #### Consent State demos (In Progress)

- Sample setup for AB Tasty tests (In Progress)
- Sandbox setup for CookieBot (In Progress)
- Newsletter signup (In progress)

## 📝 License

This project is for educational purposes only.