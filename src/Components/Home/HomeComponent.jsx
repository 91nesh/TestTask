import React  from 'react';
import { Container, Grid, Card, Image } from 'semantic-ui-react'
import Header from '../Header/HeaderComponent'
import { HomeData } from "../../JsonData/homeDetails";
import ReadMoreText from "../ReadMoreText/index";
import './style.scss';

export const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="content-wrapper">
                <Container>
                    <Grid className="article-block">
                        <Grid columns={1} className="article-block-wrp">
                            <Grid.Row>
                                    {
                                        HomeData.map((article,index) =>
                                        <Grid.Column className="article-col" key={index}>
                                            <Card fluid>
                                                <Card.Content className="article-img">
                                                    <Image src={article.image}/>
                                                </Card.Content>
                                                <Card.Content className="article-content">
                                                    <Card.Header>{article.author}</Card.Header>
                                                    <Card.Description>
                                                        <ReadMoreText minHeight="90px" text={article.description} />
                                                    </Card.Description>
                                                </Card.Content>
                                            </Card>
                                        </Grid.Column>
                                        )
                                    }
                            </Grid.Row>
                        </Grid>
                    </Grid>
                </Container>
            </div>

        </div>
    );
}

export default Home;
