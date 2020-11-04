import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = React.createRef();

    this.state = {
      isLoading: true,
      isPlaying: false
    };

    this._handleAudioPlay = this._handleAudioPlay.bind(this);
  }

  componentDidMount() {
    this._audio = this._audioRef.current;
    this.setState({isLoading: false});
  }

  componentDidUpdate() {
    const {whichIsPlaying, i} = this.props;

    if (whichIsPlaying !== i) {
      this.setState({isPlaying: false});
      this._audio.pause();
    }
  }

  _handleAudioPlay() {
    const {updatePlayerIndex, i} = this.props;

    this.setState({isPlaying: !this.state.isPlaying});

    if (this.state.isPlaying) {
      this._audio.pause();
    } else {
      this._audio.play();
    }

    if (updatePlayerIndex) {
      updatePlayerIndex(i);
    }
  }

  render() {
    const {songSrc} = this.props;
    const isLoading = this.state.isLoading;
    const isPlaying = this.state.isPlaying;

    return <React.Fragment>
      <button className={`track__button track__button--${isPlaying ? `pause` : `play`}`} type="button"
        disabled={isLoading} onClick={this._handleAudioPlay}></button>
      <div className="track__status">
        <audio ref={this._audioRef}>
          <source src={songSrc} type="audio/ogg" />
        </audio>
      </div>
    </React.Fragment>;
  }
}

AudioPlayer.propTypes = {
  i: PropTypes.number,
  whichIsPlaying: PropTypes.number,
  songSrc: PropTypes.string,
  updatePlayerIndex: PropTypes.func
};

export default AudioPlayer;
