
import { Breadcrumb, Layout, theme } from 'antd';
const { Header, Content, Footer } = Layout;


const InfoMessage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return <Layout>
                <Header
                    style={ {
                        padding: 0,
                        background: colorBgContainer,
                    } }
                >
                    <h1 style={ { margin: 0, fontSize: "25px", textAlign: "center" } }> GenieWeb <sub
                        style={ { fontSize: "14px", color: "#1677FF" } }>Student platform</sub></h1>
                </Header>
                <Content
                    style={ {
                        margin: '0 16px',
                    } }
                >
                    <Breadcrumb
                        style={ {
                            margin: '16px 0',
                        } }
                    >
                        <Breadcrumb.Item>Student</Breadcrumb.Item>
                        <Breadcrumb.Item>info</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={ {
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        } }
                    >
                        <h1 style={ { fontSize: "20px", textAlign: "center" } }>
                            Your Educational Journey Begins.
                        </h1>
                        <h2 style={ { fontSize: "15px", textAlign: "start", margin: "10px 0" } }>
                            Dear [Student's Name],
                        </h2>
                        <p style={ { margin: "20px 0", textAlign: "justify" } }>
                            I hope this letter finds you in great spirits and filled with anticipation for the exciting
                            educational journey that lies ahead. On behalf of the entire [School/Institution Name]
                            community, I extend a warm and heartfelt welcome to you!
                        </p>
                        <p style={ { margin: "20px 0", textAlign: "justify" } }>
                            We are delighted to have you as a part of our academic family, and we are confident that
                            your time with us will be both enriching and fulfilling. As you embark on this new chapter
                            of your education, remember that you are not just a student; you are a valued member of our
                            vibrant and supportive learning community.
                        </p>
                        <p style={ { margin: "20px 0", textAlign: "justify" } }>
                            Our dedicated team of educators and staff are here to guide and support you every step of
                            the way. Whether you are just starting with us or have recently joined, know that your
                            unique talents, perspectives, and contributions are integral to the diverse tapestry of our
                            educational environment..
                        </p>
                        <p style={ { margin: "20px 0", textAlign: "justify" } }>
                            Throughout your time at Genie Web, you will have the opportunity to engage
                            in a variety of learning experiences, develop valuable skills, and form lasting friendships.
                            We encourage you to embrace challenges, explore your interests, and take advantage of the
                            resources available to you.
                        </p>
                        <p style={ { margin: "20px 0", textAlign: "justify" } }>
                            Please feel free to reach out to your teachers, mentors, or any member of our staff if you
                            have questions, concerns, or if you simply want to share your thoughts and ideas. We are
                            here to ensure that your educational journey is not only academically enriching but also
                            personally rewarding.
                        </p>
                        <p style={ { margin: "20px 0", textAlign: "justify" } }>
                            Once again, welcome to Genie Web. We are thrilled to have you as part of our
                            community, and we look forward to witnessing your growth and success.
                        </p>
                        <p style={ { margin: "25px 0", textAlign: "justify" } }>
                            Wishing you an inspiring and successful academic year!
                        </p>
                        <p style={ { margin: "30px 0", textAlign: "justify" } }>
                            Warm regards,
                        </p>
                        <h3>Genie Web</h3>
                    </div>
                </Content>
                <Footer
                    style={ {
                        textAlign: 'center',
                    } }
                >
                    { new Date().getFullYear() }. | GenieWeb. | All rights reserved.
                </Footer>
            </Layout>
}

export default InfoMessage