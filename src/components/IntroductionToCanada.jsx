import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import './IntroductionToCanada.css'; // Create this file for custom styles

const IntroductionToCanada = () => {
  return (
    <Container className="mt-5">
      <div className="mb-5">
        <h2>Culture</h2>
        <p>
          Canada is known for its diverse and multicultural society. Canadians are known for their politeness, friendliness, and respect for diversity. The country celebrates a variety of cultural events and festivals throughout the year. Popular festivals include the Calgary Stampede, Toronto International Film Festival, and Montreal Jazz Festival. Canadians take pride in their country's commitment to cultural inclusivity and respect for all traditions and beliefs.
        </p>
        <Image src="https://images.unsplash.com/photo-1610141353646-14306dc6a9ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fluid className="my-3" alt="Canadian Culture" />
      </div>

      <div className="mb-5">
        <h2>History</h2>
        <p>
          Canada has a rich history that dates back thousands of years with the Indigenous peoples who were the original inhabitants of the land. European colonization began in the 15th century, starting with John Cabot's exploration of Newfoundland. In 1867, the British North America Act united three colonies into a single country called Canada. Over time, more provinces and territories joined the Confederation. Today, Canada is a thriving democracy with a strong commitment to equality and human rights.
        </p>
        <Image src="https://images.unsplash.com/photo-1705508100306-fcd3f0d35148?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fluid className="my-3" alt="Canadian History" />
      </div>

      <div className="mb-5">
        <h2>Diversity</h2>
        <p>
          Canada is one of the most diverse countries in the world, with a population that includes people from various ethnic, cultural, and religious backgrounds. This diversity is reflected in Canadian society, arts, and cuisine. Canada has two official languages, English and French, and supports multiculturalism as a national policy. The country is also home to vibrant immigrant communities from around the globe, contributing to a rich mosaic of cultural traditions and practices.
        </p>
        <Image src="https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fluid className="my-3" alt="Canadian Diversity" />
      </div>

      <div className="mb-5">
        <h2>Major Cities</h2>
        <p>
          Canada has several major cities, each with its own unique charm and attractions:
        </p>
        <ul>
          <li><strong>Toronto</strong>: The largest city in Canada, known for its iconic skyline, CN Tower, and multicultural population. It is a major center for finance, arts, and culture.</li>
          <li><strong>Vancouver</strong>: Known for its stunning natural beauty, including mountains and the Pacific Ocean. It is a hub for outdoor activities and a gateway to exploring British Columbia.</li>
          <li><strong>Montreal</strong>: A vibrant city with a rich cultural scene and French heritage. It is famous for its festivals, cuisine, and historic architecture.</li>
          <li><strong>Calgary</strong>: Famous for its annual Calgary Stampede, a celebration of Western heritage, and its proximity to the Rocky Mountains.</li>
          <li><strong>Ottawa</strong>: The capital city of Canada, home to national institutions, landmarks like Parliament Hill, and numerous museums and galleries.</li>
        </ul>
        <Image src="https://images.unsplash.com/photo-1519832979-6fa011b87667?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fluid className="my-3" alt="Canadian Cities" />
      </div>

      <div className="mb-5">
        <h2>Provinces and Territories</h2>
        <p>
          Canada is made up of ten provinces and three territories, each with its own distinct geography and cultural identity:
        </p>
        <ul>
          <li>Alberta</li>
          <li>British Columbia</li>
          <li>Manitoba</li>
          <li>New Brunswick</li>
          <li>Newfoundland and Labrador</li>
          <li>Nova Scotia</li>
          <li>Ontario</li>
          <li>Prince Edward Island</li>
          <li>Quebec</li>
          <li>Saskatchewan</li>
          <li>Northwest Territories</li>
          <li>Nunavut</li>
          <li>Yukon</li>
        </ul>
        <p>
          Each province and territory has its own government, which is responsible for areas such as education and healthcare. This decentralized approach allows for regional diversity and local governance.
        </p>
      </div>

      <div className="mb-5">
        <h2>Map</h2>
        <div className="map-container">
          <MapContainer center={[56.1304, -106.3468]} zoom={4} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[45.4215, -75.6972]}>
              <Popup>
                Ottawa, the capital city of Canada.
              </Popup>
            </Marker>
            {/* Add more markers for other major cities */}
          </MapContainer>
        </div>
      </div>
    </Container>
  );
};

export default IntroductionToCanada;
