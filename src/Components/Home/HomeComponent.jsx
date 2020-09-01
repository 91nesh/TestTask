import React , {useState} from 'react';
import { Container, Grid, Card, Image } from 'semantic-ui-react'
import Header from '../Header/HeaderComponent'
import data from "../../JsonData/articles.json";
import './style.scss';

export const Home = () => {
    const [ showMore,setShowMore ] = useState({ id: null,open: false });
    const handleShowMore = (id) =>{
        setShowMore({ id , open: true })
    }
    return (
        <div className="home">
            <Header/>
            <div className="content-wrapper">
                <Container>
                    <Grid className="article-block">
                        <Grid columns={1} className="article-block-wrp">
                            <Grid.Row>
                                    {
                                        data.map((article) =>
                                        <Grid.Column className="article-col">
                                            <Card fluid>
                                                <Card.Content className="article-img">
                                                    <Image src={article.image}/>
                                                </Card.Content>
                                                <Card.Content className="article-content">
                                                    <Card.Header>{article.author}</Card.Header>
                                                    <Card.Description className={showMore.id !== article.id && !showMore.open && "home-desc"}>
                                                        { (showMore.id === article.artId && showMore.open) || article.description.length <= 400  ? article.description : article.description.substring(0, 400) + "..."}
                                                    </Card.Description>
                                                    {article.description.length > 400 && showMore.id !== article.artId &&<button className="ui button btn-show" onClick={() => handleShowMore(article.artId)}>Show More</button>}
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
