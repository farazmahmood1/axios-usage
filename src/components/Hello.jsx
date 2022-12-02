import React, { Component } from 'react'
export class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comments: '',
            topic : ''
        }
    }
    handelUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    handelCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    handelTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }
    handelSubmit = (e) => {
        e.preventDefault()
        // console.log(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`)
        console.log(`'username' ${this.state.username}, 'comments' ${this.state.comments}, 'topic' ${this.state.topic}`)
    }

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.value} onChange={this.handelUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handelCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handelTopicChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}


export default Hello