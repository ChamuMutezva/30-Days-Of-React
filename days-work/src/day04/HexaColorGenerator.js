import React from 'react'
// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef';
  console.log()
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {

  return <div style={{ backgroundColor: hexaColor(), width: '90%', height: '50px', margin: '5px auto', lineHeight: '50px' }}>{hexaColor()}</div>
}
export default HexaColor