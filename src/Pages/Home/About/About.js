import React from 'react';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/BjQKCRJ/about.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className='max-w-screen-sm text-center'>
                        
                            <h1 className="text-5xl font-bold">Our Story!</h1>
                            <p className="py-6">There are loads of possibilities when it comes to content marketing and how it can assist customers along their consumer decision journey. Just a few of the benefits of having ecommerce related content include helping to sell products and services, keeping customers informed, giving helpful tips and advice, building trust and authority on topics (with both users and search engines) and giving you new content to share to followers on social media. Creating content around your craft can help attract new customers and retain existing ones.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 