import * as React from 'react';
declare class Animate extends React.Component<any, any> {
    constructor(props: any);
    static propTypes: {
        animationEnter: React.Validator<any>;
        animationLeave: React.Validator<any>;
        durationEnter: React.Validator<any>;
        durationLeave: React.Validator<any>;
    };
    renderStyle: (animationEnter: string, animationLeave: string, durationEnter: number, durationLeave: number) => string;
    render(): JSX.Element;
}
export default Animate;
