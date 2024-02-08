const clock = document.querySelector('.clock');

const currentTime = () => {
    const now = new Date();

    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    console.log(hour, min, sec);

    var d = new Date();
    d.toLocaleString();      
    d.toLocaleDateString();  
    d.toLocaleTimeString();

    const show = `
    <span>${hour}</span>:
    <span>${min}</span>:
    <span>${sec}</span>
    `
    clock.innerHTML =   d.toLocaleTimeString();
};

setInterval(currentTime, 1000);