import React from "react"
import { usePortfolio } from "../../views/portfolio.context"

function TopEducation() {
  const { educations, works } = usePortfolio()
  return (
    <div className='animate-element delay5 fadeInUp'>
      <div className='padding-bottom'>
        <div className='row'>
          {educations.map((data, i) => (
            <div
              className='col-lg-4 col-12 last-col animate-element wow delay5 fadeIn'
              data-wow-delay='0.3s'
              key={i}
            >
              <div
                className={`experience-box t3 ${
                  i + 1 === educations.length ? "" : "experience-box-line"
                }`}
              >
                <div className='box-inner'>
                  <h3 className='f-info bg-s2 color-d6'>{data.studyType}</h3>
                  <div className='exp-wrap'>
                    <div className='s-info color-d11 mg-b11'>{data.institution}</div>
                    <p className='color-d13'>{data.area}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='row'>
        {works.map((data, idx) => (
          <div
            className='col-lg-4 col-12 last-col animate-element wow delay5 fadeIn'
            data-wow-delay='0.3s'
            key={idx}
          >
            <div
              className={`experience-box t3 ${
                idx + 1 === works.length ? "" : "experience-box-line"
              }`}
            >
              <div className='box-inner'>
                <h3 className='f-info bg-s2 color-d6'>{data.start.year + "-" + data.end.year}</h3>
                <div className='exp-wrap'>
                  <div className='s-info color-d11 mg-b11'>{data.company}</div>
                  <p className='color-d13'>{data.summary}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
// class TopEducation extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             contenttop : [
//                 {
//                     id: 1,
//                     classname: 'experience-box experience-box-line t3',
//                     datawow: '0.3s',
//                     year: 'Universite of Udacity',
//                     title: 'User Experience Design',
//                     text: 'User experience (UX) design is the process design teams use to create products.'
//                 },
//                 {
//                     id: 2,
//                     classname: 'experience-box experience-box-line t3',
//                     datawow: '0.5s',
//                     year: 'Udemy',
//                     title: 'User Centered Design',
//                     text: 'User experience (UX) design is the process design teams use to create products.'
//                 },
//                 {
//                     id: 3,
//                     classname: 'experience-box t3',
//                     datawow: '0.7s',
//                     year: 'Skil Share',
//                     title: 'Interaction Design',
//                     text: 'User experience (UX) design is the process design teams use to create products.'
//                 }
//             ],
//             contentbot : [
//                 {
//                     id: 1,
//                     classname: 'experience-box experience-box-line t3',
//                     datawow: '0.8s',
//                     year: '2013 - 2015',
//                     title: 'Designer at',
//                     office: 'Microsoft',
//                     text: 'User experience (UX) design is the process design teams use to create products.'
//                 },
//                 {
//                     id: 2,
//                     classname: 'experience-box experience-box-line t3',
//                     datawow: '1s',
//                     year: '2013 - 2017',
//                     title: 'User Researcher at',
//                     office: 'Apple',
//                     text: 'User experience (UX) design is the process design teams use to create products.'
//                 },
//                 {
//                     id: 3,
//                     classname: 'experience-box t3',
//                     datawow: '1.2s',
//                     year: '2017 - 2020',
//                     title: 'Lead Designer at',
//                     office: 'Dripple',
//                     text: 'User experience (UX) design is the process design teams use to create products.'
//                 }
//             ]
//         }
//     }

// }

export default TopEducation
