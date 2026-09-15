
import React from 'react';

const MapArea = () => {
  return (
    <>
   <div className="map-area">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <iframe
                src="https://www.google.com/maps?q=WOTSO%20Varsity%20Lakes%2C%20Level%202%2F194%20Varsity%20Parade%2C%20Varsity%20Lakes%20QLD%204227%2C%20Australia&output=embed"
              width="1920"
              height="800"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
                title="WOTSO Varsity Lakes map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MapArea;