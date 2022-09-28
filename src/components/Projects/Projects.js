import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://media.gcflearnfree.org/content/563b9b9dca7fac0d9c7b3f7c_11_05_2015/getting_started_interface_interactive2.png"}
              isBlog={false}
              title="Excel-Clone-APP"
              description="I have completed my own made Excel Clone in which you can perform these given operations:-Add Data,Change font i.e size , style,Upload File,Download File,Align Text,Add Different Sheets,Perform mathematics calculations,and many more just go and check out"
              ghLink="https://github.com/vberi786/EXCEL-CONE-BY-VASU-BERI"
              demoLink="https://vberi786.github.io/EXCEL-CONE-BY-VASU-BERI/"
              //demo link for white board
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdBqXoxIz45hKDpmPwDSjnICaeyd7vgw_6h9f41lrPASeOpSJHOJJJeb6m9vsOLzrVmc&usqp=CAU"}
              isBlog={false}
              title="InstantBus App"
              description="HTML,CSS,JS||
              Developed InstantBus website for booking buses at your comfort on one click.
              Select Source and Destination you can book bus pay online through upi,credit-card,debit-card.
              "
              ghLink="https://github.com/vberi786/Instantbus"
              demoLink="https://instantbus.netlify.app/"     
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Netflix_-_English.jpg/300px-Netflix_-_English.jpg"}
              isBlog={false}
              title="Movies-App"
              description="HTML,CSS,JAVA Script,REACT||Made a Movies-App website in which user can check rating of movie add to favourites watch later and remove.Just check it OUT "
              ghLink="https://github.com/vberi786/Movies-APP"
              demoLink="https://vasunetflix.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://www.gizbot.com/img/2014/11/22-motorolacameraandgalleryappsnowupdatedwithnewfeaturesanddesign.jpg"}
              isBlog={false}
              title="Camera-Gallery-Webste"
              description="HTML,CSS,Java Script||Created a Camera-Gallery App in user can take his/her snaps using different pre-added filters.
              Snaps are by default stored  on local Storage and can downloaded if he/she wants.
              "
              ghLink="https://github.com/vberi786/Camera-Gallery-APP"
              demoLink="https://vberi786.github.io/Camera-Gallery-APP/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://www.techzim.co.zw/wp-content/uploads/2016/05/WhatsApp-Web-App-Interface.png"}
              isBlog={false}
              title="Chatting-app "
              description="HTML,CSS,JAVA-SCRIPT,FIREBASE|| Made website using  user can login with gmail id chat with their friends send emoji's to their friends and relatives"
              ghLink="https://github.com/vberi786/wechat"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://conceptboard.com/wp-content/uploads/Online-whitebard-header.png"}
              isBlog={false}
              title="White-Board"
              description="HTML,CSS,JS||Made a white-board website in which user can usepencil,erasser,different colours,download as json file and many more just try out once."
              ghLink="https://github.com/vberi786/white-board"
              demoLink="https://vberi786.github.io/white-board/" 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
