// ThreeScene.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, starGeo, stars;

    // Initialize the scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create star geometry
    starGeo = new THREE.Geometry();
    for (let i = 0; i < 6000; i++) {
      let star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
      starGeo.vertices.push(star);
    }

    // Load the star texture
    let sprite = new THREE.TextureLoader().load('../images/star.png');
    let starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.7,
      map: sprite,
    });

    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);

    // Animation loop
    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef}></div>;
};

export default ThreeScene;
