import React, { Component } from "react"
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://www.gtiarmoredcars.com/wp-content/uploads/2021/02/62681-flat-icons-face-computer-design-avatar-icon.png" alt="profile" className="profilepic"/>
                <Social />
            </div>
        )
    }
}

export default Home;