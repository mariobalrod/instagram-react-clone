import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, ProgressBar  } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { db, storage } from '../firebase/Config';
import firebase from 'firebase';

import BackupIcon from '@material-ui/icons/Backup';

const UploadModal = (props) => {
  const [show, setShow] = useState(false);

  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  useEffect(() => {
      if(progress === 100) {
          setShow(false);
      }
  }, [progress])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleChange = (e) => {
    e.preventDefault();
    setCaption(e.target.value);
  };

  const handleChangeFile = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
      e.preventDefault();
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

      uploadTask.on(
          "state_changed",
          (snapshot) => {
              // progress function 
              const progressCount = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progressCount);
          },
          (error) => {
              // error function
              console.log(error);
              alert(error.message);
          },
          () => {
              // final/complete function
              storage
                .ref('images')
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                  // Post image inside firebase db
                  db.collection("posts").add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: caption,
                    imageUrl: url,
                    username: props.username
                  });
                });

                // Reset Elements
                setProgress(0);
                setCaption('');
                setImage(null);
          }
      )
  }

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div className="mx-auto mt-5">
        <Link variant="primary" onClick={handleShow} style={{}}>
          <BackupIcon style={{ fontSize: 50 }} />
        </Link>
      </div>

      <Modal style={{marginTop: 200, background: "transparent"}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose a file to upload.</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form onSubmit={handleUpload}>
                <Form.Group style={{display: "flex-grow", alignItems: "center", justifyContent: "center"}}>
                    {/* Input File */}
                    <Form.Control type="file" onChange={handleChangeFile} />
                    {/* Text Area */}
                    <Form.Control name="caption" className="mt-4" as="textarea" rows="3" placeholder="Enter a description..." value={caption}  onChange={handleChange} />
                </Form.Group>
                {/* Progress Bar */}
                <ProgressBar now={progress} />

                <Button className="mt-5" variant="primary" type="submit" block>
                    Upload
                </Button>
            </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UploadModal;
