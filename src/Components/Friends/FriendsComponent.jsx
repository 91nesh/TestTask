import React from 'react';
import { Grid, Card, Image, Container , Modal , Label } from 'semantic-ui-react';
import Header from '../Header/HeaderComponent'
import data from "../../JsonData/friends.json";
import './style.scss';

export const Friends = () => {
    return (
        <div className="friends">
            <Header/>
            <Grid className="friends-block">
                <Container>
                    <Grid>
                        <Grid.Row>
                            {
                                data.map((friend) => {
                                    return <Modal
                                        trigger={
                                            <Grid.Column className="friends-list">
                                                <Card fluid className="friends-card">
                                                    <Image src={friend.image} alt="" className="profile"/>
                                                    <Card.Content>
                                                        <Card.Header>{friend.author}</Card.Header>
                                                    </Card.Content>
                                                </Card>
                                            </Grid.Column>
                                        }
                                        header='User Details'
                                        content={
                                                <Grid className="user-details">
                                                <Grid.Row>
                                                   <Grid.Column mobile={16} tablet={16} computer={8}><Image className="user-details-img" circular src={friend.image} alt=""/></Grid.Column>
                                                  <Grid.Column mobile={16} tablet={16} computer={8}>
                                                      <Card.Content>
                                                          <Card.Description>
                                                              <div className="details">
                                                                  <span className="label">Name :</span>
                                                                  <span className="name">{friend.author}</span>
                                                              </div>
                                                              <div className="details">
                                                                  <span className="label">BirthDate :</span>
                                                                  <span className="name">{friend.date}</span>
                                                              </div>
                                                              <div className="details">
                                                                  <span className="label">Age :</span>
                                                                  <span className="name">{friend.Age}</span>
                                                              </div>
                                                              <div className="details">
                                                              <span className="label">JobType :</span>
                                                              <span className="name">Developer</span>
                                                          </div>
                                                          </Card.Description>
                                                      </Card.Content>
                                                  </Grid.Column>
                                                </Grid.Row>
                                                </Grid>
                                        }
                                        size="tiny"
                                        actions={['Close']}
                                    />

                                })
                            }
                        </Grid.Row>
                    </Grid>
                </Container>
            </Grid>

        </div>
    );
}

export default Friends;
