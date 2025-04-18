import React from 'react'

const BuyCredits = () => {
  return (
    <div className="min-h-screen relative px-4 sm:px-10 md:px-14 lg:px-28 pt-20">
    {/* Top Gradient Layer: Three-color gradient (left to right), 800px height, with side grid patterns */}
    <div 
      className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-r from-blue-900 via-purple-500 to-red-600 z-0"
  
      style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 85%)' }}
    >
     {/* Left Side Dot Pattern */}
  <div
    className="absolute top-0 left-0 h-full w-[30%]"
    style={{
      backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.3) 2px, transparent 2px)
      `,
      backgroundSize: '30px 30px',
      maskImage: 'linear-gradient(to right, white 0%, transparent 100%)'
    }}
  />
  
  {/* Right Side Dot Pattern */}
  <div
    className="absolute top-0 right-0 h-full w-[30%]"
    style={{
      backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.4) 2px, transparent 2px)
      `,
      backgroundSize: '30px 30px',
      maskImage: 'linear-gradient(to left, white 0%, transparent 100%)'
    }}
  />
    </div>
  
    {/* Bottom Fade to Black Layer, starting at 510px for smooth merge */}
    <div 
      className="absolute top-[210px] left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black z-10"
    />
  
    {/* Content Layer */}
    <div className="relative z-20 text-white">
      Buy credits
  
    </div>
  </div>
  )
}

export default BuyCredits