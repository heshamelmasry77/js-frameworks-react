function Heading(props) {
// function Heading(babysharks) { 🦈🦈🦈 it can be called anything because they are just props ( Properties )
  //TODO Second part of the lecture
  console.log(props);

  // create an inline style and use it in my h2 tag
  const headingStyle = { // object of style
    // color: "red"
    color: props.color,
    fontSize: props.fontSize + "px"
  }
  return (
    <h2 style={headingStyle}>
      {/*This is the heading*/}
      {props.name}
    </h2>
  )
}

export default Heading;
