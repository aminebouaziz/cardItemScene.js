var cta = document.getElementById("cta");
var scene = new Scene(
  {
    ".container": [
      {
        transform: "scale(.7)",
        opacity: 0
      },
      {
        transform: "scale(1)",
        opacity: 1
      }
    ]
  },
  {
    duration: 2,
    easing: Scene.EASE_IN_OUT,
    selector: true
  }
).playCSS();

var scene2 = new Scene(
  {
    "#cta": {
      0: {
        transform: {
          scale: 1
        }
      },
      0.3: {
        transform: {
          scale: 3
        }
      },
      0.5: {
        transform: {
          scale: 1
        }
      }
    },
    ".container": {
      0.4: {
        transform: "scale(1)",
        height: "5%",
        opacity: 1
      },
      0.7: {
        height: "60%"
      }
    },
    ".info": {
      0.7: {
        display: "block",
        opacity: 0
      },
      1.5: {
        opacity: 1
      }
    },
    ".item": function(i) {
      return {
        0: {
          opacity: 0
        },
        0.6: {
          opacity: 1
        },
        options: {
          delay: i * 0.5
        }
      };
    }
  },
  {
    easing: Scene.EASE_IN_OUT,
    selector: true
  }
);

cta.addEventListener("click", () => {
  if (scene2.getDirection() === "normal") {
    scene2.playCSS();
    scene2.setDirection("reverse");
  } else {
    scene2.removeItem("#cta");
    scene2.playCSS();
    scene2.setDirection("normal");
  }
});
