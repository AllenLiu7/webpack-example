import React from 'react'
import ReactDom from 'react-dom'


class Welcome extends React.Component {
  render() {
    return (
      <div>
        Hello form React
      </div>
    )
  }
}

ReactDom.render(<Welcome/>, document.getElementById("root"))

