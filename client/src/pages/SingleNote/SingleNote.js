import React, { useEffect, useState } from "react";
import MainBody from "../../components/MainBody";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, updateNoteAction } from "../../actions/noteActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import ReactMarkdown from "react-markdown";

function SingleNote({}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState("");
  const [isFetch, setIsFetch] = useState(false);

  const states = {
    userLogin: useSelector((state) => state.userLogin),
    noteUpdate: useSelector((state) => state.noteUpdate),
    noteDelete: useSelector((state) => state.noteDelete),
  };

  const { loading: loadingUpdate, error: errorUpdate } = states.noteUpdate;
  const { loading: loadingDelete, error: errorDelete } = states.noteDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
    navigate("/mynotes");
  };

  const fetching = async () => {
    const { data } = await axios.get(
      `/api/notes/${window.location.pathname.substring(6)}`
    );

    setTitle(data.title);
    setContent(data.content);
    setCategory(data.category);
    setDate(data.updatedAt);
    setIsFetch(true);
  };

  useEffect(() => {
    fetching();
  }, [navigate]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateNoteAction(
        window.location.pathname.substring(6),
        title,
        content,
        category
      )
    );
    if (!title || !content || !category) return;

    resetHandler();
    navigate("/mynotes");
    fetching();
  };

  return (
    <MainBody title="Edit Note">
      {!isFetch && <Loading />}
      {isFetch && (
        <Card>
          <Card.Header>Edit your Note</Card.Header>
          <Card.Body>
            <Form onSubmit={updateHandler}>
              {loadingDelete && <Loading />}
              {errorUpdate && (
                <ErrorMessage variant="danger">{errorUpdate}</ErrorMessage>
              )}
              {errorDelete && (
                <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
              )}
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="title"
                  placeholder="Enter the title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="content">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter the content"
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Form.Group>
              {content && (
                <Card>
                  <Card.Header>Note Preview</Card.Header>
                  <Card.Body>
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </Card.Body>
                </Card>
              )}

              <Form.Group controlId="content">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="content"
                  placeholder="Enter the Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>
              {loadingUpdate && <Loading size={50} />}
              <Button variant="primary" type="submit">
                Update Note
              </Button>
              <Button
                className="mx-2"
                variant="danger"
                onClick={() =>
                  deleteHandler(window.location.pathname.substring(6))
                }
              >
                Delete Note
              </Button>
            </Form>
          </Card.Body>

          <Card.Footer className="text-muted">
            Updated on - {date.substring(0, 10)}
          </Card.Footer>
        </Card>
      )}
    </MainBody>
  );
}

export default SingleNote;
