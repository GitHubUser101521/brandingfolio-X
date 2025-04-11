# BrandingFolio X Website Recreation

This project is a recreation of the BrandingFolio Template website, built using React.js for the frontend framework and GSAP (GreenSock Animation Platform) for animations. 

## Technologies Used

* **React.js:** A JavaScript library for building user interfaces.
* **GSAP (GreenSock Animation Platform):** A powerful JavaScript animation library for creating high-performance animations.
* **Tailwindcss:** For styling the components and ensuring responsiveness.

### GSAP for Animations

All animations observed on the original BrandingFolio Template have been implemented using GSAP. This includes:

* **Page Load Animations:** Elements animating in as the page loads.
* **Scroll-Triggered Animations:** Animations that are triggered and controlled by the user's scrolling. GSAP's ScrollTrigger plugin is used for this.
* **Hover Effects:** Subtle animations that occur when the user interacts with elements (e.g., hovering over options).
* **Other UI Animations:** Any other dynamic visual effects present in the original design.

GSAP are used for complex animations, and `useEffect` hooks within React components manage the lifecycle of the animations, ensuring proper setup and cleanup.

### Responsiveness

The website is designed to be fully responsive and adapt seamlessly to different screen sizes (desktop, tablet, and mobile). This is with the modifier class in tailwindcss

## Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd branding-folio-recreation
    ```
2.  **Install dependencies:**
    ```bash
    npm install  # or yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm start  # or yarn start
    ```
    This will open the website in your default browser (usually `http://localhost:3000`).

## Deployment

This project is deployed to [vercel](https://brandingfolio-x.vercel.app/).

## Credits

This project is a recreation of the BrandingFolio Template. All design and layout inspiration is derived from the original template.

