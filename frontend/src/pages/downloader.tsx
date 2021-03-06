import { Component } from 'react';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import SelectDate from '../components/select-date';

interface IDownloaderState {}

interface IDownloaderProps extends RouteComponentProps<Component> {}

export default class Downloader extends Component<IDownloaderProps, IDownloaderState> {

  render() {
    return (<SelectDate />);
  }
}
