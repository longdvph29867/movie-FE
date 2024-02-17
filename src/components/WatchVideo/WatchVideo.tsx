import ModalVideo from "react-modal-video";
import { useDispatch, useSelector } from "react-redux";
import { setOptionVideo } from "../../Toolkits/watchVideoSlice";
import "../../../node_modules/react-modal-video/css/modal-video.min.css";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const optionVideo = useSelector(
    (state: any) => state.watchVideoSlice.optionVideo
  );
  const handleClose = () => {
    dispatch(setOptionVideo({ ...optionVideo, isOpen: false }));
  };
  return (
    <ModalVideo
      channel="youtube"
      isOpen={optionVideo.isOpen}
      youtube={{
        autoplay: 1,
        mute: 1,
      }}
      videoId={optionVideo.url.split("watch?v=")[1]}
      onClose={() => handleClose()}
    />
  );
};

export default WatchVideo;
