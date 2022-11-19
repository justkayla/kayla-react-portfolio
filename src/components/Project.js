// * A single `Project` component that will be used multiple times in the Portfolio section

import { Container, Button, Card, Row } from "react-bootstrap";

function Project({ img, title, text, link }) {

  for(let i = 0; i < projectData.length; i++){

    // For each data set, create card with associated information

  }

  return (
    <Container>
      <Row xs={1} md={2} style={{ justifyContent: "center" }}>
        <Card
          style={{
            width: "18rem",
            margin: 20,
            padding: 0,
            borderColor: "#F0966A",
          }}
        >
          <Card.Img variant="top" src={require({ img })} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button
              variant="outline-primary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderColor: "#F0966A",
                backgroundColor: "#F0966A",
                color: "white",
              }}
            >
              view repo
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

/*
    <Container>
      <Row xs={1} md={2} style={{ justifyContent: "center" }}>
        <Card
          style={{
            width: "18rem",
            margin: 20,
            padding: 0,
            borderColor: "#F0966A",
          }}
        >
          <Card.Img
            variant="top"
            src={require("../assets/images/social-network.png")}
          />
          <Card.Body>
            <Card.Title>social network api</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              variant="outline-primary"
              href="https://github.com/justkayla/18-social-network-api"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderColor: "#F0966A",
                backgroundColor: "#F0966A",
                color: "white",
              }}
            >
              view repo
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            margin: 20,
            padding: 0,
            borderColor: "#F0966A",
          }}
        >
          <Card.Img
            variant="top"
            src={require("../assets/images/gossippyy.png")}
          />
          <Card.Body>
            <Card.Title>GOSSIPPYY</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              variant="outline-primary"
              href="https://github.com/JoePShoulak/gossippyy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderColor: "#F0966A",
                backgroundColor: "#F0966A",
                color: "white",
              }}
            >
              view repo
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "18rem",
            margin: 20,
            padding: 0,
            borderColor: "#F0966A",
          }}
        >
          <Card.Img
            variant="top"
            src={require("../assets/images/employee-tracker.png")}
          />
          <Card.Body>
            <Card.Title>employee tracker</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button
              variant="outline-primary"
              href="https://github.com/justkayla/12-employee-tracker"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderColor: "#F0966A",
                backgroundColor: "#F0966A",
                color: "white",
              }}
            >
              view repo
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
*/

export default Project;
