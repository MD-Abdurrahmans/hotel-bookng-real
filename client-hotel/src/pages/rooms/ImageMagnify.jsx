import ReactImageMagnify from "react-image-magnify";

const ImageMagnify = ({ img1, img2 }) => {
  return (
    <div>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: `${img1}`,
          },
          largeImage: {
            src: `${img2}`,
            width: 1000,
            height: 480,
          },
          enlargedImageContainerStyle: {
            zIndex: "1500",
          },
          enlargedImageContainerDimensions: {
            width: "100%",
            height: "100%",
          },
        }}
      />
    </div>
  );
};

export default ImageMagnify;
