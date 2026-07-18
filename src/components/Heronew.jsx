import React from 'react'
import Navbarnew from './navbarnew'

function Heronew() {
  return (
    
    < div className="relative h-screen w-full ">
<section className="relative h-screen w-full overflow-hidden">
{/* navbar first  */}
<div className="absolute top-0 w-full z-50">

<Navbarnew/>
</div>
<div className="absolute inset-0 w-full h-full object-cover bg-black/50">
<video
autoPlay
muted
loop
playsInline
className="absolute inset-0 h-full w-full object-cover"
>
<source src="/video.mp4"  type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/40"></div>
</div>
</section>

</div>
    
    
  )
}

export default Heronew

