import React from 'react';

function EducationSection() {
  return (
    <div className="educationSection">
      {/* <h1>Simple Responsive Vertical Timeline Layout</h1> */}
      {/* <div className="timeline">
       
        <h2 className="timeline__item timeline__item--year">2014</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">10th</h3>
          <p className="timeline__blurb">Madhya Pradesh Board </p>
          <h5 className="timeline__blurb">Ideal H. S. School, Indore, M. P. </h5>
        </div>

        <h2 className="timeline__item timeline__item--year">2015</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">12th</h3>
          <p className="timeline__blurb">Madhya Pradesh Board </p>
          <h5 className="timeline__blurb">Shri Barfani Convent H. S. School, Indore, M. P.</h5>
        </div>

        <h2 className="timeline__item timeline__item--year">2017</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">Under Graduation</h3>
          <p className="timeline__blurb">Bachelor of Computer Applications(BCA)</p>
          <h5 className="timeline__blurb">Dr. APJ Abdul Kalam University, Indore, M. P.</h5>
        </div>

        <h2 className="timeline__item timeline__item--year">2021</h2>

        <div className="timeline__item">
          <h3 className="timeline__title">Post Graduation</h3>
          <p className="timeline__blurb">Master of Computer Applications(MCA)</p>
          <h5 className="timeline__blurb">National Institute Of Technology, Tiruchirappalli</h5>
        </div>

        <h2 className="timeline__item timeline__item--year">2024</h2>
      </div> */}
      <div className='educationDiv'>
          <button className='education-year-btn'>2015</button>
          <div className='education-detail-box'>
            <h3>10th</h3>
            <p>Madhya Pradesh Board </p>
            <h5>Ideal H. S. School, Indore, M. P. </h5>
          </div>
      </div>
      <div className='educationDiv'>
          <button className='education-year-btn'>2017</button>
          <div className='education-detail-box'>
            <h3>12th</h3>
            <p>Madhya Pradesh Board </p>
            <h5>Shri Barfani Convent H. S. School, Indore, M. P.</h5>
          </div>
      </div>
      <div className='educationDiv'>
          <button className='education-year-btn'>2020</button>
          <div className='education-detail-box'>
            <h3 >Under Graduation</h3>
            <p >Bachelor of Computer Applications(BCA)</p>
            <h5 >Dr. APJ Abdul Kalam University, Indore, M. P.</h5>
          </div>
      </div>
      <div className='educationDiv'>
          <button className='education-year-btn'>2024</button>
          <div className='education-detail-box'>
            <h3 >Post Graduation</h3>
            <p >Master of Computer Applications(MCA)</p>
            <h5 >National Institute Of Technology, Tiruchirappalli</h5>
          </div>
      </div>
    </div>
  );
}

export default EducationSection;
