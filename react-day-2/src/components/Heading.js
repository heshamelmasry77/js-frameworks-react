function Heading({ name, age, color, fontSize }) {
  // 1. i want to add color
  const headingStyle = {
    color: color,
    fontSize: fontSize + 'px',
  };
  return (
    <h1 style={headingStyle}>
      Hello I am {name} and my age is {age}
    </h1>
  );
}

export default Heading;
