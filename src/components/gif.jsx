import React, { Component } from 'react';

class Gift extends Component {
  handleClicked = () => {
    this.props.changeSelectedGif(this.props.id);
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }

    const src = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClicked} />
    );
  }
}


export default Gift;
