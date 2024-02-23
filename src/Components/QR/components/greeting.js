import { Title_Disqount, Title_Free_3_lessons, Title_qr_2person } from "./utils"




const Greeting = ({ info }) => {

    return <div>
        <h1 style={{ fontSize: "20px", textAlign: "center" }}>
            Genie Web
        </h1>
        <h2 style={{ fontSize: "15px", textAlign: "start", margin: "10px 0" }}>
            Hello There!
        </h2>

        {
            info?.qr_info === "2 person" ? <Title_qr_2person /> :
                info?.qr_info === "free 3 days" ? <Title_Free_3_lessons /> :
                    info?.qr_info === "discount" && <Title_Disqount />
        }

        <h2 style={{ fontSize: "15px", textAlign: "start", margin: "10px 0" }}>
            About Us:
        </h2>
        <p style={{ margin: "20px 0", textAlign: "justify" }}>
            We are passionate about programming education and strive to provide top-notch learning experiences for individuals interested in honing their programming skills.
            Our courses cover a wide range of topics, from beginner-friendly introductions to advanced programming concepts.
        </p>
        <h2 style={{ fontSize: "15px", textAlign: "start", margin: "10px 0" }}>
            What to Expect:
        </h2>
        <p style={{ margin: "20px 0", textAlign: "justify" }}>
            Once you've filled out the contact form, our team will reach out to
            you with further instructions on how to complete your registration and get started with our courses.
            If you have any questions or encounter any issues during the registration process, don't hesitate to
            reach out to us through the contact information provided on our website. We're here to help you on your journey to becoming a proficient programmer.
        </p>
        <h2 style={{ fontSize: "15px", textAlign: "start", margin: "10px 0" }}>
            Get started:
        </h2>
        <p style={{ margin: "20px 0", textAlign: "justify" }}>
            If you are ready click the "START" button in the upper right corner and fill out your contact information
        </p>
        <br />
        <p style={{ margin: "20px 0", textAlign: "justify" }}>
            Thank you for scanning our QR code and expressing interest in our company. We look forward to welcoming you to our community of learners!
        </p>
        <br />
        <h1 style={{ fontSize: "20px", textAlign: "start" }}>
            Genie Web
        </h1>
    </div>
}


export default Greeting