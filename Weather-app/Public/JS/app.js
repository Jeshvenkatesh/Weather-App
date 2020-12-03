console.log('Console output from JS static file')

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(search.value);
    messageOne.textContent="Loading!"
    messageTwo.textContent = ""
    fetch('http://localhost:3000/weather?address='+ search.value ).then((response) => {
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error;
            // console.log(data.error)
        }else{
            // console.log(data.forecastdata)
            messageOne.textContent = data.forecastdata.feelslike;
            messageTwo.textContent = data.forecastdata.temperature
        }
    })
});
    e.target.reset()
});

