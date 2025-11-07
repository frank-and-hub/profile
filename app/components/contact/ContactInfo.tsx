import { Text } from '@mantine/core'

export default function ContactInfo() {
    return (
        <>
            <section id="contact" className="parallax-section">
                <div className="container">
                    <div className="row section-padding">
                        <div className="col-md-6 col-12">
                            <div className="wow fadeInUp contact-info" data-wow-delay="0.4s">
                                <div className="section-title">
                                    <h2>Contact Info</h2>
                                    <Text>Feel free to reach out for collaboration opportunities or to discuss your project requirements.</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
