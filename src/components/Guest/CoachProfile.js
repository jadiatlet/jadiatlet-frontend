import React from "react";
import {
  Table,
  Icon,
  Header,
  Grid,
  Segment,
  Divider,
  Container,
  Image,
  Label
} from "semantic-ui-react";
import NavbarSticky from "../NavbarSticky";

const CoachProfile = () => {
  return (
    <Container>
      <NavbarSticky />

      {/* ------------------------------------------Coach Details Section------------------------------------------ */}
      <Divider horizontal>
        <Header as="h5">Coach Details</Header>
      </Divider>
      <Segment vertical textAlign="center">
        <Image size="small" src="/assets/images/team/panji.JPG" avatar />
        <Header as="h2">
          <Label color="orange">Nama Coach</Label>
        </Header>
      </Segment>
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <Table basic="very">
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="mail" />
                    E-mail :
                  </Table.Cell>
                  <Table.Cell>email@pelatih.com</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="map marker alternate" />
                    City :
                  </Table.Cell>
                  <Table.Cell>Jakarta Selat Sunda</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="road" />
                    Addres
                  </Table.Cell>
                  <Table.Cell>Jalan Pelatih No.23</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Table basic="very">
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="phone" />
                    Phone Number :
                  </Table.Cell>
                  <Table.Cell>08121212121221</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="volleyball ball" />
                    Sport :
                  </Table.Cell>
                  <Table.Cell>Lari dari kenyataan</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="question" />
                    Overview :
                  </Table.Cell>
                  <Table.Cell>---</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
      </Grid>

      {/* ------------------------------------------Coach Experiences Section------------------------------------------ */}
      <Divider horizontal>
        <Header as="h5">Coach Experiences</Header>
      </Divider>
      <Segment>
        <Table basic="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Number</Table.HeaderCell>
              <Table.HeaderCell>Experiences</Table.HeaderCell>
              <Table.HeaderCell>Duration</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>

      {/* ------------------------------------------Coach Achievement Section------------------------------------------ */}
      <Divider horizontal>
        <Header as="h5">Coach Achievement</Header>
      </Divider>
      <Segment>
        <Table basic="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Number</Table.HeaderCell>
              <Table.HeaderCell>Achievement</Table.HeaderCell>
              <Table.HeaderCell>Year</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>-</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    </Container>
  );
};

export default CoachProfile;

// class CoachProfile extends Component {
//   state = {};
//   render() => {
//     return (
//       <Fragment>
//         <Divider horizontal>
//           <Header as="h5">Coach Details</Header>
//         </Divider>
//         <Grid stackable columns={2}>
//           <Grid.Column>
//             <Segment>
//               <Table basic="very">
//                 <Table.Body>
//                   {props.coachDetails1.map((user, index) => {
//                     return (
//                       <Table.Row key={index}>
//                         <Table.Cell>
//                           <Icon name={user.icon} />
//                           {user.name}
//                         </Table.Cell>
//                         <Table.Cell>{user.data}</Table.Cell>
//                       </Table.Row>
//                     );
//                   })}
//                 </Table.Body>
//               </Table>
//             </Segment>
//           </Grid.Column>
//           <Grid.Column>
//             <Segment>
//               <Table basic="very">
//                 <Table.Body>
//                   {props.coachDetails2.map((user, index) => {
//                     return (
//                       <Table.Row key={index}>
//                         <Table.Cell>
//                           <Icon name={user.icon} />
//                           {user.name}
//                         </Table.Cell>
//                         <Table.Cell>{user.data}</Table.Cell>
//                       </Table.Row>
//                     );
//                   })}
//                 </Table.Body>
//               </Table>
//             </Segment>
//           </Grid.Column>
//         </Grid>
//       </Fragment>
//     );
//   }
// }

// export default CoachProfile;
