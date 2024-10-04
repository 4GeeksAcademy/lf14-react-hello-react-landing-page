import React from 'react'
import Card from './Card'
const Cards = () => {
    return (
        <div class="container text-center">
            <div class="row align-items-center">
                <div class="col">
                    <Card title="Card Title 1" description="Vivamus rutrum, diam et rhoncus semper, 
                    sapien sapien dictum urna, vel convallis ipsum orci vel ante. Donec at odio id tellus feugiat volutpat. 
                    Mauris nisi ante, auctor et interdum maximus, euismod aliquet purus. 
                    Sed sodales lacus eu tincidunt faucibus." />
                </div>
                <div class="col">
                    <Card title="Card Title 2" description=" Fusce a malesuada sapien, a pellentesque tellus. Mauris enim metus, congue nec sodales sed, finibus nec neque. Aliquam erat volutpat. 
                    Duis sed faucibus magna. Vivamus a nulla suscipit porttitor. Phasellus a viverra risus, id placerat metus. Vivamus vitae felis risus.
                 " />
                </div>
                <div class="col">
                    <Card title="Card Title 3" description="Nunc in rutrum risus. Pellentesque facilisis nibh enim, viverra dignissim metus lobortis et. 
                    Morbi nunc nibh, semper vitae semper et, eleifend vitae nibh. Curabitur dui nisl, porttitor ut volutpat dapibus, laoreet nec lectus. 
                    Vestibulum porttitor blandit lectus, finibus faucibus quam molestie ut." />
                </div>
                <div class="col">
                    <Card title="Card Title 4" description="Ut semper, leo non condimentum tincidunt, libero purus volutpat nulla, sit amet lacinia felis nisi aliquam ipsum. 
                    Fusce libero sem, ultrices et neque dictum, hendrerit aliquam erat. 
                    Mauris consequat, leo ac auctor dignissim, ligula risus sodales nibh, id efficitur nisl tellus eget." />
                </div>
            </div>
        </div>
    )
}

export default Cards