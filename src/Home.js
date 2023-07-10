import './Home.css'; // Import the CSS file for styling
import homeImage from './asset/student.png'; // Import the image
import React from 'react';



const Home = () => (
  <div>
    <h1>Student</h1>
    <div className="glass-box">
      <p><b>Details About Student</b></p>
      <img src={homeImage} alt="Home" className="glass-image" />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Parent Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anurag Roy</td>
            <td>12</td>
            <td>A</td>
            <td>Minaki Roy</td>
            <td>anuragroy7   
              @gmail.com</td>
          </tr>
          

     


          
          {/* <tr>
            <td>Jane Smith</td>
            <td>10</td>
            <td>B</td>
            <td>Michael Smith</td>
          </tr> */}
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  </div>
);

export default Home;
