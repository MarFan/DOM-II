// Your code goes here

window.addEventListener('load', () => {
    let magic = new KonamiCode(function(){
        TweenMax.to(document.querySelector('body'), .75, {
            rotation: 180,
            scale: -.5,
            x: 0,
            y: 0,
            ease: Power2.easeOut,
            repeat: 4
        });
    });
});

//select event
document.querySelectorAll('input[type="text"]').forEach(el => {
    el.addEventListener('select', (e) => {
        document.querySelector('.formSelection').style.display = 'block';
        document.querySelector('.formSelection').textContent = 'Text selection: ' + e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
    })
});

// kill the form
document.querySelector('form').addEventListener('submit', el => {
    el.preventDefault();
});
document.querySelector('form input[type="submit"]').addEventListener('click', el => {
    console.log(document.querySelector('form'))
    el.preventDefault();
});

let windowSize = window.innerWidth;

document.querySelectorAll('nav a').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
    });    
});


// mouseover event
const bigBus = document.querySelector('.intro img');
bigBus.addEventListener('mouseover', (e) => {
    bigBus.style.transform = "scale(1.35)";
    bigBus.style.transition = "transform 1s";
});

bigBus.addEventListener('mouseleave', (e) => {
    bigBus.style.transform = "scale(1)";
    bigBus.style.transition = "transform .25s";
});

// keydown event
let zoom = 1;
let myHome = document.querySelector('body');

document.addEventListener('keydown', (e) => {
    if(e.key === 'w'){
        zoom = ((zoom*100) + 5) / 100;
    }else if(e.key === 's'){
        zoom = ((zoom*100) - 5) / 100;
    }
    myHome.style.transform = "scale("+zoom+")";
    myHome.style.transition = "transform .5s";
    
});

// wheel event
document.querySelector('.img-content img').addEventListener('wheel', (e) => {
    let photoArray = [
        'https://images.unsplash.com/photo-1469037784699-75dcff1cbf75?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=65',
        'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=65',
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=65',
        'https://images.unsplash.com/photo-1434715961933-4cbf3d79230f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=65',
        'https://images.unsplash.com/photo-1470479111431-ad67d645dd70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=65'
    ];

    e.target.src = photoArray[Math.floor((Math.random() * photoArray.length))];
});


///
const destDiv = document.querySelectorAll('.destination');
destDiv.forEach(div => {
    div.addEventListener('click',() => {
        div.style.backgroundColor = "lightgray"
    })
    div.addEventListener('mouseleave',() => {
        div.style.backgroundColor = "white"
    })
})

// drag & drop event
const btnDrag = document.querySelectorAll('div.btn');
const clip = new Audio('https://www.myinstants.com/media/sounds/nooo.mp3');

btnDrag.forEach(el => {
    el.setAttribute('draggable', true);
    
    el.addEventListener('click', (btn) => {
        btn.stopPropagation();
    })

    // dblclick event
    el.addEventListener('dblclick', () => {
        el.style.display = "none";
        clip.play();
    });

    el.addEventListener('drag', () => {
        
    });

    el.addEventListener('dragstart', () => {
        el.style.opacity = '0.8';
    });

    el.addEventListener('dragend', () => {
        el.style.display = 'none';
        clip.play();
    });
});

// resize event
window.addEventListener('resize', () => {
    if(window.innerWidth < windowSize){
        console.log('Stop!  Your trying to squish me!');
        windowsSize = window.innerWidth;
    }else if(window.innerWidth > windowSize){
        console.log('You\'re pulling me apart!');
        windowsSize = window.innerWidth;
    }
});

document.querySelector('.inverse-content img').addEventListener('focus', (e) => {
    TweenMax.to(e.target, 1, {
        perspective: 500,
        rotationY: 360,
        yoyo: true,
        repeat: 1
    })
})

let myScroll = window.scrollY;
const scrollPic = document.querySelector('.content-destination img');

scrollPic.style.marginLeft = 0;

window.addEventListener('scroll', (e) => {
    if(window.scrollY < myScroll){
        myScroll = window.scrollY;
        scrollPic.style.marginLeft = (parseInt(scrollPic.style.marginLeft) + 2) + "px";
    }else{
        myScroll = window.scrollY;
        scrollPic.style.marginLeft = (parseInt(scrollPic.style.marginLeft) - 2) + "px";
    }
});

scrollPic.addEventListener('click', () => {
    scrollPic.style.marginLeft = 0;
})


// TweenMax.to(e.target, 1.25, {
//     y: 1000,
//     ease: Power2.eastOut,
//     yoyo: true,
//     repeat: 1
// })

// TweenMax.to(e.target, .75, {
//     scale: 1.5,
//     ease: Power2.easeOut,
//     yoyo: true,
//     repeat: 1
// });