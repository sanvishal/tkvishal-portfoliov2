import { clear } from 'console';
import dynamic from 'next/dynamic';
import type p5 from 'p5';
import { useEffect, useRef } from 'react';
import { P5Instance, P5WrapperProps } from 'react-p5-wrapper';
const ReactP5Wrapper = dynamic(
  () => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper as any),
  {
    ssr: false,
  }
) as unknown as React.NamedExoticComponent<P5WrapperProps>;

class Boid {
  p: P5Instance;
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  maxForce: number;
  maxSpeed: number;

  constructor(p: P5Instance) {
    this.p = p;
    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.velocity = p.createVector(p.random(-1, 1), p.random(-1, 1));
    this.velocity.setMag(p.random(2, 5));
    this.acceleration = p.createVector();
    this.maxForce = 0.06;
    this.maxSpeed = 3;
  }

  align(boids: Boid[]) {
    let perception = 70;
    let steering = this.p.createVector();
    let totalAvg = 0;
    for (let otherBoid of boids) {
      let dist = this.p.dist(
        this.position.x,
        this.position.y,
        otherBoid.position.x,
        otherBoid.position.y
      );
      if (otherBoid !== this && dist < perception) {
        totalAvg++;
        steering.add(otherBoid.velocity);
      }
    }

    if (totalAvg > 0) {
      steering.div(totalAvg);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }

    return steering;
  }

  cohesion(boids: Boid[]) {
    let perception = 130;
    let steering = this.p.createVector();
    let totalAvg = 0;
    for (let otherBoid of boids) {
      let dist = this.p.dist(
        this.position.x,
        this.position.y,
        otherBoid.position.x,
        otherBoid.position.y
      );
      if (otherBoid !== this && dist < perception) {
        totalAvg++;
        steering.add(otherBoid.position);
      }
    }

    if (totalAvg > 0) {
      steering.div(totalAvg);
      steering.sub(this.position);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }

    return steering;
  }

  seperation(boids: Boid[]) {
    let perception = 70;
    let steering = this.p.createVector();
    let totalAvg = 0;
    for (let otherBoid of boids) {
      let dist = this.p.dist(
        this.position.x,
        this.position.y,
        otherBoid.position.x,
        otherBoid.position.y
      );
      if (otherBoid !== this && dist < perception) {
        totalAvg++;
        let temp = this.position.copy();
        let diff = temp.sub(otherBoid.position);
        diff.div(dist);
        steering.add(diff);
      }
    }

    if (totalAvg > 0) {
      steering.div(totalAvg);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }

    return steering;
  }

  warpEdges() {
    if (this.position.x > this.p.width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = this.p.width;
    }

    if (this.position.y > this.p.height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = this.p.height;
    }
  }

  flock(boids: Boid[]) {
    let alignment = this.align(boids);
    let cohesion = this.cohesion(boids);
    let seperation = this.seperation(boids);
    this.acceleration.add(seperation).add(alignment).add(cohesion);
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
  }

  render() {
    this.p.strokeWeight(5);
    this.p.stroke(0);
    this.p.point(this.position.x, this.position.y);
  }
}

function sketch(p5: P5Instance) {
  const flock: Boid[] = [];
  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.smooth();
    for (let i = 0; i < 100; i++) {
      flock.push(new Boid(p5));
    }
  };

  p5.draw = () => {
    // p5.background(255, 255, 255, 0);
    p5.clear();
    for (let boid of flock) {
      boid.warpEdges();
      boid.flock(flock);
      boid.update();
      boid.render();
    }
  };
}

export default function BoidsSim() {
  const p5InstancRef = useRef<P5Instance>();

  useEffect(() => {
    return () => {
      if (p5InstancRef.current) {
        p5InstancRef.current.remove();
      }
    };
  }, []);

  return (
    <>
      <ReactP5Wrapper
        sketch={(p5) => {
          p5InstancRef.current = p5;
          sketch(p5);
        }}
      />
    </>
  );
}
