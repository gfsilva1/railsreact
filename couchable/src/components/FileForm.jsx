import React, { useContext } from 'react'
import { AppContext } from '../App';

function FileForm() {
    // eslint-disable-next-line no-unused-vars
    const [latestCoach, setLatestCoach] = useContext(AppContext);
    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData();
        data.append("post[title]", event.target.title.value);
        data.append("post[image]", event.target.image.files[0]);
        submitToApi(data);
    }

    function submitToApi(data) {
        fetch("http://localhost:3000/api/v1/latest", {
            method: "POST",
            body: data
        })
        .then(response => response.json())
        .then(data => {
            setLatestCoach(data.image_url);
        })
        .catch((error) => console.error(error));
    }

    return (
    <div>
      <h1>FileForm</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title"/>
        <br />

        <label htmlFor='image'>Image</label>
        <input type="file" name="image" id="image"/>
        <br />

        <button type='submit'>Creat Coach</button>
      </form>
    </div>
  )
}

export default FileForm
