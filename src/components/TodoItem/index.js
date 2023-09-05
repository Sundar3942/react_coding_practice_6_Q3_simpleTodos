/* eslint-disable react/button-has-type */
// Write your code here
import './index.css'

const TodoItem = props => {
  const {listItem, deleteUser} = props
  const {id, title} = listItem

  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li>
      <div className="item-container">
        <p className="title">{title}</p>

        <button className="btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
