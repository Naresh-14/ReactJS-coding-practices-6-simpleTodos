import './index.css'

const TodoItem = props => {
  const {simpleDetails, onDeleteUser} = props
  const {title, id} = simpleDetails
  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <li className="list-item-container">
      <p className="list-name">{title}</p>
      <button type="button" className="simple-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
