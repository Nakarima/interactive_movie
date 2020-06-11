import React, { useState } from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { pink, amber } from '@material-ui/core/colors';
import { VideoNode } from './models/VideoNode';
import Fullscreen from "react-full-screen";
import { HomePage } from './components/HomePage';
import { VideoPage } from './components/VideoPage';


const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: amber,
  },
});


enum Page {
  VIDEO_PAGE,
  HOME_PAGE,
  END_PAGE,
}


function App() {
  const nodes: { [id: string]: VideoNode } = {
    "1.1": {
      id: "1.1",
      url: "vxKBHX9Datw",
      leftChild: "1.2",
      rightChild: "1.3",
    },
    "1.2": {
      id: "1.2",
      url: "_3SCobZsB4E",
      leftChild: "end",
      rightChild: "end",
    },
    "1.3": {
      id: "1.3",
      url: "3bNITQR4Uso",
      leftChild: "end",
      rightChild: "end",
    },
  }

  const [page, setPage] = useState(Page.HOME_PAGE);
  const [videoNode, setVideoNode] = useState(nodes["1.1"]);
  const [fullScreen, setFullScreen] = useState(false)

  const nextChild = (videoNode?: VideoNode) => {
    if (videoNode !== undefined) {
      return setVideoNode(videoNode);
    }
    setFullScreen(false);
    setPage(Page.END_PAGE);
    return;
  };

  const renderPage = () => {
    switch (page) {
      case Page.HOME_PAGE:
        return <HomePage onClick={() => {
          setPage(Page.VIDEO_PAGE);
          setFullScreen(true);
        }} />
      case Page.VIDEO_PAGE:
        return <VideoPage
          videoNode={videoNode}
          onLeftChildPicked={() => nextChild(nodes[videoNode.leftChild])}
          onRightChildPicked={() => nextChild(nodes[videoNode.rightChild])}
        />
      case Page.END_PAGE:
        return <h1>End</h1>
    }
  }

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

