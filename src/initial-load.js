import homeImage from './home.jpg'
export function createHome() {
    const content = document.getElementById('content');
    content.style.gap = '70px';
    content.style.padding = '35px';
    content.style.justifyContent = 'flex-start';

    const headline = document.createElement('div');

    headline.id = 'headline';
    headline.style.textAlign = 'center';
    headline.style.fontSize = '1rem';
    headline.style.fontWeight = '300';
    headline.textContent = `"You know, my father used to say, whatever you do, do it 100%. When you work, work. 
    When you laugh, laugh. When you eat, eat like it's your last meal."`;
    headline.style.alignSelf = 'flex-start';

    const homeImg = document.createElement('img');
    homeImg.src = homeImage;
    homeImg.style.height = '450px';
    
    content.appendChild(homeImg);
    content.appendChild(headline);
}