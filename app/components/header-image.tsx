import { BoxBufferGeometry, Clock, EdgesGeometry, Mesh } from 'three';
import { Canvas, MeshProps, useFrame } from 'react-three-fiber';
import React, { useRef } from 'react';
import styled from 'styled-components';
import styles from 'styles/variables';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CanvasWrapper = styled.div`
  height: 20em;
  width: 20em;
`;

const MiddleCube = () => (
  <mesh position={[0, 0, 0]}>
    <boxBufferGeometry args={[3, 3, 3]} />
    <meshStandardMaterial color="black" transparent />
  </mesh>
);

const toRadians = (t: number) => (Math.PI / 180) * t;

const BottomCube: React.FC<MeshProps> = () => {
  const mesh = useRef<Mesh>();

  const clock = new Clock();
  let time = 0;
  let delta = 0;
  let radians = 0;

  useFrame(() => {
    if (mesh.current) {
      delta = clock.getDelta();
      time += delta;
      radians = toRadians(time) * 50;

      const newYPosition = -Math.abs(Math.sin(radians) / 2) - 3;
      mesh.current.position.y = newYPosition;
    }
  });
  const geometry = new BoxBufferGeometry(3, 3, 3);
  const edges = new EdgesGeometry(geometry);

  return (
    <mesh position={[0, -3, 0]} ref={mesh} geometry={geometry}>
      <boxBufferGeometry args={[3, 3, 3]} />
      <meshBasicMaterial color={styles.color.yellow} toneMapped={false} />
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="black" />
      </lineSegments>
    </mesh>
  );
};

const LeftCube: React.FC<MeshProps> = () => {
  const mesh = useRef<Mesh>();

  const clock = new Clock();
  let time = 0;
  let delta = 0;
  let radians = 0;

  useFrame(() => {
    if (mesh.current) {
      delta = clock.getDelta();
      time += delta;
      radians = toRadians(time) * 50;

      const newXPosition = Math.abs(Math.sin(radians) / 2) + 3;
      mesh.current.position.x = newXPosition;
    }
  });
  const geometry = new BoxBufferGeometry(3, 3, 3);
  const edges = new EdgesGeometry(geometry);

  return (
    <mesh position={[3, 0, 0]} ref={mesh} geometry={geometry}>
      <boxBufferGeometry args={[3, 3, 3]} />
      <meshBasicMaterial color={styles.color.yellow} toneMapped={false} />
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="black" />
      </lineSegments>
    </mesh>
  );
};

const RightCube: React.FC<MeshProps> = () => {
  const mesh = useRef<Mesh>();

  const clock = new Clock();
  let time = 0;
  let delta = 0;
  let radians = 0;

  useFrame(() => {
    if (mesh.current) {
      delta = clock.getDelta();
      time += delta;
      radians = toRadians(time) * 50;

      const newZPosition = Math.abs(Math.sin(radians) / 2) + 3;
      mesh.current.position.z = newZPosition;
    }
  });
  const geometry = new BoxBufferGeometry(3, 3, 3);
  const edges = new EdgesGeometry(geometry);

  return (
    <mesh position={[0, 0, 3]} ref={mesh} geometry={geometry}>
      <boxBufferGeometry args={[3, 3, 3]} />
      <meshBasicMaterial color={styles.color.yellow} toneMapped={false} />
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="black" />
      </lineSegments>
    </mesh>
  );
};

const HeaderImage = () => (
  <Wrapper>
    <CanvasWrapper>
      <Canvas camera={{ fov: 60, position: [-10, 6, -10] }}>
        <LeftCube />
        <RightCube />
        <MiddleCube />
        <BottomCube />
      </Canvas>
    </CanvasWrapper>
  </Wrapper>
);

export default HeaderImage;
