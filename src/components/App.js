import React from 'react'
import KanbanLists from '../containers/KanbanLists'

export default class App extends React.Component {
  componentDidMount() {
    document.body.classList.add('bg-info')
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-dark text-light">
            <h1 className="py-3 my-0">Kanban</h1>
          </div>
        </div>
        <KanbanLists />
      </div>
    )
  }
}