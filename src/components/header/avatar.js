import {createElement} from 'ardelon-create-element';

const loadAvatar = () => {

    const avatar =createElement({classList:['avatar-container']});
    const layerOne = createElement({classList:['avatar-bg-layer-template', 'layer-1']})
    const layerTwo = createElement({classList:['avatar-bg-layer-template', 'layer-2']})
    const layerThree = createElement({classList:['avatar-bg-layer-template', 'layer-3']})


    avatar.append(layerOne,layerTwo,layerThree)

    return avatar

}

export default loadAvatar