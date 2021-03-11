import React, { PureComponent } from "react"
//import CKEditor from "@ckeditor/ckeditor5-react"
import CKEditor from "ckeditor4-react"
import PropTypes from "prop-types"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
//import "./customWidgetControl.css"
// Note that control component of a custom widget can't be
// a functional component. It will not work for some reason.

/* const ckeditorConfig = {
  extraPlugins: "emoji",
} */

/* const ckeditorConfig = {
  uiColor: "#AADC6E",
  extraPlugins: "uploadimage",
  uploadUrl: "/uploader/upload",
  filebrowserUploadMethod: "form",
  filebrowserBrowseUrl: "1",
  filebrowserUploadUrl: "2",
  filebrowserImageBrowseUrl: "3",
} */
/* 
const ckeditorConfig = {
  ckfinder: {
    uploadUrl:
      "https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json",
  },
}
 */

//var data = https://www.npmjs.com/package/emoji.json
//console.log(":::DATA:: ", data)
//CKEditor.emoji_emojiListUrl = "http://localhost:8000/emojis.json";
const ckeditorConfig = {
  extraPlugins: "emoji",
  removePlugins: "styles",
  //emoji_emojiListUrl: "http://localhost:8000/emojis.json",
  emoji_emojiListUrl: "https://komunikacija-kreacija.webdev.reavisys.si/emojis.json",

  // emoji_emojiListUrl: "./emojis.json",
  emoji_minChars: 2,

  toolbar: [
    {
      name: "links",
      items: ["EmojiPanel"],
    },
    {
      name: "styles",
      items: ["Styles", "Format"],
    },
    {
      name: "basicstyles",
      items: ["Bold", "Italic", "Strike", "-", "RemoveFormat"],
    },
    {
      name: "paragraph",
      items: [
        "NumberedList",
        "BulletedList",
        "-",
        "Outdent",
        "Indent",
        "-",
        "Blockquote",
      ],
    },
  ],
}

export class CustomWidgetControl extends React.PureComponent {
  constructor(props) {
    super(props)
    console.log("data::")
    this.state = {
      data: "<p>test! <em>nice</em>!</p>",
    }

    this.handleChange = this.handleChange.bind(this)
    this.onEditorChange = this.onEditorChange.bind(this)
  }

  onEditorChange(evt) {
    this.setState({
      data: evt.editor.getData(),
    })
    this.props.onChange(this.state.data)
  }

  handleChange(changeEvent) {
    this.setState({
      data: changeEvent.target.value,
    })
  }

  render() {
    return (
      <>
        <CKEditor
          type="classic"
          config={ckeditorConfig}
          data={this.state.data}
          onEditorChange={this.onEditorChange}
          onChange={this.onEditorChange}
          /* data="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>" */
        />
        {/*  <h2>Using CKEditor 5 from online builder in React</h2>
        <CKEditor
          editor={ClassicEditor}
          onChange={this.onChange}
          data="<p>Hello from CKEditor 5!</p>"
        /> */}
      </>
    )
  }
}
