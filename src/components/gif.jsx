import React, { Component } from 'react';

class Gift extends Component {

  handleClicked = () => {
    this.props.selectedGifId(this.props.id);
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClicked} />
    );
  }
}


export default Gift;
