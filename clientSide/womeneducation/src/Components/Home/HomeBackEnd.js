import React,{useState} from 'react';
 import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';

import './HomeBackEnd.css';

const HomepageBackend = () =>{
    const[coursedata,setCoursedata] = useState([]);
    const[topic,setTopic] = useState([]);
    const[subtopic,setSubtopic] = useState([]);
    const[subtopiccontent,setSubtopiccontent]=useState([]);
    const[click,setClick] = useState(false);

    function courseDisplay(courseName)
    {
        setTopic(courseName);
        console.log(courseName);
        fetch("http://localhost:5050/coursedata").then((res) => {
            return res.json();
        }).then ((res) => {
            setCoursedata(res);
        })
    }

    function unitsDisplay(courseName)
    {
        if(courseName === "Civics")
        {
            fetch ("http://localhost:5050/topic").then((res) => {
                return res.json();
            }).then ((res) => {
                setTopic(res);
                console.log("test topic",res);
            })
        }
        else
        {
            setTopic([]);
        }
    }

    function subTopicDisplay()
    {
        setClick(!click);
        if(click)
        {
            fetch ("http://localhost:5050/subtopic").then((res) => {
                return res.json();
            }).then ((res) => {
                setSubtopic(res);
                console.log(res);
            })
        }
    }

    function subtopicContentDisplay()
    {
        fetch("http://localhost:5050/subtopiccontent").then((res) => {
            return res.json();
        }).then ((res) => {
            setSubtopiccontent(res);
            console.log(res);
        })
    }

    return(
        <div>
            <div className="nav">
                <div className='navbar'>
                <Link to="/welcomepage" ><img className="jtdimagesize" src="resources/jtdimage.jpeg" alt="img" /></Link>
                </div>

                <div className="navbar" >
                <img className="imagesize1" src="resources/livebook.png" alt="img" onClick={()=>courseDisplay()}/>
                </div>
                <div className="navbar1">
                <Link to='/signup'><img className="imagesize2" src="resources/signupimage.png" alt="img" /></Link>
           </div>
    </div>
            <div className="display">
                <div className="box">
                    <div className="title">
                        <div className="margin">
                            <div className="titletext"><b>Learn the ways of the future</b></div>
                            <div className="titletext1">Develop a passion for learning.if you do, you will never cease to grow</div>
                        </div>
                        <div className="margin1">
                                <img className="titleimg" src="resources/navimage.png" alt="img" />
                        </div>
                            
                    </div>
                    <div className="coursedetails">
                         <div className="coursedata1">
                            {
                                coursedata?.map(({course_NAME }) => 
                                <div className="courseinfo" onClick={() => unitsDisplay(course_NAME)}>
                                    <div className='courseinformation'> {course_NAME }</div>
                                </div>)
                            }
                        </div> 
                        <div className="details">
                            {
                                topic?.map(({topic_NAME}) =>
                                  <div className='unitsinfo' onClick={() => subTopicDisplay()}>
                                        <div>
                                            <img className="daimondsize" src="resources/diamond.jpg" alt="img" />
                                        </div>
                                        <div className='unitsinformation'  >
                                        {topic_NAME}
                                        {
                                            click?
                                            <div>
                                            {
                                                subtopic?.map(({subtopic_NAME}) =>
                                                    <div className='subtopicinfo'>
                                                        <div><img className='circlesize' src="resources/circle.png" alt="circle" /></div>
                                                        {/* <Link to ="/topiccontent" className="textdecoration">  */}
                                                             <div className='subtopicinformation' onClick ={() => subtopicContentDisplay() }>{subtopic_NAME}</div>
                                                       {/* / </Link> */}
                                                    </div>
                                                )
                                            }
                                            </div>:""
                                        }
                                        </div>
                                        <div className='downarrowborder'>
                                            <img className='downarrowimg' src="resources/downarrow.jpg" alt="img" />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {
                    subtopiccontent.map(({Content}) => 
                    <div className='subtopiccontentinfo'>
                        <div className='subtopiccontentinformation'>{Content}</div>
                    </div>
                    )
                }
            </div>
            <Footer/>
        </div>
    )
}
export default HomepageBackend;