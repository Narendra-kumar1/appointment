// Write your code here

import {Component} from 'react'
import './index.css'

import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointment extends Component {
  state = {list: [], title: '', date: '', clicked: false}

  onSubmitted = event => {
    event.preventDefault()
    const {title, date} = this.state
    const obj = {
      id: uuidv4(),
      isStar: false,
      title,
      date: format(new Date(date), 'dd MMMM yyyy,EEEE'),
    }

    this.setState(prevState => ({
      title: '',
      date: '',
      list: [...prevState.list, obj],
    }))
  }

  onStarButton = () => {
    this.setState(prevState => ({clicked: !prevState.clicked}))
  }

  onTitle = event => {
    this.setState({title: event.target.value})
  }

  onDate = event => {
    this.setState({date: event.target.value})
  }

  onStar = id => {
    this.setState(prevState => ({
      list: prevState.list.map(eachObj => {
        if (id === eachObj.id) {
          return {...eachObj, isStar: !eachObj.isStar}
        }
        return eachObj
      }),
    }))
  }

  render() {
    const {list, title, date, clicked} = this.state
    const starList = list.filter(eachObj => eachObj.isStar === true)
    //  console.log(starList, clicked)
    const filterList1 = clicked ? starList : list

    return (
      <div className="big-container">
        <div className="container">
          <div className="top-container">
            <div className="con-left">
              <h1>Add Appointment</h1>
              <form onSubmit={this.onSubmitted} className="form">
                <label htmlFor="input">TITLE</label>
                <input
                  type="text"
                  id="input"
                  className="inputEle"
                  placeholder="Title"
                  onChange={this.onTitle}
                  value={title}
                />
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  className="inputEle"
                  onChange={this.onDate}
                  value={date}
                />
                <input type="submit" value="Add" className="button" />
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="image"
              />
            </div>
          </div>

          <hr />
          <div className="bottom-container">
            <div className="star-container">
              <h1>Appointments</h1>
              <button
                type="button"
                className="button button1"
                onClick={this.onStarButton}
              >
                Starred
              </button>
            </div>
            <div>
              <ul className="list">
                {filterList1 !== ' ' &&
                  filterList1.map(eachObj => (
                    <AppointmentItem
                      key={eachObj.id}
                      onStar={this.onStar}
                      Item={eachObj}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointment
