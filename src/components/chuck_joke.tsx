import Joke from '../joke';

interface ChuckJokeProps extends Joke {
    id: number;
    joke: string;
    key: string;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({id, joke, key}) => <p>{joke}</p>;

export default ChuckJoke;
