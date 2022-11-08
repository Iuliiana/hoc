import React from 'react';
import Popular from "../components/publications/Popular";
import New from "../components/publications/New";


export default function withHighlight(WrappedComponent) {
    class Highlight extends React.Component {
        render() {
            if (this.props.views > 1000) {
                return <Popular>
                    <WrappedComponent {...this.props}/>
                </Popular>;
            }
            if (this.props.views < 100) {
                return <New>
                    <WrappedComponent {...this.props}/>
                </New>;
            }

            return <WrappedComponent {...this.props}/>
        }
    }

    const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component';

    Highlight.displayName = `Highlight(${wrappedComponentName})`;
    return Highlight;
}
