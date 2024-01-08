
const options ={
                backgroundMask: {
                    enable: true,
                    cover: {
                      color: {
                        value: "#8e44ad",
                      },
                      opacity: 1,
                    },
                    // Usa el gradiente circular aquí
                    mask: {
                      image: "radial-gradient(circle, #8e44ad, #0414e7)",
                      position: {
                        x: 0.5,
                        y: 0.5,
                      },
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    },
                    modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    },
                },
                particles: {
                    color: {
                    value: "#2d1a2a",
                    },
                    links: {
                    color: "#3221b3",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                    },
                    move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                    },
                    number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                    },
                    opacity: {
                    value: 0.5,
                    },
                    shape: {
                    type: "circle",
                    },
                    size: {
                    value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }
export default options;