var svgdata=[
  {
    name:"Css Example",
    kind:1,
    content:`
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet">
    <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
    <circle cx="100" cy="100" r="50" fill="green" />
    <polygon id="tri" points="20,20 180,50 100,200" stroke="red" fill="none" />
    <text x="100" y="100" font-size="30" text-anchor="middle" fill="white">SVG</text>
  </svg> 
  `,
  style:`
  @keyframes snurr { 
    0% { 
        transform: rotate(0deg); 
    } 
    100%
     { 
        transform: rotate(360deg); 
    }
    
}

#tri{                
    animation-name: snurr;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
  
  `
  },
  {
      name:"SVG Basics",
      kind:0,
      content:`
 <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet">
      <line x1="0" y1="80" x2="100" y2="20" stroke="black" />
      <circle cx="100" cy="100" r="50" fill="green" />
      <polygon points="20,20 180,50 100,200" stroke="red" fill="none" />
      <text x="100" y="100" font-size="30" text-anchor="middle" fill="white">SVG</text>
  </svg> 
`,
  },
  {
    name:"Viewbox Centered",
    kind:0,
    content:`
<svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet">
    <line x1="-20" y1="-20" x2="20" y2="20" stroke="black" />
    <line x1="20" y1="-20" x2="-20" y2="20" stroke="black" />

    <circle cx="100" cy="100" r="50" fill="green" />
    <polygon points="-80,-80 80,0 20,100" stroke="red" fill="none" />
    <text x="100" y="100" font-size="30" text-anchor="middle" fill="white">SVG</text>
</svg> 

`,
}



]