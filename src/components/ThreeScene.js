import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import starTexture from "../images/star.png";
import "./styles.css"

const Starfield = () => {
  const mountRef = useRef(null);
  const starCount = useRef(window.innerWidth <= 768 ? 2000 : window.innerWidth <= 1024 ? 4000 : 6000);
  const starSize = useRef(window.innerWidth <= 768 ? 0.4 : window.innerWidth <= 1024 ? 0.6 : 0.7);

  useEffect(() => {
    const currentMount = mountRef.current;
    let scene, camera, renderer, stars, starGeo;
    let velocities = [], accelerations = [];

    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(60, currentMount.clientWidth / currentMount.clientHeight, 1, 1000);
      camera.position.z = window.innerWidth <= 768 ? 2 : 1;
      camera.rotation.x = Math.PI / 2;

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      currentMount.appendChild(renderer.domElement);

      starGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(starCount.current * 3);

      for (let i = 0; i < starCount.current; i++) {
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
        size: starSize.current,
        map: sprite,
        transparent: true,
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      window.addEventListener('resize', onWindowResize, false);
      animate();
    }

    function onWindowResize() {
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
    }

    function animate() {
      if (document.hidden) {
        return;
      }
      requestAnimationFrame(animate);

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
    }

    init();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (renderer && currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      starGeo.dispose();
      stars.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="starfield-container" />;
};

export default Starfield;
