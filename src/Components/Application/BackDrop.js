import React from 'react'

class BackDrop extends React.Component {

    render() {
        const { closeBackdrop } = this.props
        return (
            <div onClick={closeBackdrop} className="backdrop">
                
            </div>
        )
    }
}


export default BackDrop;