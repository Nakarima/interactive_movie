import React, { useState } from 'react';
import { VideoNode } from '../models/VideoNode';
import YouTube from '@u-wave/react-youtube';
import Button from '@material-ui/core/Button';

interface VideoPageProps {
  videoNode: VideoNode;
  onLeftChildPicked: () => any;
  onRightChildPicked: () => any;
}

export const VideoPage = ({ videoNode, onLeftChildPicked, onRightChildPicked }: VideoPageProps) => {
  const [showControls, setShowControls] = useState(false);

  const controls = (
    <div className="Video-controls">
      <div className="Video-choice">
        <Button variant="contained" color="primary" onClick={() => {
          setShowControls(false);
          onLeftChildPicked();
        }} className="Video-choice-button">
          Wybierz lewy
        </Button>
        <Button variant="contained" color="primary" onClick={() => {
          setShowControls(false);
          onRightChildPicked();
        }} className="Video-choice-button">
          Wybierz prawy
        </Button>
      </div>
      <div className="Video-replay">
        <Button variant="contained" color="secondary" onClick={() => {
          setShowControls(false);
        }} className="Video-choice-button">
          Odtwórz ponownie
      </Button>
      </div>
    </div>
  );

  return (
    <>
      <YouTube
        className="Video"
        video={videoNode.url}
        showInfo={false}
        showCaptions={false}
        showRelatedVideos={false}
        annotations={false}
        allowFullscreen={false}
        onEnd={() => { setShowControls(true) }}
        autoplay
      />
      {showControls && controls}
    </>
  );
};
