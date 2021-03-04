import React from "react"

import CMS from "netlify-cms-app"
import { StyleSheetManager } from "styled-components"
//import { si } from "netlify-cms-locales"
import "./cms.css"
import {
  CustomWidgetControl,
  CustomWidgetPreview,
} from "../components/customWidget"

//CMS.registerLocale("si", si)

CMS.registerWidget("test", CustomWidgetControl, CustomWidgetPreview)

//Component used to Enable netlify CMS to apply the styles added through styled-components
/* class CSSInjector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iframeRef: "",
    }
  }

  componentDidMount() {
    const iframe = document.querySelector(".nc-previewPane-frame")
    const iframeHeadElem = iframe.contentDocument.head
    this.setState({ iframeRef: iframeHeadElem })
  }

  render() {
    return (
      <div>
        {this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            {this.props.children}
          </StyleSheetManager>
        )}
      </div>
    )
  }
} */

//Used like
/* CMS.registerPreviewTemplate("index", props => (
  <CSSInjector>
    <IndexPagePreview {...props} />
  </CSSInjector>
)) */
