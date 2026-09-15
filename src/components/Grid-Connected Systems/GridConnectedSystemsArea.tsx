import React from 'react';
import Image from 'next/image';

import project_details_img_1 from '@/assets/images/resource/project-details1.jpg';
import project_details_img_2 from '@/assets/images/resource/service3.png';
import { TeamSocialLinks } from '../common/SocialLinks';

interface DataType {
  title_1: string;
  sm_des: string;
  title_2: string;
  sm_info: string;
  feature: string[];
}

const project_content: DataType = {
  title_1: 'Grid-Connected Solar Systems',

  sm_des:
    'Grid-connected solar systems allow your home or business to generate clean electricity from solar panels while remaining connected to the electricity grid. Solar power is used when it is available, and any excess electricity can be exported back to the grid. This provides a practical way to reduce electricity costs while making greater use of renewable energy.',

  title_2: 'How Grid-Connected Solar Works',

  sm_info:
    'A grid-connected solar system uses solar panels and an inverter to convert sunlight into usable electricity for your property. During the day, the solar energy generated can be used to power appliances and equipment. When your system produces more electricity than you need, the surplus can be sent to the electricity grid.',

  feature: [
    'Generate clean electricity from sunlight.',
    'Use solar energy directly within your home or business.',
    'Export excess solar electricity to the electricity grid.',
    'Reduce your reliance on electricity purchased from the grid.',
    'Monitor your system performance and solar energy production.',
  ],
};

const { title_1, sm_des, title_2, sm_info, feature } = project_content;

const GridConnectedSystemsArea = () => {
  return (
    <section className="project-details-section">
      <div className="container">
        <div className="row">

          {/* Main Image */}
          <div className="col-lg-6 col-md-6">
            <div className="projetct-details-image">
              <Image
                src={project_details_img_1}
                style={{ height: 'auto' }}
                alt="Grid-connected solar system"
              />
            </div>
          </div>

          {/* Information */}
          <div className="col-lg-6 col-md-6">
            <div className="info-area">
              <div className="sub-title">
                <h5>Information</h5>
              </div>

              <ul className="info">
                <li>
                  <h6>System:</h6>
                  <p>Grid-Connected Solar</p>
                </li>

                <li>
                  <h6>Application:</h6>
                  <p>Residential & Commercial</p>
                </li>

                <li>
                  <h6>Energy Source:</h6>
                  <p>Solar Energy</p>
                </li>

                <li>
                  <h6>Connection:</h6>
                  <p>Electricity Grid</p>
                </li>

                <li>
                  <h6>Benefits:</h6>
                  <p>Clean Energy & Reduced Electricity Costs</p>
                </li>

                <li>
                  <h6>Share:</h6>

                  <ul className="d-flex social_icon">
                    <TeamSocialLinks />
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Description */}
          <div className="col-lg-12">
            <div className="title">
              <h4>{title_1}</h4>
            </div>

            <p>{sm_des}</p>
          </div>

          {/* How It Works */}
          <div className="col-lg-12 list-part">
            <div className="row align-items-end">

              <div className="col-lg-8 col-md-12">
                <div className="title">
                  <h4>{title_2}</h4>
                </div>

                <p>{sm_info}</p>

                <ul className="desc-list">
                  {feature.map((item, i) => (
                    <li key={i}>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Secondary Image */}
              <div className="col-lg-4 col-md-12">
                <div className="image">
                  <Image
                    src={project_details_img_2}
                    style={{ height: 'auto' }}
                    alt="Solar energy system"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GridConnectedSystemsArea;