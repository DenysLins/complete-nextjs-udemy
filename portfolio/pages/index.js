import React from 'react'

class Index extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome page from class component</h1>
        <IndexComponent></IndexComponent>
      </div>
    )
  }
}


const IndexComponent = () => {

  return (
    <div>
      <p>Welcome page from functional component</p>
    </div>
  )

}

export default Index