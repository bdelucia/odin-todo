import pizza from './cheesepizza.jpg';
import spaghetti from './spaghetti.jpg';
import chickyparmmenu from './Chicken-Parmesan-1.jpg';
import lasagna from './lasagna.jpg';
import alfredo from './alfredo.jpg';
import cacioepepe from './cacioepepe.jpg';
import risotto from './chickenrisotto.jpg';
import carbonara from './carbonara.jpg';
import tiramisu from './tiramisu.jpg';

export function createMenu() {
    const content = document.getElementById('content');
    content.style.justifyContent = 'center';
    content.style.padding = '10px';

    const menuGrid = document.createElement('div');
    menuGrid.style.display = 'grid';
    menuGrid.style.boxSizing = 'border-box';
    menuGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    menuGrid.style.maxWidth = '100%';

    const items = [
        { src: pizza, caption: 'Cheese Pizza' },
        { src: spaghetti, caption: 'Spaghetti' },
        { src: chickyparmmenu, caption: 'Chicken Parmigiana' },
        { src: lasagna, caption: 'Lasagna' },
        { src: alfredo, caption: 'Fettuccine Alfredo' },
        { src: cacioepepe, caption: 'Cacio e Pepe' },
        { src: risotto, caption: 'Risotto' },
        { src: carbonara, caption: 'Carbonara' },
        { src: tiramisu, caption: 'Tiramisu' },
    ];

    // Populate the grid
    items.forEach(item => {
        const gridItem = document.createElement('div');
        gridItem.style.textAlign = 'center'; 

        const image = document.createElement('img');
        image.src = item.src;
        image.alt = item.caption;
        image.style.height = '100px'; 
        image.style.width = '100px';

        const caption = document.createElement('p');
        caption.textContent = item.caption;      

        gridItem.appendChild(image);
        gridItem.appendChild(caption);
        menuGrid.appendChild(gridItem);
    });
    
    content.appendChild(menuGrid);
}