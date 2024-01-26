import React from "react";
import { Form } from "react-bootstrap";

const SectionContact = () => (
    <section className="contact-section layout-padding">
        <div className="container">
            <div className="row">
                <h2>Liên hệ</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Họ và tên" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Nội dung"></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-dark">Gửi</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 map-container">
                    <div className="map-responsive">
                        {/* Thay đổi iframe với iframe Google Maps hợp lệ của bạn */}
                        {/* <iframe
                            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Eiffel+Tower+Paris+France"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            allowFullScreen
                            title="Google Maps"
                        ></iframe> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SectionContact;
