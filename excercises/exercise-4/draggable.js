// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class Draggable {
    constructor(x, y) {
      this.dragging = false; // Is the object being dragged?
      this.x = x;
      this.y = y;
      this.offsetX = 0;
      this.offsetY = 0;
    }

    shell(){
        shell = createImg("images/shell.png");
     shell.class('item');
    }

    spiky(){
        spiky = createImg("images/spiky.png");
      this.spiky.class('item');
    }

    sanddollar(){
        this.sanddollar= createImg("images/sanddollar.png");
        sanddollar.class('item');
    }
  
    update() {
      // Adjust location if being dragged
      if (this.dragging) {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
      }
    }
  
    pressed() {
      // Did I click on the rectangle?
        this.dragging = true;
        // If so, keep track of relative location of click to corner of rectangle
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
    }
  
    released() {
      // Quit dragging
      this.dragging = false;
    }
  }