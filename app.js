particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: { enable: true, value_area: 800 }
        },
        color: { value: '#9932CC' },
        shape: { type: 'circle' },
        opacity: { value: 0.7, random: true },
        size: { value: 4, random: true },
        line_linked: {
            enable: true,
            distance: 200,
            color: '#9932CC',
            opacity: 0.1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    }
});