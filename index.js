let area = document.querySelector('#uuid');
let generateButton = document.querySelector('#generate');

generateButton.addEventListener('click', (e)=>{
    e.preventDefault();
    area.innerHTML = '';
    console.log(generateUUID());
    let uuid = generateUUID();
    area.innerHTML = uuid;
});

const generateUUID = ()=>{
    // 'xxxxxxxx-xxxx-4xxxxxxx-yxxx-xxxxxxxx'
    let dateTime = new Date().getTime();
    let uuid = '2xxxxxxx-0xxx-4xxxxxxx-yxxx-1xxxxxxx'.replace(/[xy]/g, (v)=>{
        let reg = (dateTime + Math.random()*32)%32 | 0;
        dateTime = Math.floor(dateTime/32);
        return (v==='x' ? reg: (reg&0x2|0x3|0x5|0x8)).toString(32);
    });
    return uuid;
};