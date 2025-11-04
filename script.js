const colors = ['green','red','rgba(133,122,200)',
    '#f15025','pink','blue','brown','cyan','yellow',
    'purple','orange'
]

const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const change = document.querySelector('.change')


btn.addEventListener('click',getRandomNumber)

function getRandomNumber(){
     const getRandomColor = Math.floor(Math.random() * colors.length)
    console.log(getRandomColor)
    console.log("you clcik me")

    document.body.style.backgroundColor = colors[getRandomColor]
    color.textContent = colors[getRandomColor]

   const changeColor=  document.createElement('li')
   changeColor.className = 'change-cl'

   changeColor.style.color = colors[getRandomColor];
   changeColor.style.backgroundColor =  'black';
   changeColor.style.alignItems = 'center';
   changeColor.style.paddingLeft = '500px';
   
   change.appendChild(changeColor)
   changeColor.textContent =  colors[getRandomColor]
 
   
}



