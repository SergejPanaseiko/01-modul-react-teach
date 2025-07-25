import React from 'react'

const SectionTwo = ({ varianta, vary1=false }) => {
  const address = 15;
  return (
  <div>
    <a href="https://www.edu.goit.global/homepage"> {varianta}</a>
    <p>{vary1 ? <h2>onLine</h2> : <h2>offLine</h2>}</p>
    {vary1 && <h4>ЛИСТ</h4>}
      {!vary1 && <h4>ЛИСТОК</h4>}
      {address<16 && <h3>Условие</h3>}
  </div>
);
}

export default SectionTwo
