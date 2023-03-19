import React from 'react'
import './HostHomepage.css'

function HostHomepage () {
    return (
        <div class = "container">
        <form className = "host">
        <button className = "Button1"> Host an Event </button>

        </form>
        <form className = "history">
        <button className = "Button1"> Previously hosted events </button>

        </form>
        <form className = "verify">
        <button className = "Button1"> Events under verification </button>

        </form>
        </div>
    )
}

export default HostHomepage;