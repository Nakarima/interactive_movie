import React, { useState } from 'react';
import { VideoNode } from '../models/VideoNode';
import YouTube from '@u-wave/react-youtube';
import Button from '@material-ui/core/Button';

interface VideoPageProps {
  videoNode: VideoNode;
  onLeftChildPicked: () => any;
  onRightChildPicked: () => any;
  onTruthPicked: () => any;
}

export const VideoPage = ({ videoNode, onLeftChildPicked, onRightChildPicked, onTruthPicked }: VideoPageProps) => {
  const [shouldShowControls, setShouldShowControls] = useState(false);

  const choiceControls = (
    <div className="Video-controls">
      <div className="Video-choice">
        <Button variant="contained" color="primary" onClick={() => {
          setShouldShowControls(false);
          onLeftChildPicked();
        }} className="Video-choice-button">
          Wybierz {videoNode.leftChoice}
        </Button>
        <Button variant="contained" color="primary" onClick={() => {
          setShouldShowControls(false);
          onRightChildPicked();
        }} className="Video-choice-button">
          Wybierz {videoNode.rightChoice}
        </Button>
      </div>
      <div className="Video-replay">
        <Button variant="contained" color="secondary" onClick={() => {
          setShouldShowControls(false);
        }} className="Video-choice-button">
          Odtwórz ponownie
      </Button>
      </div>
    </div>
  );

  const truthControls = (
    <div className="Video-controls">
      <div className="Video-choice">
        <Button variant="contained" color="primary" onClick={() => {
          setShouldShowControls(false);
          onTruthPicked();
        }} className="Video-choice-button">
          Pokaz prawdę.
        </Button>
      </div>
      <div className="Video-replay">
        <Button variant="contained" color="secondary" onClick={() => {
          setShouldShowControls(false);
        }} className="Video-choice-button">
          Odtwórz ponownie
      </Button>
      </div>
    </div>
  );

  const endControls = (
    <div className="Video-controls">
      <div className="Video-choice">
        <Button variant="contained" color="primary" onClick={() => {
          setShouldShowControls(false);
          onLeftChildPicked();
        }} className="Video-choice-button">
          Zakończ.
        </Button>
      </div>
      <div className="Video-replay">
        <Button variant="contained" color="secondary" onClick={() => {
          setShouldShowControls(false);
        }} className="Video-choice-button">
          Odtwórz ponownie
      </Button>
      </div>
    </div>
  );

  const showControls = (videoNode: VideoNode) => {
    if (videoNode.leftChild === "truth") {
      return truthControls;
    } else if (videoNode.leftChild === "end") {
      return endControls;
    }
    return choiceControls;
  }

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
        onEnd={() => { setShouldShowControls(true) }}
        autoplay
      />
      {shouldShowControls && showControls(videoNode)}
    </>
  );
};
