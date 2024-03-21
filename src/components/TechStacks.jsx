import React, { useState } from 'react'
import '../Styles/TechStacks.css'
import { backend, cloud, data, frontend, quality } from '../data/techstack';

export const TechStacks = () => {

    const [techstack, setTechstack] = useState({
        frontend: true,
        backend: false,
        quality: false,
        cloud: false,
        data: false
    })

    const handleToggle = (type) => {
        setTechstack(prevState => ({
            ...prevState, frontend: type === 'frontend',
            backend: type === 'backend',
            quality: type === 'quality',
            cloud: type === 'cloud',
            data: type === 'data'
        }));
    }

    return (
        <div className='techstack-model'>

            <p className='techstack-heading'>Technology Working Stack</p>

            <div className='techstack-options'>
                <button onClick={() => handleToggle('frontend')} disabled={techstack.frontend === true}>Front-end</button>
                <button onClick={() => handleToggle('backend')} disabled={techstack.backend === true}>Back-end</button>
                <button onClick={() => handleToggle('quality')} disabled={techstack.quality === true}>Quality Assurance</button>
                <button onClick={() => handleToggle('cloud')} disabled={techstack.cloud === true}>Cloud</button>
                <button onClick={() => handleToggle('data')} disabled={techstack.data === true}>Data</button>
            </div>

            <div className='techstack-container'>
                {
                    techstack.frontend && frontend.map((e) => {
                        return <div key={e.id}>
                            <img src={e.logo} alt={e.name} />
                            <p>{e.name}</p>
                        </div>
                    })
                }
                {
                    techstack.backend && backend.map((e) => {
                        return <div key={e.id}>
                            <img src={e.logo} alt={e.name} />
                            <p>{e.name}</p>
                        </div>
                    })
                }
                {
                    techstack.quality && quality.map((e) => {
                        return <div key={e.id}>
                            <img src={e.logo} alt={e.name} />
                            <p>{e.name}</p>
                        </div>
                    })
                }
                {
                    techstack.cloud && cloud.map((e) => {
                        return <div key={e.id}>
                            <img src={e.logo} alt={e.name} />
                            <p>{e.name}</p>
                        </div>
                    })
                }
                {
                    techstack.data && data.map((e) => {
                        return <div key={e.id}>
                            <img src={e.logo} alt={e.name} />
                            <p>{e.name}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
