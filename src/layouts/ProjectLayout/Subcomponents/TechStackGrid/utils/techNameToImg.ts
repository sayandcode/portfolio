import html from "../stackImgs/html.webp";
import css from "../stackImgs/css.webp";
import scss from "../stackImgs/scss.webp";
import javascript from "../stackImgs/js.webp";
import webpack from "../stackImgs/webpack.webp";
import react from "../stackImgs/react.webp";
import mui from "../stackImgs/mui.webp";
import eslint from "../stackImgs/eslint.webp";
import prettier from "../stackImgs/prettier.webp";
import firebase from "../stackImgs/firebase.webp";
import algolia from "../stackImgs/algolia.webp";
import puppeteer from "../stackImgs/puppeteer.webp";
import framerMotion from "../stackImgs/framerMotion.webp";
import formik from "../stackImgs/formik.webp";
import yup from "../stackImgs/yup.webp";
import dateFns from "../stackImgs/dateFns.webp";
import astro from "../stackImgs/astro.webp";
import preact from "../stackImgs/preact.webp";
import typescript from "../stackImgs/typescript.webp";
import awsLambda from "../stackImgs/awsLambda.webp";
import awsApiGateway from "../stackImgs/awsApiGateway.webp";
import oauth2 from "../stackImgs/oauth2.webp";
import githubActions from "../stackImgs/githubActions.webp";
import mongodb from "../stackImgs/mongodb.webp";
import redis from "../stackImgs/redis.webp";
import websockets from "../stackImgs/websockets.webp";
import webRtc from "../stackImgs/webRtc.webp";
import tailwind from "../stackImgs/tailwind.webp";
import express from "../stackImgs/express.webp";
import mongoose from "../stackImgs/mongoose.webp";
import awsIam from "../stackImgs/awsIam.webp";
import zod from "../stackImgs/zod.webp";
import awsCdk from "../stackImgs/awsCdk.webp";

const srcMap = {
  html,
  css,
  scss,
  javascript,
  webpack,
  react,
  mui,
  eslint,
  prettier,
  firebase,
  dateFns,
  yup,
  formik,
  framerMotion,
  puppeteer,
  algolia,
  astro,
  preact,
  typescript,
  awsLambda,
  awsApiGateway,
  oauth2,
  githubActions,
  mongodb,
  redis,
  websockets,
  webRtc,
  tailwind,
  express,
  mongoose,
  awsIam,
  zod,
  awsCdk,
} as const;

function techNameToImg(techName: keyof typeof srcMap) {
  return srcMap[techName].src;
}

const techNames = Object.keys(srcMap) as Array<keyof typeof srcMap>;

export default techNameToImg;
export { techNames };
