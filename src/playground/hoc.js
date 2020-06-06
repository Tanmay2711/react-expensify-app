import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>The user is authenticated : {props.info}</h1>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {

    return (props) =>(
        <div>
            {
                props.isAuthenticated && <WrappedComponent {...props} />
            }
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info='Tanmay V'/>, document.getElementById('app'));