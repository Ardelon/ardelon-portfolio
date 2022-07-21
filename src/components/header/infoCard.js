import {createElement} from 'ardelon-create-element';

const loadInfoCard = () => {

    const infoCard = createElement({classList : ['info-card']})

    const nameText = createElement({type:'h1', classList:['name-text'], innerText:'Alihan Keskin'});

    infoCard.append(nameText)

    return infoCard
}

export default loadInfoCard