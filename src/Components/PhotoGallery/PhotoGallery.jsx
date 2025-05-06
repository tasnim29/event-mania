import React from "react";
import pic1 from "../../assets/pic-1.jpeg";
import pic2 from "../../assets/pic-2.jpg";
import pic3 from "../../assets/pic-3.jpg";
import pic4 from "../../assets/pic-4.jpg";
import pic5 from "../../assets/pic-5.jpg";
import pic6 from "../../assets/pic-6.jpg";
import pic7 from "../../assets/pic-7.webp";
import pic8 from "../../assets/pic-8.png";
import pic9 from "../../assets/pic-9.jpg";
import pic10 from "../../assets/pic-10.jpg";

const galleryImages = [
  {
    src: pic1,
    caption:
      " A gallery wall filled with captivating architectural and travel photography",
    classes: "col-span-2 row-span-2 md:col-start-3 md:row-start-1 min-h-96",
  },
  {
    src: pic2,
    caption:
      "A vibrant local folk dance performance celebrating traditional heritage",
  },
  {
    src: pic3,
    caption:
      "Crowds enjoy a diverse array of local delicacies at the food fair",
  },
  {
    src: pic4,
    caption:
      " A behind-the-scenes look at a local video production or photography workshop",
  },
  {
    src: pic5,
    caption: "Visitors exploring contemporary artwork at a local gallery",
  },
  {
    src: pic6,
    caption:
      "An artisan demonstrates traditional weaving techniques during a craft fair",
  },
  {
    src: pic7,
    caption:
      "An artist painting live, showcasing skills in front of an interested audience",
  },
  {
    src: pic8,
    caption:
      "Fans gather around graphic novel and comic artwork at a local fan convention",
  },
  {
    src: pic9,
    caption:
      "Intricate scale models of modern city-capes presented at an urban design showcase",
  },
  {
    src: pic10,
    caption: " A cutting-edge AI-powered  drone showcased at a tech fair",
    classes: "col-span-2 row-span-2 md:col-start-1 md:row-start-3 min-h-96",
  },
];

const PhotoGallery = () => {
  return (
    <div>
      <section className="py-6">
        <div className="container flex flex-col items-center mx-auto  md:p-10 md:px-12">
          <h1 className="p-4 text-4xl text-primary shadow-2xl font-bold leading-none text-center">
            📸 Event Highlights
          </h1>
        </div>

        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded shadow-xl  ${image.classes}`}
            >
              <img
                src={image.src}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800  text-white text-sm p-2 text-center">
                {image.caption}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PhotoGallery;
