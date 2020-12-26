import React from "react"
import MainContentLeft from "./MainContentLeft"
import MainContentRight from "./MainContentRight"
import MainContent from "./MainContent"

const ContentMainDiv = ({ children }) => (
  <div
    className="content-main-div" /*  style={{
  backgroundImage: `url(../assets/paper4.jpg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100 %'
}} */
  >
    <MainContentLeft />
    <MainContent children={children} />
    <MainContentRight />
  </div>
)

export default ContentMainDiv
