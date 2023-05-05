const link = document.createElement('a')
link.href = 'https://www.livewellbakeoften.com/classic-banana-bread-recipe/'
link.textContent = 'Live Well Bake Often'

document.querySelector('#referenceLink').appendChild(link)


const step1 = document.createElement('li')
step1.textContent = 'Preheat the oven to 350°F (177°C). Spray a 9x5 loaf pan with nonstick cooking spray, line the pan with parchment paper, and set aside.'

const step2 = document.createElement('li')
step2.textContent = 'In a large mixing bowl, whisk together the flour, baking powder, baking soda, cinnamon, and salt.'

const step3 = document.createElement('li')
step3.textContent = 'In the bowl of a stand mixer fitted with the paddle attachment, or in a large mixing bowl using an electric mixer, mix together the butter, granulated sugar, and brown sugar for 4-5 minutes or until light and fluffy.'

const step4 = document.createElement('li')
step4.textContent = 'Mix in the eggs and vanilla, making sure to mix well after each addition. Stop and scrape down the sides of the bowl, then add the mashed banana and mix until fully combined.'

const step5 = document.createElement('li')
step5.textContent = 'Add the dry ingredients to the wet ingredients and mix until just combined, making sure not to overmix the batter. Gently stir in the chopped walnuts.'

const step6 = document.createElement('li')
step6.textContent = 'Scoop the batter into the prepared loaf pan and spread it around into one even layer.'

const step7 = document.createElement('li')
step7.textContent = 'Bake at 350°F (177°C) for 55-65 minutes or until a toothpick inserted into the center comes out clean. Tent with aluminum foil to prevent excess browning if needed.'

const step8 = document.createElement('li')
step8.textContent = 'Remove from the oven and allow to cool in the loaf pan for 20 minutes. Carefully remove the bread from the loaf pan and transfer to a wire rack to cool completely.'

const steps = [step1,step2,step3,step4,step5,step6,step7,step8]
const instructions = document.querySelector('#instructions')

for (let i=0; i<steps.length; i++) {
    instructions.appendChild(steps[i]);
}
