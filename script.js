/* below is my original code

const twitter = document.querySelector('.twitter');
const youtube = document.querySelector('.youtube');
const facebook = document.querySelector('.facebook');

const followerOfTwitter = 12000;
const followerOfYoutube = 3000;
const followerOfFacebook = 7500;

function counter(media, followers) {

    var follower = 0;
    const duration = 1000;

    setInterval(function() {
        if(follower === followers) clearInterval(this);
        else {
            follower +=100;
            media.textContent = follower;
        }
    }, duration/(followers/100));
}

counter(twitter, followerOfTwitter);
counter(youtube, followerOfYoutube);
counter(facebook, followerOfFacebook);

*/

/* below is the new code after I watched the Brad Traversy's solution */

const figures = document.querySelectorAll('.figure');

figures.forEach(figure => {

    figure.textContent = 0;

    function countFollowers() {
        const target = +figure.getAttribute('data-target');
        var follower = +figure.textContent;
        var increment = target / 500;

        if (follower < target) {
            figure.textContent = `${Math.ceil(follower + increment)}`
            setTimeout(countFollowers, 1)
        } else {
            figure.textContent = target;
        }
    }
    countFollowers();

})