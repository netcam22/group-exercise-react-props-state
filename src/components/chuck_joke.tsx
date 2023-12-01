import Joke from '../joke';

const ChuckJoke: React.FC<Joke> = ({id, joke}) => <p>{id}. {joke}</p>

export default ChuckJoke;
