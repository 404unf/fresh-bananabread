const reference = document.getElementById('reference')

const link = document.createElement('a')
link.href = 'https://www.livewellbakeoften.com/classic-banana-bread-recipe/'
link.textContent = <em>Live Well Bake Often</em>

document.querySelector('em').appendChild(link)