import React, { useState } from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { pink, amber } from '@material-ui/core/colors';
import { VideoNode } from './models/VideoNode';
import Fullscreen from "react-full-screen";
import { HomePage } from './components/HomePage';
import { VideoPage } from './components/VideoPage';
import { EndPage } from './components/EndPage';


const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: amber,
  },
});


enum Page {
  videoPage,
  homePage,
  endPage,
}

interface AppProps {
  nodes: { [id: string]: VideoNode }
}

function App({ nodes }: AppProps) {
  const [page, setPage] = useState<Page>(Page.homePage);
  const [videoNode, setVideoNode] = useState<VideoNode>(nodes["1.1"]);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [path, setPath] = useState<string>("true");

  const pickChild = (videoNode?: VideoNode) => {
    if (videoNode !== undefined) {
      setPath(path + "-" + videoNode.id);
      return setVideoNode(videoNode);
    }
    setFullScreen(false);
    setPage(Page.endPage);
    return;
  };

  const resetState = () => {
    setPage(Page.homePage);
    setVideoNode(nodes["1.1"]);
    setFullScreen(false);
  };

  const renderPage = () => {
    switch (page) {
      case Page.homePage:
        return <HomePage
          onClick={() => {
            setPage(Page.videoPage);
            setFullScreen(true);
          }}
        />
      case Page.videoPage:
        return <VideoPage
          videoNode={videoNode}
          onLeftChildPicked={() => pickChild(nodes[videoNode.leftChild])}
          onRightChildPicked={() => pickChild(nodes[videoNode.rightChild])}
          onTruthPicked={() => pickChild(nodes[path])}
        />
      case Page.endPage:
        return <EndPage onClick={resetState} />
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Fullscreen
        enabled={fullScreen}
      >
        <div className="App">
          <div className="App-content">
            {renderPage()}
          </div>
          <footer className="App-footer">
            <p>Movie created by Antoni Buczek, Aleksandra Cichowska, Bernard Świątek, Julia Mojzysz, Magdalena Zych and Marcin Puczko.</p>
            <p>Website designed and developed by Marcin Puczko.</p>
          </footer>
        </div>
      </Fullscreen>
    </ThemeProvider >
  );
}

export default App;

