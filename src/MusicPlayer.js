import React, { Component } from 'react';

class MusicPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            playlist: [
                "0.mp3",
                "1.mp3",
                "2.mp3"
            ]
        };
        this.ref = React.createRef();
        this.nextMusic = this.nextMusic.bind(this);
    }
    nextMusic() {
        console.log("music ends");
        const nextIndex = (this.state.currentIndex === (this.state.playlist.length - 1)) ? 0 : this.state.currentIndex + 1;
        this.setState({
            currentIndex: nextIndex
        }, () => (this.ref.current.play()));
    }
    componentDidMount() {
    }
    render() {
        return (
            <
                audio
                className="Player"
                controls
                ref={this.ref}
                src={"music/" + this.state.playlist[this.state.currentIndex]}
                onEnded={this.nextMusic}
            >
            ok
            </audio>
        );
    }
}
export { MusicPlayer };
