// import ModalVideo from "react-modal-video"; 


// const VideoPopup = ({
//   isVideoOpen,
//   setIsVideoOpen,
//   videoId = "bgMEvrd2E", 
  
// }:any ) => {
//   return (
//     <>
//       <ModalVideo
//         channel="youtube"
//         // autoplay
//         isOpen={isVideoOpen}
//         videoId={videoId}
//         onClose={() => setIsVideoOpen(false)}
//       />
//     </>
//   );
// };

// export default VideoPopup;


"use client";

interface VideoPopupProps {
  isVideoOpen: boolean;
  setIsVideoOpen: (isOpen: boolean) => void;
}

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
}: VideoPopupProps) => {
  if (!isVideoOpen) return null;

  return (
    <div
      className="video-modal-overlay"
      onClick={() => setIsVideoOpen(false)}
    >
      <div
        className="video-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="video-modal-close"
          onClick={() => setIsVideoOpen(false)}
          aria-label="Close video"
        >
          &times;
        </button>

        <video
          className="video-modal-player"
          controls
          autoPlay
          playsInline
        >
          <source
            src="/assets/video/main-home-video.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPopup;