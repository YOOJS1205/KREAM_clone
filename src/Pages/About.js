import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import AboutTop from '../components/About/AboutTop';
import InnerImage from '../components/About/InnerImage';
import InnerText from '../components/About/InnerText';

const About = () => {
    return (
        <div>
            <FullPage controls>
                <Slide>
                    <AboutTop></AboutTop>
                    <div className='main'>
                        <div className='outer'></div>
                        <div className='inner'>
                            <InnerText></InnerText>
                            <InnerImage></InnerImage>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div className='slide2'>
                        <h2 className='slide2_title'>한정판 거래는<br />왜 KREAM?</h2>
                    </div>
                </Slide>
            </FullPage>
        </div>
    )
}

export default About;