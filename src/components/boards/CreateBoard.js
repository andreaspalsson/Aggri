import React, {Component, PropTypes} from 'react';

class CreateBoard extends Component {
    render() {
        return (
            <div>
                <input placeholder="Name" />
                <button>
                 Create Board
                </button>
            </div>
        );
    }
}

CreateBoard.propTypes = {

};

export default CreateBoard;