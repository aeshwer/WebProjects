import cat from './cat.jpg'

function addImage(){
    
    const img = document.createElement('img');
    img.alt='cat';
    img.width=300;
    img.src=cat;
    
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;