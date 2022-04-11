import React from 'react'

export default function Singlepost() {
    

    return (
        <div className='single-container'>
            <div className="banner" style={{background: `linear-gradient(rgba(255,255,255,0.6),
                rgba(2255,255,255,0.6) ), url("assets/images/profile-picture/background.jpg") center/cover no-repeat` }}>
                        <div className="header-banner">
                            <h2>Our Newsletter</h2>
                            <p>Stay informed about what is happening with the DAMA - Edmonton community</p>
                        </div>

                </div>
            <div className="single-wrapper">
                <div className="post-header">
                    <img src={process.env.PUBLIC_URL + `/assets/images/events/2.jpg`} alt="" className='post-img'/>
                    <h1 className="single-post-title">A Beginners Guide to MongoDB</h1>
                    <h3 className='single-post-author'>Sarah Kerrigan</h3>
                    <h3 className="single-post-date">1 hour ago</h3>
                </div>
                <pre className='single-post-content'>{`
                    College Dropout, overenthusiastic founder. AngelList reading Beta-tester. Zoom supported product manager. Product Hunt posting, digital E-vape tool. Techno-king ride sharing app.

                    Oculus-based creator economy Miami-moving capitalist. Y-combinator funded, self driving car startup. Disruptive acquisition strategy for board seat taking. Paul Graham backed DeFi degenerate. Nostalgic YikYaking Instagram Employee.
                    
                    College Dropout, overenthusiastic founder. College Dropout, overenthusiastic founder. Ryan Hoover-funded weird European NFT startup. Coinbase competing stealth startup. Twitter surfing overrated e-commerce series A.

                    Zoom supported product manager. Hacker News addicted Austin tech-worker. Protocol writing, inflated B2B SaaS series B. Academia taught Ethereum Shill. Protocol writing, inflated B2B SaaS series B. Paul Graham backed DeFi degenerate.

                    Google Employee DeFi hacking. Former Hedgefund worker girlboss. Satoshi themed Macbook air apologist. Generalist-reading secondary markets buyer. Substack blogging Thiel Fellow dropout. Roam Research girlfriend Medium blogger.

                    San Franciscan contrarian Conference attendee Doc-sending, TAM boosted IPO leading founder. Twitter surfing overrated e-commerce series A. Product Hunt posting digital e-vape tool. DogeCoin buying growth hacker. Zoom supported product manager.
                `}
                </pre>
            </div>
        </div>
    )
}
