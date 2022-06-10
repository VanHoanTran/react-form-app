import React, {useRef} from "react";

const FileInputForm = () =>{

    const fileInput = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (fileInput.current.files.length ) {
            console.log(`Selected file - ${fileInput.current.files[0].name}`);
          }
          else{
              console.log("No file has been uploaded")
          }
    }


    return (
        <form onSubmit = {handleSubmit}>
            <label>
                Upload File:
            <input type="file" ref={fileInput}/>
            </label>

            <br />
            <br />
            <label>
                <button type="submit">Submit</button>
            </label>
        </form>
    )
}

export default FileInputForm;
