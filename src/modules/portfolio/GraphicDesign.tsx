import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { cloudName } from '../../config/constants';

import styles from './graphic_design.module.scss';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Cloudinary = require('cloudinary-react');

const { Image, CloudinaryContext } = Cloudinary;

const GraphicDesign: React.FC = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(`https://res.cloudinary.com/${cloudName}/image/list/graphic.json`)
      .then((res) => {
        const publicIds = res?.data?.resources?.map(
          (item: { public_id: string }) => item.public_id
        );
        setImages(publicIds);
      });
  }, []);
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Graphic design</h2>
      <CloudinaryContext cloudName={cloudName}>
        <div className={styles.images}>
          {images.map((id) => (
            <Image
              className={styles.image}
              publicId={id}
              key={id}
              responsive
              responsiveUseBreakpoints="true"
              width="auto"
              dpr="auto"
              quality="auto"
              fetchFormat="auto"
            />
          ))}
        </div>
      </CloudinaryContext>
    </section>
  );
};

export default GraphicDesign;
