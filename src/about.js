export function createAbout() {
    const content = document.getElementById('content');
    content.style.gap = '5px';
    const lorem = document.createElement('div');
    lorem.className = 'lorem';

    lorem.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, architecto quae? 
                         Quibusdam sapiente reprehenderit, numquam veritatis dolores deserunt, nostrum 
                         optio odit nulla nobis nam explicabo obcaecati atque ad culpa eius.`
    lorem.style.color = '#333';
    lorem.style.textAlign = 'center';
    lorem.style.fontSize = '2rem';
    lorem.style.fontWeight = 'bold';
    lorem.style.marginTop = '30px';
    lorem.style.flex = '1';

    const email = document.createElement('div');
    email.className = 'email';
    email.textContent = 'restaurant@yayaya.com'          

    const phoneNum = document.createElement('div');
    phoneNum.className = 'phoneNum';
    phoneNum.textContent = "123-456-7890";

    content.appendChild(lorem);
    content.appendChild(email);
    content.appendChild(phoneNum);
}