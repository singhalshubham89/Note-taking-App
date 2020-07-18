import React from "react";
import "./App.css";
import TodoAddNote from "./components/TodoAddNote";
import TodoCalendar from "./components/TodoCalendar";
import TodoViewNote from "./components/TodoViewNote";
import TodoEditNote from "./components/TodoEditNote";
import { Container, Row } from "react-bootstrap";
function App() {
  return (
    <Container fluid>
      <Row>
        <TodoCalendar />
        <TodoViewNote />
      </Row>
      <Row>
        <TodoAddNote />
        <TodoEditNote />
      </Row>
    </Container>
  );
}

export default App;
