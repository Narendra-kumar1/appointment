// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {onStar, Item} = props
  const onClicked = () => {
    onStar(Item.id)
  }
  const Star = Item.isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list-Item">
      <div className="con">
        <h1 className="heading">{Item.title}</h1>
        <button
          type="button"
          className="button2"
          onClick={onClicked}
          data-testid="star"
        >
          <img src={Star} className="icon" alt="star" />
        </button>
      </div>
      <p>{Item.date}</p>
    </li>
  )
}
export default AppointmentItem
