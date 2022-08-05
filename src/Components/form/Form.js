import React from "react";

function Form({title, setTitle, desc, setDesc, setAddNote }) {

    const inputHandler = (e) => {
        if (e.target.id === "title") {
            setTitle(e.target.value)
        } else {
            setDesc(e.target.value)
        }
    }


    const errorHandler = () => {
        document.getElementById("title").classList.add("danger")
        document.getElementById("description").classList.add("danger")
    }


    const removeErrorHandler = () => {
        document.getElementById("description").classList.remove("danger")
        document.getElementById("title").classList.remove("danger")
    }


    const addNoteHandler = (e) => {
        e.preventDefault()
        if (title !== "" && desc !== "") {
            setAddNote((note) => {
                return (
                    [...note, {
                        title: title,
                        desc: desc,
                        id: new Date().getTime()
                    }]
                )
            })
            setTitle("")
            setDesc("")
            removeErrorHandler()
        }
        else if (title.length >= 10) {
            setAddNote((note) => {
                return (
                    [...note, {
                        title: title,
                        desc: desc,
                        id: new Date().getTime()
                    }]
                )
            })
            setTitle("")
            setDesc("")
            removeErrorHandler()
        }
        else if (title.length < 10 && title.length < 0 && desc !== "") {
            setAddNote((note) => {
                return (
                    [...note, {
                        title: title,
                        desc: desc,
                        id: new Date().getTime()
                    }]
                )
            })
            setTitle("")
            setDesc("")
            removeErrorHandler()
        }
        else {
            errorHandler()
        }
    };

    return (
        <div className="container">
            <form className="m-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter Title"
                        value={title}
                        onChange={inputHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>
                    <textarea name="description" id="description" className="form-control" rows="5" placeholder="Enter Description" onChange={inputHandler}
                        value={desc}></textarea>
                </div>

                <button type="submit" className="btn btn-primary" onClick={addNoteHandler}>
                    Add Note
                </button>
            </form>
        </div>
    );
}

export default Form;
