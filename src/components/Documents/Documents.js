import React from "react";
import styles from "./Documents.module.scss";
import Card from "../Analytics/CardStyles/Card";
import { useState } from "react";

const Documents = () => {
  const [addDocument, setaddDocument] = useState("");

  const addDocumentHandler = (event) => {
    setaddDocument(event.target.value);
  };

  return (
    <div className={styles.Documents}>
      Documents
      <Card>
        <form onSubmit={addDocumentHandler} encType="multipart/form-data">
          {" "}
          <label for="documents">
            Select File{" "}
            <input
              id="document"
              name="document"
              type="file"
              value={addDocument}
              onChange={addDocumentHandler}
            ></input>
          </label>
          <button type="submit">Upload</button>
        </form>
      </Card>
    </div>
  );
};

export default Documents;
