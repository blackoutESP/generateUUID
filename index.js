let area = document.querySelector('#uuid');
let generateButton = document.querySelector('#generate');

generateButton.addEventListener('click', (e)=>{
    e.preventDefault();
    area.innerHTML = '';
    //console.log(generateUUID());
    let uuid = generateUUID();
    area.innerHTML = uuid;
    console.log('eval:');
    if(eval(generateUUID) !== undefined){
        console.log(generateUUID());
    }
});

const generateUUID = ()=>{
    let date = new Date().getTime();
    let uuid = 'xxxxxxxx-yxxx-4xxxxxxx-xxxxx-xxxxxxxx'.replace(/[xy]/g, function(u){
        let reg = (date + Math.random()*32)%32 | 0;
        date = Math.floor(date/32);
        return (u === 'x' ? reg: (reg&0x3|0x8)).toString(32);
    });
    return uuid;
};
