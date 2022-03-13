import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainBody from "../../components/MainBody";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log(notes[0].title);
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("http://localhost:5000/api/notes");
    setNotes(data);
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainBody title="Welcome Back Iron Man">
      <Link to="/">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Slice
        </Button>
      </Link>

      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <Accordion.Header eventKey="0">
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  {note.title}
                </span>
              </Accordion.Header>

              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  calssName="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>

            <Accordion.Body eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainBody>
  );
};

export default MyNotes;
