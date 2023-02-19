function Paragraph(props) {
  return (
    <p>
      {/*This is the Paragraph content.*/}
      {props.content}
      {props.children}
    </p>
  )
}

export default Paragraph;
