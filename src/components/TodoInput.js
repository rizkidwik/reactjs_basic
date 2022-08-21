import React, { Component } from "react";

export default class TodoInput extends Component {
    render() {
        return (
            <div className="card card-body">
                <form action="">
                    <div className="form-group">
                        <label>Title</label>
                        <input
                        type="text"
                        name="title"
                        className="form-control text-capitalize"
                        placeholder="add a todo item"
                    />
                    </div>
                    <div className="form-group form-check">
                        <label>Title</label>
                        <input
                        type="checkbox"
                        name="completed"
                        className="form-check-input"
                    />
                    <label className="form-check-label">Completed</label>
                    </div>
                </form>
            </div>

        )
    }
}