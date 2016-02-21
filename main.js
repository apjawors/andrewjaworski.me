$(document).ready(function() {

  new WOW().init();

  $('.me').click(function() {
      $('.me-container').toggleClass('me-fade');
      $('.brain-container').toggleClass('brain-on');
  });

  $('.right-brain').hover(function() {
    $('.right-help').toggleClass('help-on')
  });

  $('.left-brain').hover(function() {
    $('.left-help').toggleClass('help-on')
  })

  $('.right-brain').click(function() {
      $('.right-brain-page').toggleClass('right-on');
      $('.code').toggleClass('wow bounceInLeft animated');
      $('.project').toggleClass('wow zoomInLeft animated');
      $('.music').toggleClass('wow bounceInRight animated');
      $('.song').toggleClass('wow zoomInRight animated');
      $('iframe').toggleClass('wow zoomInRight animated');
  });

  $('.left-brain').click(function() {
      $('.left-brain-page').toggleClass('left-on');
      $('label').toggleClass('label-on');
      $('input').prop("checked", false);
  });

});


// Particles.js
particlesJS('particles-js-left',  {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "color": {
      "value": "#b005bb"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#11d4e1",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 200,
        "duration": 0.4
      }
    }
  },
  "retina_detect": true
});
 
// Sketch.js 
function Particle( x, y, radius ) {
          this.init( x, y, radius );
      }
      Particle.prototype = {
          init: function( x, y, radius ) {
              this.alive = true;
              this.radius = radius || 10;
              this.wander = 0.15;
              this.theta = random( TWO_PI );
              this.drag = 0.92;
              this.color = '#fff';
              this.x = x || 0.0;
              this.y = y || 0.0;
              this.vx = 0.0;
              this.vy = 0.0;
          },
          move: function() {
              this.x += this.vx;
              this.y += this.vy;
              this.vx *= this.drag;
              this.vy *= this.drag;
              this.theta += random( -0.5, 0.5 ) * this.wander;
              this.vx += sin( this.theta ) * 0.1;
              this.vy += cos( this.theta ) * 0.1;
              this.radius *= 0.96;
              this.alive = this.radius > 0.5;
          },
          draw: function( ctx ) {
              ctx.beginPath();
              ctx.arc( this.x, this.y, this.radius, 0, TWO_PI );
              ctx.fillStyle = this.color;
              ctx.fill();
          }
      };
      // ----------------------------------------
      // Example
      // ----------------------------------------
      var MAX_PARTICLES = 280;
      var COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
      var particles = [];
      var pool = [];
      var demo = Sketch.create({
          container: document.getElementById( 'right-sketch' )
      });
      demo.setup = function() {
          // Set off some initial particles.
          var i, x, y;
          for ( i = 0; i < 20; i++ ) {
              x = ( demo.width * 0.5 ) + random( -100, 100 );
              y = ( demo.height * 0.5 ) + random( -100, 100 );
              demo.spawn( x, y );
          }
      };
      demo.spawn = function( x, y ) {
          if ( particles.length >= MAX_PARTICLES )
              pool.push( particles.shift() );
          particle = pool.length ? pool.pop() : new Particle();
          particle.init( x, y, random( 5, 40 ) );
          particle.wander = random( 0.5, 2.0 );
          particle.color = random( COLOURS );
          particle.drag = random( 0.9, 0.99 );
          theta = random( TWO_PI );
          force = random( 2, 8 );
          particle.vx = sin( theta ) * force;
          particle.vy = cos( theta ) * force;
          particles.push( particle );
      };
      demo.update = function() {
          var i, particle;
          for ( i = particles.length - 1; i >= 0; i-- ) {
              particle = particles[i];
              if ( particle.alive ) particle.move();
              else pool.push( particles.splice( i, 1 )[0] );
          }
      };
      demo.draw = function() {
          demo.globalCompositeOperation  = 'lighter';
          for ( var i = particles.length - 1; i >= 0; i-- ) {
              particles[i].draw( demo );
          }
      };
      demo.mousemove = function() {
          var particle, theta, force, touch, max, i, j, n;
          for ( i = 0, n = demo.touches.length; i < n; i++ ) {
              touch = demo.touches[i], max = random( 1, 4 );
              for ( j = 0; j < max; j++ ) {
                demo.spawn( touch.x, touch.y );
              }
          }
      };