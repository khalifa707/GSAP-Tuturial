
document.addEventListener("DOMContentLoaded", function () {
    // Get all service elements
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();


// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
    const serviceElements = document.querySelectorAll(".service");

    // Create ScrollTrigger for each service element
    serviceElements.forEach((service) => {
        const imgContainer = service.querySelector(".img");

        // Create ScrollTrigger for image width animation
        gsap.to(imgContainer, {
            scrollTrigger: {
                trigger: service,
                start: "bottom bottom",
                end: "top top",
                scrub: true,
            },
            width: "100%",
            duration: 1,
        });

        // Create ScrollTrigger for service height animation
        gsap.to(service, {
            scrollTrigger: {
                trigger: service,
                start: "top bottom",
                end: "top top",
                scrub: true,
            },
            height: "450px",
            duration: 1,
        });
    });
});