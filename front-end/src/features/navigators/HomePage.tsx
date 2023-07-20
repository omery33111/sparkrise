import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap'
import NavTransferor from './NavTransferor'
import Callback from '../callback/Callback'



const HomePage = () => {



  return (
    <div>
      
      <div style = {{height: "60px", overflow: "hidden" }} />

      <NavTransferor />

      <div style = {{height: "100px"}} />

      <Container fluid style={{ backgroundColor: "#D9A394", height: "650px", width: "98%", borderRadius: '15px', boxShadow: '0 14px 12px 0 rgba(0, 0, 0, 0.4), 0 1px 60px 0 rgba(0, 0, 0, 0.30)'}}>
        <Row>

          
          <Col md={6} className="d-flex align-items-center justify-content-end">
          
          <div style = {{position: "absolute", right: 63, top: 459}}>

          <img style={{ marginRight: "20px", maxHeight: "100%", maxWidth: "100%", borderRadius: '100%',
                        boxShadow: '0 14px 20px 0 rgba(0, 0, 0, 0.6), 0 1px 60px 0 rgba(0, 0, 0, 0.60)'}}
          className="d-block w-10"
          src={require('../../images/profilepic3.jpg')}
          alt="Second slide"
          height="470"
          width = "470"/>

          </div>

          </Col>

          <Col md={6} className="d-flex align-items-center">

      
                                                              
                                                              
                                                              
                                                              
                                                              
                                                              
                                                              
                                                              
                                                              
             <div style={{ position: "relative", width: "310%", textAlign: 'right', left: "0%", bottom: "-12%" }}>

            <Card style = {{ position: "relative", right: "140%", width: "200%", backgroundColor: 'rgba(245, 245, 245, 0.1)' }}>
            <Card.Body>

            <div style = {{height: "35px"}} />

            <h1 style={{ color: "white", width: "50%", borderRadius: '30px', position: "relative", right: "-25%",
                          boxShadow: '0 10px 12px 0 rgba(0, 0, 0, 0.3), 0 1px 30px 0 rgba(0, 0, 0, 0.30)'}} className="p-3 mb-2 bg-light text-dark d-flex align-items-center justify-content-center">בואו לשמוע על הקורס שלי</h1>

            <div style = {{height: "65px"}} />

              
            <h5 style={{ color: "white", position: "relative" }}>

                    שדמכקח כגפל עכגנג מחכגםר מררלג ןםחהכגצ צלרךק <br />
                    לוגכט יכגדמ כקךלדכ יעכמך יעכמך מחהכי נדלטמ חגדכ מוגכד כגון<br />
                    גחדמלכ כקךלדכ יעכמך מחהכי חקדנמ חגלדכ טגדנ נעמחג נמגר יחכג קדהע לכחדג מכחג <br />
                    טמכע אלדזטק עכגנג גכמחר רנ כגפל עכגנג גכמחר<br />
                    לוגכט גחדמלכ כקךלדכ נדלטמ חגדכ מוגכד כגון מחקד שדמכקח כגפל<br />
                    כקמחדכ נכקיחד ורנרי חקדנמ חגלדכ מכחג  חגלדכ טגדנ קלחד דשנמ תעלח נעמחג נמגר<br />
                    טמכע אלדזטק כצגדל שדמכקח כגפל עכגנג גכמחר רניקכ מררלג ןםחהכגצ צלרךק  חגלדכ טגדנ קלחד דשנמ<br />
                    לוגכט גחדמלכ כקךלדכ נדלטמ חגדכ מוגכד כגון מחקד שדמכקח כגפל<br />
                    לוגכט יכגדמ כמקחד גמדחלכ כקדך גחדמלכ כקךלדכ יעכמך מחהכי נדלטמ חגדכ מוגכד כגון מחקד <br />
                    כקמחדכ נכקיחד ורנרי חקדנמ חגלדכ טגדנ קלחד דשנמ תעלח נעמחג נמגר יחכג קדהע לכחדג מכחג
                    
            </h5>
              </Card.Body>


              <Nav>
            <Nav.Link href="/scheduler/get_month">
            <Button variant="success" style = {{ position: "relative", width: "130%", height: "250%", bottom: "150%", left: "-100%",
                                                  boxShadow: '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)'}}>לתיאום וקביעת פגישה</Button>

            </Nav.Link>
            </Nav>
            </Card>


            </div>
                                                                          
                                                              
                                                              
                                                              
                                                              
                                                              
                                                              
            <Card style={{ width: "200%", height: "37%", position: "relative", right: "160%", bottom: "25%",
                          boxShadow: '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)'}}>
            <div style = {{height: "15px"}} />
            <Card.Title style = {{textAlign: 'center'}}>?מעוניינים לשמוע עוד</Card.Title>
            <Card.Body style = {{textAlign: 'right'}}><small>,רב הקהל מעוניים לשמוע עוד לפני תיאום פגישה <br />
                                                              !צרו קשר ואחזור אליכם בהקדם</small>
                                                              
                                                              
                                                              
                                                              </Card.Body>
          <Nav.Link href = '#callback'>
           <Button variant="success" style = {{ height: "25%", position: "absolute", bottom: 15, left: "30%",
                                                boxShadow: '0 14px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 30px 0 rgba(0, 0, 0, 0.30)'}}>טופס להשארת פרטים</Button></Nav.Link>











          </Card>
          
           {/* here */}

          </Col>

        </Row>
      </Container>

      <div style = {{height: "200px"}}/>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", position: "relative"}}>
  <div style = {{position: "relative", left: "80%"}}>
    <img
      className="d-block w-10"
      src={require('../../images/achieve1.png')}
      alt="Second slide"
      height="230"
      width="230"
    />
    <p style={{ textAlign: "right", position: "absolute", left: "0%" }}>
      מכחגגמדכ מכחגדק כצרצע מחכגלע<br />
      חעמכגע כלצד מעחכד ננעכ<br />
      דלמיע חכגדן מכחגד החמכך<br />
      מנכגד ניגחד תצקד שדגק מחכק<br />
    </p>
  </div>
  <div style = {{position: "relative", left: "77%"}}>
    <img
      className="d-block w-10"
      src={require('../../images/achieve2.png')}
      alt="Second slide"
      height="230"
      width="230"
    />
    <p style={{ textAlign: "right", position: "absolute" }}>
      מכחגגמדכ מכחגדק כצרצע מחכגלע<br />
      חעמכגע כלצד מעחכד ננעכ<br />
      דלמיע חכגדן מכחגד החמכך<br />
      מנכגד ניגחד תצקד שדגק מחכק<br />
    </p>
  </div>
  <div style = {{position: "relative", left: "75%"}}>
    <img
      className="d-block w-10"
      src={require('../../images/achieve3.png')}
      alt="Second slide"
      height="230"
      width="230"
    />
    <p style={{ textAlign: "right", position: "absolute" }}>
      מכחגגמדכ מכחגדק כצרצע מחכגלע<br />
      חעמכגע כלצד מעחכד ננעכ<br />
      דלמיע חכגדן מכחגד החמכך<br />
      מנכגד ניגחד תצקד שדגק מחכק<br />
    </p>
  </div>
</div>


      <div id = 'callback'>
      <Callback />
      </div>

      


    </div>
  )
}



export default HomePage
