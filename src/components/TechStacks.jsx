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
                <button onClick={() => handleToggle('frontend')}
                    disabled={techstack.frontend === true}
                    style={{
                        borderBottom: techstack.frontend === true ? '2px solid #33b89f' : 'none',
                        color: techstack.frontend === true ? '#33b89f' : 'gray'
                    }}
                >Front-end</button>
                <button onClick={() => handleToggle('backend')}
                    disabled={techstack.backend === true}
                    style={{
                        borderBottom: techstack.backend === true ? '2px solid #33b89f' : 'none',
                        color: techstack.backend === true ? '#33b89f' : 'gray'
                    }}
                >Back-end</button>
                <button onClick={() => handleToggle('quality')}
                    disabled={techstack.quality === true}
                    style={{
                        borderBottom: techstack.quality === true ? '2px solid #33b89f' : 'none',
                        color: techstack.quality === true ? '#33b89f' : 'gray'
                    }}
                >Quality Assurance</button>
                <button onClick={() => handleToggle('cloud')}
                    disabled={techstack.cloud === true}
                    style={{
                        borderBottom: techstack.cloud === true ? '2px solid #33b89f' : 'none',
                        color: techstack.cloud === true ? '#33b89f' : 'gray'
                    }}
                >Cloud</button>
                <button onClick={() => handleToggle('data')}
                    disabled={techstack.data === true}
                    style={{
                        borderBottom: techstack.data === true ? '2px solid #33b89f' : 'none',
                        color: techstack.data === true ? '#33b89f' : 'gray'
                    }}
                >Data</button>
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
