import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const circleStyle = {
  filter: `url(#blur)`,
  tranform: `rotate(-90deg) scaleY(-1)`,
  transformOrigin: `center`
};

class ArtistGame extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answer: ``
    };

    this.artist = ``;

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();

    const {value} = evt.target;
    this.setState({answer: value});

    this.props.onAnswer();

    return {artist: this.artist, answer: this.state.answer};
  }

  render() {
    const {game} = this.props;
    const {type, songs, answers} = game;

    this.artist = songs.artist;

    return <section className={`game game--${type}`}>
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={circleStyle} />
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio>
                <source src={songs.src} type="audio/ogg" />
              </audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {answers.map((answer, i) =>
            <div key={answer.artist} className="artist">
              <input className="artist__input visually-hidden" onChange={this.handleFormSubmit}
                type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
              <label className="artist__name" htmlFor={`answer-${i}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                {answer.artist}
              </label>
            </div>
          )}
        </form>
      </section>
    </section>;
  }
}

ArtistGame.propTypes = {
  game: PropTypes.shape({
    type: PropTypes.string.isRequired,
    songs: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          artist: PropTypes.string,
        }).isRequired
    ),
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          artist: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired
        }).isRequired
    )
  }),
  onAnswer: PropTypes.func
};

export default ArtistGame;
