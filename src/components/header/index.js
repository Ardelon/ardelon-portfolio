import { createElement } from 'ardelon-create-element';
import loadAvatar from './avatar';
import loadInfoCard from './infoCard';
import './style.scss';

const loadHeader = () => {
	const header = createElement({ classList: ['header'] });
	const avatar = loadAvatar();
    const infoCard = loadInfoCard();
	header.append(avatar);
	document.body.append(header);
};

export default loadHeader;
