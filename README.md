# Incrementing Counter

![screen recording](https://media.giphy.com/media/wi1fpvLk7p57OcGw9E/giphy.gif)

#### project notes

1. HTML
- container
- 3 divs
- 1st div: twitter icon, number, `<p>Twitter Followers</p>`
- 2nd div: YouTube icon, number, `<p>YuoTube Subscribers</p>`
- 3rd div: facebook icon, number `<p>Facebook Fans</p>`

2. CSS
- colour
- responsive

3. JavaScript
- onload increment numbers

+ Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML
- div for the follower numbers + add data-target attribute i.e. data-target="12000"
- span for the text
- fontawesome size: fa-3x

3. JavaScript
```
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target') 
        /* typeof counter.getAttribute('data-target') is string.
        to make it typeof = number, add Number function or + */
        
        const c = +counter.innerText

        const increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})
```