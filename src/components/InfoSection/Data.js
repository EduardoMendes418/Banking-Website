import { urlToRequest } from 'loader-utils';
import img  from '../../images/carros.svg';
import cardman  from '../../images/porco.svg';
import finance from '../../images/mobile.svg';
import carteira from '../../images/carteria.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: urlToRequest(img),
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTru = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet and a phone or computer',
    buttonLabel: 'Lear More',
    imgStart: true,
    img: urlToRequest(cardman),
    alt: 'PiggyBank',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'dollar',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: urlToRequest(finance),
    alt: 'finance',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjFour = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join ou Team',
    headline: 'Creating an account is extremely',
    description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you`re ready to .',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: urlToRequest(carteira),
    alt: 'finance',
    dark: false,
    primary: false,
    darkText: true
}


