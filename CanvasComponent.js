import React, { useEffect, useRef } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    const ctx = c.getContext('2d');
    let w = (c.width = window.innerWidth);
    let h = (c.height = window.innerHeight);

    function Pixel(x, y, s) {
      this.x = x;
      this.y = y;
      this.s = s;
      this.gx = 0;
      this.gy = 0;
      this.vx = Math.random() * 10 - 5;
      this.vy = Math.random() * 10 - 5;
      this.c = 0;
    }

    Pixel.prototype = {
      constructor: Pixel,
      update: function () {
        this.c += 0.1;

        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;

        this.x += this.vx;
        this.y += this.vy;

        if (this.x > w) {
          this.x = 0;
        } else if (this.x < 0) {
          this.x = w;
        }

        if (this.y > h) {
          this.y = 0;
        } else if (this.y < 0) {
          this.y = h;
        }

        this.gx = Math.floor(this.x / this.s) * this.s;
        this.gy = Math.floor(this.y / this.s) * this.s;
      },
      draw: function (ctx) {
        ctx.save();
        ctx.translate(this.gx, this.gy);
        ctx.fillStyle = 'hsl(' + this.c + ', 100%, 50%)';
        ctx.fillRect(0, 0, this.s, this.s);
        ctx.restore();
      },
    };

    const pixels = [];
    const itr = 200;
    let pixel;

    for (let i = 0; i < itr; i++) {
      pixel = new Pixel(
        Math.random() * w,
        Math.random() * h,
        Math.random() * 10
      );

      pixels.push(pixel);
    }

    const loop = () => {
      requestAnimationFrame(loop);

      ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < itr; i++) {
        pixel = pixels[i];
        pixel.update();
        pixel.draw(ctx);
      }
    };

    loop();

    // Handle window resize
    const handleResize = () => {
      const newW = window.innerWidth;
      const newH = window.innerHeight;

      w = c.width = newW;
      h = c.height = newH;

      pixels.forEach((pixel) => {
        pixel.x *= newW / w;
        pixel.y *= newH / h;
      });
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup: Remove event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  return <canvas ref={canvasRef} id="c" />;
};

export default CanvasComponent;
