import React, { Component, useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import { css } from "react-emotion";

const jsimg =
  "http://chittagongit.com//images/javascript-icon-png/javascript-icon-png-29.jpg";
const javaicon =
  "http://logos-vector.com/images/logo/lar/1/0/7/107942/Java_Duke_a556c_250x250.png";

const App = () => {
  const video = useRef();
  const [text, setText] = useState(
    <div
      className={css`
        display: flex;
        flex-direction: row;
      `}
    >
      <p>Javascript mother fucker do you speak it?</p>
      <img width={50} height={50} src={jsimg} alt="" />
    </div>
  );
  useEffect(() => {
    setTimeout(() => {
      setText(
        <div
          className={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <p>Yes, I know Java!</p>
          <img width={50} height={50} src={javaicon} alt="" />
        </div>
      );
    }, 3500);
    setTimeout(() => {
      setText(
        <div
          className={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <p>so what is the meaning of THIS in javascript???</p>
          <img width={50} height={50} src={jsimg} alt="" />
        </div>
      );
    }, 5500);
    setTimeout(() => {
      setText(
        <div
          className={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <p>I dont want to work here!</p>
          <img width={50} height={50} src={javaicon} alt="" />
        </div>
      );
    }, 8500);
    setTimeout(() => {
      setText(
        <div
          className={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <p>What is your salary expectations?</p>
          <img width={50} height={50} src={jsimg} alt="" />
        </div>
      );
    }, 11000);
    setTimeout(() => {
      setText(
        <div
          className={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <p>1 million dollars</p>
          <img width={50} height={50} src={javaicon} alt="" />
        </div>
      );
    }, 17000);
    setTimeout(() => {
      setText(
        <div
          className={css`
            display: flex;
            flex-direction: row;
          `}
        >
          <p>OK, you are hired mother fucker!</p>
          <img width={50} height={50} src={jsimg} alt="" />
        </div>
      );
    }, 19000);
  }, []);
  return (
    <div className="App">
      <div
        className={css`
          position: relative;
          width: 500px;
          display: flex;
          justify-content: center;
          margin: 0 auto;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 10px;
            right: 30px;
            background: red;
            z-index: 1111;
          `}
        >
          {text}
        </div>
        <video
          ref={video}
          muted={true}
          autoPlay={true}
          width="100%"
          height="100%"
          controls={true}
        >
          <source
            src="http://s3.amazonaws.com/static-stage/DCO/video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default App;
