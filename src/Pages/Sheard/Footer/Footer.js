import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-red-300 p-5 grid gird-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            <div className='p-3'>
                 <img alt='loaing-img' className='w-[150px] rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUGtq09xYJv2IhSf2YJkI9Ss4REQP-6lq1Q&usqp=CAU' />
                 <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div className='p-3'>
                <span className="footer-title">Services</span> <br />
                <a className="link link-hover">Branding</a>  <br />
                <a className="link link-hover">Design</a><br />
                <a className="link link-hover">Marketing</a><br />
                <a className="link link-hover">Advertisement</a><br />
            </div>

            <div className='p-3'>
                <span className="footer-title">Company</span><br />
                <a className="link link-hover">About us</a><br />
                <a className="link link-hover">Contact</a><br />
                <a className="link link-hover">Jobs</a><br />
                <a className="link link-hover">Press kit</a><br />
            </div>
            <div className='p-3'>
                <span className="footer-title">Legal</span><br />
                <a className="link link-hover">Terms of use</a><br />
                <a className="link link-hover">Privacy policy</a><br />
                <a className="link link-hover">Cookie policy</a><br />
            </div>


        </footer>
    );
};

export default Footer;