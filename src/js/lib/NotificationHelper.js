export default {
  title: 'Awesomeness',
  message: 'Awesome Notifications!',
  type: 'success',
  container: 'bottom-right',
  insert: 'top',

  dismissable: {
    click: true,
    touch: false
  },

  dismissIcon: null,

  animationIn: ['animated', 'fadeIn'],
  animationOut: ['animated', 'fadeOut'],

  slidingEnter: {
    duration: 600,
    cubicBezier: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    delay: 0
  },

  slidingExit: {
    duration: 600,
    cubicBezier: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    delay: 0
  },

  touchSlidingBack: {
    duration: 600,
    cubicBezier: 'ease-in',
    delay: 0
  },

  touchSlidingExit: {
    swipe: {
      duration: 600,
      cubicBezier: 'ease-in',
      delay: 0,
    },
    fade: {
      duration: 300,
      cubicBezier: 'ease-in',
      delay: 0
    }
  },

  dismiss: {
    duration: 5000
  }
};
