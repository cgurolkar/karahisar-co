let mainPosts = document.querySelectorAll(".main-post");
let posts = document.querySelectorAll(".post");

let j = 0;
let postIndex = 0;
let currentPost = posts[postIndex];
let currentMainPost = mainPosts[postIndex];

let progressInterval = setInterval(progress, 30); // 180

function progress() {
  if (j === 100) {
    j = -5;
    // reset progress bar
    currentPost.querySelector(".progress-bar__fill").style.width = 0;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = 0;
    currentPost.classList.remove("post--active");

    postIndex++;

    currentMainPost.classList.add("main-post--not-active");
    currentMainPost.classList.remove("main-post--active");

    // reset postIndex to loop over the slides again
    if (postIndex === posts.length) {
      postIndex = 0;
    }

    currentPost = posts[postIndex];
    currentMainPost = mainPosts[postIndex];
  } else {
    j++;
    currentPost.querySelector(".progress-bar__fill").style.width = `${j}%`;
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = `${j}%`;
    currentPost.classList.add("post--active");

    currentMainPost.classList.add("main-post--active");
    currentMainPost.classList.remove("main-post--not-active");
  }
}


gsap.registerPlugin('ScrollTrigger');

gsap.to('.project1-text', {
  opacity: 1,
  y: '0%',
  pin: true,
  duration: 3,
  scrollTrigger: {
    trigger: '#project1',
    start: 'top 50%',
    end: 'center 30%',
    // markers: true ,
    toggleActions: 'restart none none none',
  },
});

// gsap.to(".project1-images",
// {
// opacity: 1 ,

// pin: true ,
// duration: 3 ,
// delay:2,
// scrollTrigger: {
//     trigger: "#project1" ,
//     start: "top 60%" ,
//     end: "center 30%",
//     markers: true ,
//     toggleActions: "restart none none none"
//  }
// })

gsap.to('.project2-images', {
  opacity: 1,
  y: '0%',
  pin: true,
  duration: 3,
  scrollTrigger: {
    trigger: '#project2',
    start: 'top 30%',
    end: 'center center',
    //  markers: true ,
    toggleActions: 'restart none none none',
  },
});



let x = window.matchMedia('(max-width: 1024px)');

function slideProject2() {
  if (x.matches) {
    var index = 0;
    slideshow();

    function slideshow() {
      var i, x;
      x = document.getElementsByClassName('pro2-images');
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      index++;
      if (index > x.length) {
        index = 1;
      }
      x[index - 1].style.display = 'block';
      setTimeout(slideshow, 2000);
    }
  }
}

slideProject2(x);

function slideProject3() {
  if (x.matches) {
    var index = 0;
    slideshow();

    function slideshow() {
      var i, x;
      x = document.getElementsByClassName('pro3-images');
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      index++;
      if (index > x.length) {
        index = 1;
      }
      x[index - 1].style.display = 'block';
      setTimeout(slideshow, 2000);
    }
  }
}

slideProject3(x);

function slideProject4() {
  if (x.matches) {
    var index = 0;
    slideshow();

    function slideshow() {
      var i, x;
      x = document.getElementsByClassName('pro4-images');
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      index++;
      if (index > x.length) {
        index = 1;
      }
      x[index - 1].style.display = 'block';
      setTimeout(slideshow, 2000);
    }
  }
}

slideProject4(x);

function slideProject5() {
  if (x.matches) {
    var index = 0;
    slideshow();

    function slideshow() {
      var i, x;
      x = document.getElementsByClassName('pro5-images');
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      index++;
      if (index > x.length) {
        index = 1;
      }
      x[index - 1].style.display = 'block';
      setTimeout(slideshow, 2000);
    }
  }
}

slideProject5(x);


function slideProject6() {
  if (x.matches) {
    var index = 0;
    slideshow();

    function slideshow() {
      var i, x;
      x = document.getElementsByClassName('pro6-images');
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      index++;
      if (index > x.length) {
        index = 1;
      }
      x[index - 1].style.display = 'block';
      setTimeout(slideshow, 2000);
    }
  }
}

slideProject6(x);

function slideProject7() {
  if (x.matches) {
    var index = 0;
    slideshow();

    function slideshow() {
      var i, x;
      x = document.getElementsByClassName('pro7-images');
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      index++;
      if (index > x.length) {
        index = 1;
      }
      x[index - 1].style.display = 'block';
      setTimeout(slideshow, 2000);
    }
  }
}

slideProject7(x);

function slideProject8() {
  if (x.matches) {
    var index = 0;
    slideshow();

    function slideshow() {
      var i, x;
      x = document.getElementsByClassName('pro8-images');
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      index++;
      if (index > x.length) {
        index = 1;
      }
      x[index - 1].style.display = 'block';
      setTimeout(slideshow, 2000);
    }
  }
}

slideProject8(x);

// slideProject8() ;
// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByTagName('img');
// the image in the modal
var modalImg = document.getElementById('img01');
// and the caption in the modal
var captionText = document.getElementById('caption');

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function (evt) {
    console.log(evt);
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

var span = document.getElementsByClassName('close')[0];

span.onclick = function () {
  modal.style.display = 'none';
};
document.addEventListener(
  'click',
  function (event) {
    // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
    if (event.target.closest('.modal')) {
      closeModal();
    }
  },
  false
);

function closeModal() {
  document.querySelector('.modal').style.display = 'none';
}

var index = 0;
slideshow();

function slideshow() {
  var i, x;
  x = document.getElementsByClassName('pro1-images');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  index++;
  if (index > x.length) {
    index = 1;
  }
  x[index - 1].style.display = 'block';
  setTimeout(slideshow, 2000);
  console.log('changed image');
}
// const showAnim = gsap.from('.main-header', { 
//   yPercent: -100,
//   paused: true,
//   duration: 0.3
// }).progress(1);

// ScrollTrigger.create({
//   start: "top top",
//   end: 99999,
//   onUpdate: (self) => {
//     self.direction === -1 ? showAnim.play() : showAnim.reverse()
//   }
// });