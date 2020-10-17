import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import ArtistGame from './artist-game';
import GenreGame from './genre-game';

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };

    this.game = {
      ARTIST: `artist`,
      GENRE: `genre`
    };
  }

  render() {
    const {games} = this.props;

    const step = this.state.step;
    const game = games[step];

    if (this.state.step > 1) {
      return <Redirect to="/" />;
    }

    switch (game.type) {
      case this.game.ARTIST:
        return <ArtistGame game={game}
          onAnswer={() => this.setState({step: this.state.step + 1})}/>;
      case this.game.GENRE:
        return <GenreGame game={game}
          onAnswer={() => this.setState({step: this.state.step + 1})}/>;
      default:
        return <Redirect to="/" />;
    }
  }
}

GameScreen.propTypes = {
  games: PropTypes.array,
  game: PropTypes.shape({
    type: PropTypes.string.isRequired
  })
};

export default GameScreen;
