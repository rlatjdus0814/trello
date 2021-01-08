import React from 'react';
import '../../App.css';
    
class Textarea extends React.Component {
  render() {
    return (
      <div className="textarea">
        <div className="card-compose-textarea">
          <textarea placeholder="Enter a title for this card..."></textarea>
        </div>
      </div>
    );
  }
}
    
    export default Textarea;