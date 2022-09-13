import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state =>state.notification)
  console.log("Notification");
  const style = {
    border: 'dashed',
    padding: 20,
    borderWidth: 2
  }
  if (notification === null){
    return null
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
