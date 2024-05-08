import React from 'react';

const InfoBlock = ({ title, infoUrl }) => {
  const handleInfoClick = () => {
    window.open(infoUrl, '_blank');
  };

  const styles = {
    cursor: 'Pointer'
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card cursor-pointer" style={styles} onClick={handleInfoClick}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* Add additional content or links here */}
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
