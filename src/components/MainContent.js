import React from "react"

const MainContent = ({ children }) => (
  <main
    className="main-content" /* style={{
border: '40px solid transparent',
borderImage: `url("../assets/vil1.png") 100%`,
padding: '15px',
}} */
  >
    {children}
  </main>
)

export default MainContent
