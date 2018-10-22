import * as React from 'react';

interface IProps {
   compiler: string,
   framework: string,
   bundler: string
}
export class Hello extends React.Component<IProps, {}> {
   render() {
   return <h3>This is a <i>{this.props.framework}</i> application using <i>{this.props.compiler}</i> with <i>{this.props.bundler}</i></h3>
   }
}