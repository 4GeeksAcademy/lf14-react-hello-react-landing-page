import React from 'react'
import Card from './Card'
const Cards = () => {
    return (
        <div class="container text-centerd-flex justify-content-center align-items-center p-3">
            <div class="row">
                <div class="col p-3">
                    <Card title="Card Title 1" description="Vivamus rutrum, diam et rhoncus semper, 
                    sapien sapien dictum urna, vel convallis ipsum orci vel ante. Donec at odio id tellus feugiat volutpat. 
                    Mauris nisi ante, auctor et interdum maximus, euismod aliquet purus. 
                    Sed sodales lacus eu tincidunt faucibus." />
                </div>
                <div class="col p-3">
                    <Card title="Card Title 2" description="Vivamus rutrum, diam et rhoncus semper, 
                    sapien sapien dictum urna, vel convallis ipsum orci vel ante. Donec at odio id tellus feugiat volutpat. 
                    Mauris nisi ante, auctor et interdum maximus, euismod aliquet purus. 
                    Sed sodales lacus eu tincidunt faucibus." />
                </div>
                <div class="col p-3">
                    <Card title="Card Title 3" description="Vivamus rutrum, diam et rhoncus semper, 
                    sapien sapien dictum urna, vel convallis ipsum orci vel ante. Donec at odio id tellus feugiat volutpat. 
                    Mauris nisi ante, auctor et interdum maximus, euismod aliquet purus. 
                    Sed sodales lacus eu tincidunt faucibus." />
                </div>
                <div class="col p-3">
                    <Card title="Card Title 4" description="Vivamus rutrum, diam et rhoncus semper, 
                    sapien sapien dictum urna, vel convallis ipsum orci vel ante. Donec at odio id tellus feugiat volutpat. 
                    Mauris nisi ante, auctor et interdum maximus, euismod aliquet purus. 
                    Sed sodales lacus eu tincidunt faucibus." />
                </div>
            </div>
        </div>
    )
}

export default Cards