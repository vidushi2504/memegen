import React from 'react';
import { Button, Form, Image, Row, Col, Text } from 'react-bootstrap';
import { useState } from 'react';
import memesData from '../memesData';

function InputForm() {
  const [topText, setTopText]=useState("")
  const [bottomText, setBottomText]=useState("")
  const [memeImage, setMemeImage]=useState("")

  function getMemeImage(e)
  {
      const memesArray=memesData.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      const url = memesArray[randomNumber].url
      setMemeImage(url)
      e.preventDefault()
  }

  return <div>
      <Form>
          <Form.Group style={{ marginLeft: "120px", marginRight: "120px", marginTop: "60px" }}>
            <Form.Control type="text" onChange={e=>{setTopText(e.target.value)}} placeholder="Enter text to be displayed above" />
          </Form.Group>
          <Form.Group style={{ marginLeft: "120px", marginRight: "120px", marginTop: "30px" }}>
            <Form.Control type="text" onChange={e=>{setBottomText(e.target.value)}} placeholder="Enter text to be displayed below" />
          </Form.Group>
          <Button type="submit" style={{ marginTop: "30px", marginLeft:"666px" }} onClick={getMemeImage}>Generate a new image</Button>
      </Form>
      <Row>
        <Col></Col>
        <Col className="mx-6" style={{marginTop: "30px"}}>
          <Image src={memeImage} style={{ width: "100%", height: "100%"}}></Image>
          <h2>{topText}</h2>
          <h2>{bottomText}</h2>
        </Col>
        <Col></Col>
      </Row>
  </div>;
}

export default InputForm;
