import React, { useState } from "react";
import styles from "./Gallery.module.css";

const imageUrls = [
  "https://media.istockphoto.com/id/1066324992/photo/graduation-day.jpg?s=612x612&w=0&k=20&c=cleRpjTZbo430AbH-luZFYMMNqPwhwyTnFgWMbi_AiI=",
  "https://media.istockphoto.com/id/1297580844/photo/medical-students-writing-examination-paper.jpg?s=612x612&w=0&k=20&c=QFp2Qi5OoIFrmeB_90A4oukc7q17WK1oYzmgzMnkS1Y=",
  "https://media.istockphoto.com/id/458650719/photo/delhi-university-building-and-grounds.jpg?s=612x612&w=0&k=20&c=vOAOqdo52u8MahD7lHtA3bPhHM589ir1tokH34Ioz_0=",
  "https://media.istockphoto.com/id/143071446/photo/student-working-in-library-at-night.jpg?s=612x612&w=0&k=20&c=o46eCyJIm9DkkwzWwOjsVGKVzkf4FF4QHiLaeNwzfmI=",
  "https://media.istockphoto.com/id/1472090669/photo/girl-holding-paper-plane-dreaming-about-foreign-or-abroad-study-while-reading-or-preparing.jpg?s=612x612&w=0&k=20&c=-R6tfZlAFhh8uegOtN_DH2GZlAdOcdFvtmlxarolpIA=",
  "https://media.istockphoto.com/id/1135144614/photo/digital-tablet-and-eyeglasses-on-books-in-public-library.jpg?s=612x612&w=0&k=20&c=Ifr_Uo8NCchuXaEBJE7lZEtp7S0Ft79mXBCqusGFJF8=",
  "https://media.istockphoto.com/id/1079587192/photo/mid-adult-professor-teaching-a-lecture-from-desktop-pc-at-computer-lab.jpg?s=612x612&w=0&k=20&c=5uZGvFA6Sr7MNZl7Y-YwndvNR3E5Fex94ggHAdofTq4=",
  "https://media.istockphoto.com/id/1359179129/photo/young-man-stock-photo.jpg?s=612x612&w=0&k=20&c=988FdfMWmJurJt9UT00e481xNW8yGPHuXTsiRyJEy2Q=",
  "https://media.istockphoto.com/id/694725410/photo/university-students-studying-in-a-group.jpg?s=612x612&w=0&k=20&c=U59Nnkj7PRvvfZa3w7POhngttyykKgvWpd1JyVyF0fM=",
  "https://media.istockphoto.com/id/914314318/photo/young-man-using-laptop-with-female-student-watching-and-smiling.jpg?s=612x612&w=0&k=20&c=ky2a8mV2Fw8v4QYXFUtxAOOMs14lbOM5BPVyK1xw7-k=",
  "https://media.istockphoto.com/id/171271182/photo/delhi-university-building-and-corridor.jpg?s=612x612&w=0&k=20&c=3vcPST9RRxk71Xbbli8S7v4ytRRZ0yBiVh5eRPItHS0=",
  "https://media.istockphoto.com/id/1077755412/photo/new-found-college-buddies.jpg?s=612x612&w=0&k=20&c=qSGW3KViwNLfAH1TdhelaX9uX6LI5GEJx4ye8gNCSUw=",
  "https://media.istockphoto.com/id/1064946324/photo/a-picnic-on-a-field-inside-of-the-trinity-college-in-dublin-ireland.jpg?s=612x612&w=0&k=20&c=LnT1BPmwg15Eu8l-ZyiRmhlgntJSkV9SX9BNaHGB4P0=",
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className={styles.gallery}>
      <h2>Image Gallery</h2>
      <div className={styles.imageGrid}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={styles.imageContainer}
            onClick={() => handleImageClick(imageUrl)}
          >
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className={styles.modal}>
          <span className={styles.close} onClick={() => setSelectedImage(null)}>
            &times;
          </span>

          <img
            src={selectedImage}
            alt="Selected Image"
            className={styles.modalImage}
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
