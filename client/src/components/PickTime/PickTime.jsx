
import React , {useEffect} from 'react'
import  '../PickTime/pickTime.css'
import moment from 'moment';
export default function PickTime() {
  const x = moment(new Date()).daysInMonth() 
  const y = parseInt(moment(new Date()).format("D"))
  console.log(x, y);
  useEffect(()=>{
      
  },[])
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet" />
      <div className="y-appointment-wrapper">
        <div className="appointment-notification" />
        <form action>
          <fieldset className="field-set-reset">
            <legend className="title">Pick a day and time</legend>
            <div className="date-pick" data-selected-id={-1}>
              <div className="scroll-btn left">
                <span className="scroll-img-wrap">
                  <svg width="20px" height="30px">
                    <path fill="#ccc" d="M16.1,32l3.9-3.9L7.9,16L20,3.9L16.1,0L0,16L16.1,32z M17.1,3.9L5, 16l12.1,12.1l-1.1,1.1L2.9,16L16.1,2.9L17.1,3.9z" />
                  </svg>
                </span>
              </div>
              <div className="date-wrapper">
                <div className="date-scroll-container">
                  {

                  }
                  <label for="" class="timecell">
                                      <input type="radio"/>
                                      <span class="fill-box"></span>
                                      <span class="time-day">{moment(new Date()).format("ddd")}</span>
                                      <span class="time-date">{moment(new Date()).format("D")}</span>
                                      <span class="time-month">{moment(new Date()).format("MMM")}</span>
                                  </label>

                </div>
              </div>
              <div className="scroll-btn right">
                <span className="scroll-img-wrap">
                  <svg width="20px" height="30px">
                    <path fill="#ccc" d="M3.9,0L0,3.9L12.1,16L0,28.1L3.9,32L20,16L3.9,0z M2.9,28.1L15, 16L2.9,3.9l1.1-1.1L17.1,16L3.9,29.1L2.9,28.1z" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="time-pick" data-ts-selected-id={-1}>
              <section>
                <div className="time-slot morning">
                  <h3 className="slot-heading">morning</h3>
                  <div className="slot">
                    <label className="time-slice" htmlFor option-id={0}>
                      <input type="radio" />
                      <span>11:20a</span>
                    </label>
                    <label className="time-slice" htmlFor option-id={1}>
                      <input type="radio" />
                      <span>11:40a</span>
                    </label>
                  </div>
                </div>
                <div className="time-slot afternoon">
                  <h3 className="slot-heading">afternoon</h3>
                  <div className="slot">
                    <label className="time-slice" htmlFor option-id={2}> 
                      <input type="radio" />
                      <span>12:40p</span>
                    </label>
                    <label className="time-slice" htmlFor option-id={3}>
                      <input type="radio" />
                      <span>4:00p</span>
                    </label>
                    <label className="time-slice" htmlFor option-id={4}>
                      <input type="radio" />
                      <span>4:20p</span>
                    </label>
                    <label className="time-slice" htmlFor option-id={5}>
                      <input type="radio" />
                      <span>4:40p</span>
                    </label>
                  </div>
                </div>
                <div className="time-slot evening">
                  <h3 className="slot-heading">evening</h3>
                  <div className="slot">
                    <label className="time-slice" htmlFor option-id={6}>
                      <input type="radio" />
                      <span>6:00p</span>
                    </label>
                  </div>
                </div>
              </section>
            </div>
          </fieldset>
        </form>
      </div>        
    </div>
  );
}

