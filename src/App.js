import { Linktree, CHANNEL_TYPES } from 'linkees';
import './App.css';

const items = [
    {
        title: 'Streamate',
        subtitle: '@MissChaos1987 | Chat with me instantly ',
        type: CHANNEL_TYPES.WEBSITE,
        link: 'https://MissChaos1987.cammodels.com', //Cam Models Pofile
    },
    {
        title: 'OnlyFans',
        subtitle: '@MissChaos1987 | OnlyFans',
        type: CHANNEL_TYPES.WEBSITE,
        link: 'https://onlyfans.com/misschaos1987'
    },
    {
        title: 'Instagram',
        subtitle: '@MissChaos1987 |  Shots of my life 🙂',
        type: CHANNEL_TYPES.INSTAGRAM,
        link: 'https://instagram.com/MissChaos1987', //instagram profile link
    },
    {
        title: 'GitHub',
        subtitle: '@heysagnik | 🏡 to all my open-source projects',
        type: CHANNEL_TYPES.GITHUB,
        link: 'https://github.com/misschaos1987', //Github Profile link
    },
];

function App() {
  return (
    <Linktree cardItems={items} />
  );
}

export default App;
