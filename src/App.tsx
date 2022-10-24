import React from 'react';
import './App.css';
import Linkees, { CHANNEL_TYPES } from './linkees';

const items = [
    {
        title: 'PornHub',
        subtitle: '@MissChaos1987 | Chat with me instantly ',
        type: CHANNEL_TYPES.PORNHUB,
        link: 'https://pornhub.com/model/MissChaos1987', //Cam Models Pofile
    },
    {
        title: 'CamModels',
        subtitle: '@MissChaos1987 | Chat with me on video!',
        type: CHANNEL_TYPES.CAMMODELS,
        link: 'https://MissChaos1987.cammodels.com', //Cam Models Pofile
    },
    {
        title: 'OnlyFans',
        subtitle: '@MissChaos1987 | OnlyFans',
        type: CHANNEL_TYPES.ONLYFANS,
        link: 'https://onlyfans.com/misschaos1987'
    },
    {
        title: 'Instagram',
        subtitle: '@MissChaos1987 | ',
        type: CHANNEL_TYPES.INSTAGRAM,
        link: 'https://instagram.com/MissChaos1987', //instagram profile link
    },
    {
        title: 'GitHub',
        subtitle: '@@misschaos1987 | 🏡 to my code, setup by my wifey 🧡',
        type: CHANNEL_TYPES.GITHUB,
        link: 'https://github.com/misschaos1987', //Github Profile link
    },
];

function App() {
  return (
    <Linkees name='Miss Chaos' cardItems={items}/>
  );
}

export default App;
