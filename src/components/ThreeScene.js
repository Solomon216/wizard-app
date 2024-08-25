import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import starTexture from "../images/star.png";

const Starfield = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    let scene, camera, renderer, stars, starGeo;
    let velocities = [], accelerations = [];

    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio); // Ensure high resolution on all screens
      currentMount.appendChild(renderer.domElement);

      starGeo = new THREE.BufferGeometry();

      const starCount = window.innerWidth <= 768 ? 2000 : window.innerWidth <= 1024 ? 4000 : 6000; // Adjust star count
      const positions = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * 600 - 300;
        const y = Math.random() * 600 - 300;
        const z = Math.random() * 600 - 300;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
        velocities[i] = 0;
        accelerations[i] = 0.001;
      }

      starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const sprite = new THREE.TextureLoader().load(starTexture);
      const starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: window.innerWidth <= 768 ? 0.4 : window.innerWidth <= 1024 ? 0.6 : 0.7,
        map: sprite,
        transparent: true,
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      window.addEventListener('resize', onWindowResize, false);

      animate();
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      const positions = starGeo.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        velocities[i / 3] += accelerations[i / 3];
        positions[i + 1] -= velocities[i / 3];

        if (positions[i + 1] < -200) {
          positions[i + 1] = 200;
          velocities[i / 3] = 0;
        }
      }
      starGeo.attributes.position.needsUpdate = true;
      stars.rotation.y += 0.002;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    init();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (renderer && currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default Starfield;
