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