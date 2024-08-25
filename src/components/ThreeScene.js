import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import starTexture from "../images/star.png"; // Ensure the star.png file is in the src folder

const Starfield = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current; // Store the initial value of mountRef.current
    let scene, camera, renderer, stars, starGeo;
    let velocities = [], accelerations = [];

    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio); // Improve the quality on high-DPI screens
      currentMount.appendChild(renderer.domElement);

      starGeo = new THREE.BufferGeometry();
      
      const isMobile = window.innerWidth <= 768; // Mobile screen size
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024; // Tablet screen size
      
      let starCount;
      if (isMobile) {
        starCount = 2000; // Fewer stars for mobile devices
      } else if (isTablet) {
        starCount = 4000; // Moderate number of stars for tablets
      } else {
        starCount = 6000; // Full star count for desktops
      }
      
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

      let sprite = new THREE.TextureLoader().load(starTexture);
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: isMobile ? 0.4 : (isTablet ? 0.6 : 0.7), // Smaller star size on mobile, medium on tablet
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

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default Starfield;
