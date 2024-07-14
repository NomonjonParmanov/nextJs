import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone, MdMessage } from "react-icons/md";
import { LiaTelegramPlane } from "react-icons/lia";
import {
  FaYoutube,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="container contact">
      <h1>Contact us</h1>
      <form>
        <h3>Leave us a message</h3>
        <div className="contact__content">
          <div className="form__inputs">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="gmail" placeholder="Your Email" id="email" />
            <label htmlFor="Projects">Projects</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Projects"
            ></textarea>
            <button>Send</button>
          </div>
          <div className="form__text">
            <ul>
              <li>
                <IoLocationSharp className="icon" />
                Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
              </li>
              <li>
                <MdLocalPhone className="icon" />
                +998 91 621 07 80
              </li>
              <li>
                <MdMessage className="icon" />
                parmanovnomonjon@gmail.com
              </li>
              <li>
                <LiaTelegramPlane className="icon" />
                t.me/parmanov1
              </li>
              <li className="icons">
                <FaYoutube className="icon" />
                <FaInstagram className="icon" />
                <FaFacebookSquare className="icon" />
                <FaTwitter className="icon" />
              </li>
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95837.57820999197!2d69.20361489219658!3d41.35399867503803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cb23888afb9%3A0x31c22300affbc36a!2z0K7QvdGD0YHQsNCx0LDQtNGB0LrQuNC5INGA0LDQudC-0L0sINCi0LDRiNC60LXQvdGCLCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1720887709233!5m2!1sru!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </ul>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
