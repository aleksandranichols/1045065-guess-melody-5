import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from './audio-player';

const circleStyle = {
  filter: `url(#blur)`,
  tranform: `rotate(-90deg) scaleY(-1)`,
  transformOrigin: `center`
};

class GenreGame extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [],
      whichIsPlaying: null
    };

    this.style = ``;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.updatePlayerIndex = this.updatePlayerIndex.bind(this);
  }

  _addAnswer(value) {
    let answers = this.state.answers;
    return answers.includes(value) ? answers.filter((answer) => answer !== value) :
      answers.concat(value);
  }

  handleInputChange(evt) {
    const {value} = evt.target;
    this.setState({answers: this._addAnswer(value)});
  }

  handleFormSubmit(evt) {
    evt.preventDefault();

    const {game} = this.props;

    this.props.onAnswer(this.state.answers, game.style);
  }

  updatePlayerIndex(index) {
    this.setState({whichIsPlaying: index});
  }

  render() {
    const {game} = this.props;
    const {type, style, songs} = game;

    this.style = style;

    return <section className={`game game--${type}`}>
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={circleStyle}/>
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {style} треки</h2>
        <form className="game__tracks" onSubmit={this.handleFormSubmit}>
          {songs.map((song, i) =>
            <div key={song.style} className="track">
              <AudioPlayer songSrc={song.src} updatePlayerIndex={this.updatePlayerIndex}
                whichIsPlaying={this.state.whichIsPlaying} i={i} />
              <div className="game__answer">
                <input className="game__input visually-hidden" onChange={this.handleInputChange} type="checkbox" name="answer"
                  value={`answer-${i}`} id={`answer-${i}`} />
                <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
              </div>
            </div>
          )}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }
}

GenreGame.propTypes = {
  game: PropTypes.shape({
    type: PropTypes.string.isRequired,
    style: PropTypes.string,
    songs: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          style: PropTypes.string
        }).isRequired
    )
  }),
  onAnswer: PropTypes.func
};

export default GenreGame;
