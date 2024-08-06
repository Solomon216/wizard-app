import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = ({ className }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    let scene, camera, renderer, starGeo, stars;

    // Initialize the scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    // Create star geometry using BufferGeometry
    starGeo = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 6000; i++) {
      starVertices.push(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

    // Load the star texture
    const sprite = new THREE.TextureLoader().load('../images/star.png');
    const starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.7,
      map: sprite,
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    // Animation loop
    const animate = () => {
      starGeo.attributes.position.array.forEach((_, i) => {
        if (i % 3 === 1) { // Only update y coordinate
          starGeo.attributes.position.array[i] -= 0.1;
          if (starGeo.attributes.position.array[i] < -300) {
            starGeo.attributes.position.array[i] = 300;
          }
        }
      });

      starGeo.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on unmount
    return () => {
      currentMount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className}></div>;
};

export default ThreeScene;
