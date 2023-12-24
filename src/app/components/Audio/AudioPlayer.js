"use client"
// import { useRef, useState } from "react";
// import UilPlay from "@iconscout/react-unicons/icons/uil-play";
// import UilPause from "@iconscout/react-unicons/icons/uil-pause";

// const AudioPlayer = ({ src, color }) => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
  
//     const audio = audioRef.current;

//  const playPauseHandler = () => {
//       if (audio?.paused) {
//         audio.play();
//         setIsPlaying(true);
//       } else {
//         audio.src = ""
//         audio?.pause();
//         setIsPlaying(false);
//       }
//     };

//     audio.addEventListener("ended", () => {
//       setIsPlaying(false);
//     });

//   return (
//     <div>
//       <audio ref={audioRef} src={src}></audio>
//       <button onClick={() => playPauseHandler()}>
//         {isPlaying ? (
//           <UilPause size="18" className={color} />
//         ) : (
//           <UilPlay size="18" className={color} />
//         )}
//       </button>
//     </div>
//   );
// };

// export default AudioPlayer;

// // import { useEffect, useRef, useState } from "react";

// // const AudioPlayer = ({ src }) => {
// //   const audioRef = useRef(null);
// //   const [isPlaying, setIsPlaying] = useState(false);

// //   // useEffect(() => {
// //     const audio = audioRef.current;

// //     const playPauseHandler = () => {
// //       if (audio?.paused) {
// //         audio.play();
// //         setIsPlaying(true);
// //       } else {
// //         audio?.pause();
// //         audio.src = ""
// //         setIsPlaying(false);
// //       }
// //     };

// //     audio?.addEventListener("ended", () => {
// //       // Logika setelah pemutaran selesai, misalnya mengganti lagu berikutnya
// //       setIsPlaying(false);
// //     });

// //     // return () => {
// //     //   audio.pause();
// //     //   audio.src = ""; // Hentikan pemutaran dan reset sumber audio saat komponen unmount
// //     // };
// //   // }, [src]);

// //   return (
// //     <div>
// //       <audio ref={audioRef} src={src}></audio>
// //       <button onClick={() => playPauseHandler()}>
// //         {isPlaying ? "Pause" : "Play"}
// //       </button>
// //     </div>
// //   );
// // };

// // export default AudioPlayer;



// components/AudioPlayer.js

import { useEffect, useRef, useState } from 'react';

const AudioPlayer = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const handleCanPlayThrough = () => {
      if (isPlaying) {
        audio.play();
      }
    };

    audio.addEventListener('canplaythrough', handleCanPlayThrough);

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (audio) {
      if (audio?.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.src = ""
        audio?.pause();
        setIsPlaying(false);
      }

      // setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={audioUrl} preload="auto" loop={true} />
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;


