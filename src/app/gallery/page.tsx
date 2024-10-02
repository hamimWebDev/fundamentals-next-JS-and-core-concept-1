import Image from "next/image";
import React from "react";
import nextJsImg from "../../assets/nextJs.img.jpg";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold">Image Optimization</h1>
      <h3 className="text-2xl text-center">Regular Image tag</h3>
      <img
        src="https://media.licdn.com/dms/image/D4E12AQEIIDCbb5draA/article-cover_image-shrink_720_1280/0/1696065152678?e=2147483647&v=beta&t=vplfPARtNBS22Cj-JVaqLwndsIwkKLcJpAjwNOyphDc"
        alt="nextJs-img"
        className="mx-auto h-96"
      />

      <h3 className="text-2xl text-center">NextJs Image Components</h3>
      <Image
        src="https://media.licdn.com/dms/image/D4E12AQEIIDCbb5draA/article-cover_image-shrink_720_1280/0/1696065152678?e=2147483647&v=beta&t=vplfPARtNBS22Cj-JVaqLwndsIwkKLcJpAjwNOyphDc"
        alt="nextJs-img"
        height={550}
        width={550}
        className="mx-auto"
      />
      <h3 className="text-2xl text-center">Local Image</h3>
      <Image
        src={nextJsImg}
        alt="nextJs-img"
        height={550}
        width={550}
        className="mx-auto mb-10"
      />
    </div>
  );
};

export default GalleryPage;
