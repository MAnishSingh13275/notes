import React from "react";

function Modal({editId, addNote, setAddNote}) {
    const updateHandler = () => {
        const updateNotes = addNote.map((elem) => {
            if (editId === elem.id) {
                return ({
                    ...elem, title: document.getElementById("editTitle").value,
                    desc: document.getElementById("editDescription").value
                })
            }else{
                return elem;
            }
        })
        setAddNote(updateNotes);
    }   

    return (
        <div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="editNote" id="exampleModalLabel">
                                Edit Note
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {" "}
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="editTitle" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="editTitle"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="editDescription" className="form-label">
                                        Description
                                    </label>
                                    <textarea
                                        name="editDescription"
                                        id="editDescription"
                                        className="form-control"
                                        rows="5"
                                    ></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                onClick={updateHandler}
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
