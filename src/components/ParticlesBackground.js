import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import options from "./ParticlesBackgroundConfig/ParticlesBackgroundConfig";
import './ParticlesDiv.css';

const ParticlesBackground = () => {
    
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
        await loadSlim(engine);
        }).then(() => {
        setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    if (init) {
        return (
        <div>
            <Particles className="particlesDiv"
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            />
        </div>
        );
    }

}

export default ParticlesBackground;