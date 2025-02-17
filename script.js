// Hamburger Menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

function toggleMenu() {
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
}

function closeMenu() {
    hamburgerMenu.classList.remove('active');
    navLinks.classList.remove('active');
    body.classList.remove('menu-open');
}

hamburgerMenu.addEventListener('click', toggleMenu);

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !hamburgerMenu.contains(e.target)) {
        closeMenu();
    }
});

// Candidate data in ballot order
const candidates = [
    {
        name: "Neil Tsutsui",
        title: "Environmental Scientist & UC Berkeley Professor",
        image: "images/AD-14 Candidate Headshots/Neil Tsutsui.jpg",
        shortBio: "Distinguished UC Berkeley professor and environmental scientist leading crucial research to protect ecosystems and leading projects in forest conservation, with extensive experience in environmental leadership.",
        bio: `<p>A renowned environmental scientist and educator bringing extensive research expertise and practical leadership experience in environmental conservation and climate resilience.</p>
              
              <h5>Academic Leadership</h5>
              <ul>
                  <li>Professor of Environmental Science, Policy, and Management at UC Berkeley</li>
                  <li>Director of UC Berkeley Central Sierra Field Research Stations</li>
                  <li>Oversees operations of two experimental forests</li>
                  <li>Manages Sagehen Creek Field Station</li>
                  <li>Directs Central Sierra Snow Lab research</li>
              </ul>

              <h5>Environmental Leadership</h5>
              <ul>
                  <li>Former Chair of Parks Advisory Committee for East Bay Regional Park District</li>
                  <li>Former Chair of El Cerrito Environmental Quality Committee</li>
                  <li>Former Vice Chair of West Contra Costa County Sierra Club</li>
                  <li>Led initiatives for forest conservation and management</li>
                  <li>Advanced climate resilience strategies</li>
              </ul>

              <h5>Research Focus</h5>
              <ul>
                  <li>Climate change impacts and adaptation</li>
                  <li>Forest ecosystem management</li>
                  <li>Environmental conservation strategies</li>
                  <li>Biodiversity protection</li>
                  <li>Science-based policy development</li>
              </ul>`,
        statement: "As your ADEM delegate, I will bring my scientific expertise and environmental leadership experience to advance evidence-based climate policies and conservation efforts. I am committed to protecting California's forests, reducing wildfire risk, and ensuring our environmental policies are grounded in sound science while promoting social and environmental justice."
    },
    {
        name: "Dilli Bhattarai",
        title: "Hercules City Councilmember & Transportation Advocate",
        image: "images/AD-14 Candidate Headshots/Dilli Bhattarai.jpg",
        shortBio: "Hercules City Council member and finance expert championing sustainable transportation, regional connectivity, and inclusive community development.",
        bio: `<p>A passionate advocate for sustainable transportation and regional connectivity, bringing over two decades of financial expertise to public service. Currently serving as a Hercules City Council member and future Mayor for 2028.</p>
              
              <h5>Public Service</h5>
              <ul>
                  <li>Hercules City Council Member, focusing on transportation and economic development</li>
                  <li>Designated Mayor for 2028, demonstrating leadership and vision</li>
                  <li>Former Planning Commissioner, shaping community development</li>
                  <li>Former Vice President of PTO at Hercules High School</li>
                  <li>Active participant in regional transportation planning initiatives</li>
              </ul>

              <h5>Professional Background</h5>
              <ul>
                  <li>Over 20 years managing large-scale finances in Silicon Valley</li>
                  <li>Expertise in fiscal management and strategic planning</li>
                  <li>Track record of successful project implementation</li>
                  <li>Strong background in organizational leadership</li>
                  <li>Experience in public-private partnerships</li>
              </ul>

              <h5>Policy Priorities</h5>
              <ul>
                  <li>Improving regional transit connectivity</li>
                  <li>Advancing sustainable transportation solutions</li>
                  <li>Promoting equitable economic development</li>
                  <li>Supporting inclusive community planning</li>
                  <li>Enhancing public education resources</li>
              </ul>`,
        statement: "As your ADEM delegate, I will leverage my experience in city government and finance to advocate for sustainable transportation, economic development, and inclusive policies. I am committed to improving transit access, fostering economic growth, and ensuring our communities are connected, vibrant, and equitable for all residents."
    },
    {
        name: "Y'Anad Burrell",
        title: "Health Equity Champion & Environmental Justice Leader",
        image: "images/AD-14 Candidate Headshots/Y_Anad Burrell.jpg",
        shortBio: "Dedicated health equity advocate and environmental justice leader improving health outcomes and air quality in Richmond and Contra Costa County communities.",
        bio: `<p>A passionate advocate for health equity and environmental justice, working to ensure access to quality healthcare and clean air for all communities in Contra Costa County.</p>
              
              <h5>Public Service</h5>
              <ul>
                  <li>Mental Health Commissioner for Contra Costa County</li>
                  <li>Richmond Housing Commissioner</li>
                  <li>Communications co-chair for Healthy Contra Costa since 2017</li>
                  <li>Community Steering Committee member for Richmond, North Richmond, and San Pablo</li>
                  <li>Co-chair of Path To Clean Air Implementation Plan (2020-2023)</li>
              </ul>

              <h5>Environmental Justice</h5>
              <ul>
                  <li>Led development of air pollution reduction strategies</li>
                  <li>Advanced environmental health initiatives</li>
                  <li>Championed community-based monitoring programs</li>
                  <li>Promoted equitable environmental policies</li>
                  <li>Coordinated multi-stakeholder environmental projects</li>
              </ul>

              <h5>Health Advocacy</h5>
              <ul>
                  <li>Improved access to mental health resources</li>
                  <li>Advanced community health initiatives</li>
                  <li>Former instructor at SF State University's Non-Profit Certificate program</li>
                  <li>Current freelance journalist with Post News Group</li>
                  <li>Champion for health equity in underserved communities</li>
              </ul>`,
        statement: "As your ADEM delegate, I will continue my work to advance health equity, environmental justice, and community well-being. I am committed to improving health outcomes for children, youth, and families while ensuring our communities have clean air to breathe and access to quality healthcare and mental health resources."
    },
    {
        name: "Connie Taylor-Smith",
        title: "Community Advocate & Social Justice Leader",
        image: "images/AD-14 Candidate Headshots/Connie Taylor-Smith.jpg",
        shortBio: "Progressive community advocate and social justice leader working to advance equity and empower local voices in Assembly District 14.",
        bio: `<p>A dedicated community advocate with a proven track record of advancing progressive values and social justice initiatives in Assembly District 14.</p>
              
              <h5>Community Leadership</h5>
              <ul>
                  <li>Grassroots organizer focusing on community empowerment and civic engagement</li>
                  <li>Advocate for racial justice and equitable policy solutions</li>
                  <li>Leader in local progressive initiatives and community-based programs</li>
                  <li>Champion for inclusive community development and neighborhood improvement</li>
              </ul>

              <h5>Policy Focus</h5>
              <ul>
                  <li>Advancing racial equity and social justice</li>
                  <li>Promoting affordable housing and tenant protections</li>
                  <li>Supporting community-based economic development</li>
                  <li>Advocating for environmental justice</li>
                  <li>Strengthening public education and youth programs</li>
              </ul>

              <h5>Vision for Change</h5>
              <ul>
                  <li>Building inclusive and equitable communities</li>
                  <li>Empowering historically marginalized voices</li>
                  <li>Creating pathways for community leadership</li>
                  <li>Fostering collaboration between community groups</li>
                  <li>Advancing progressive policies at the local level</li>
              </ul>`,
        statement: "As your ADEM delegate, I am committed to amplifying community voices and advancing progressive policies that promote social justice, racial equity, and economic opportunity. I will work tirelessly to ensure our Democratic Party remains accountable to the needs of our diverse communities while fighting for meaningful change at both local and state levels."
    },
    {
        name: "Andrea Dooley",
        title: "Labor Arbitrator & Community Leader",
        image: "images/AD-14 Candidate Headshots/Andrea Dooley.jpg",
        shortBio: "Experienced labor arbitrator and community leader with over 20 years in dispute resolution, police reform, and public service.",
        bio: `<p>A distinguished labor arbitrator and community leader with extensive experience in labor relations, dispute resolution, and public service. Published author and member of the National Academy of Arbitrators.</p>
              
              <h5>Professional Experience</h5>
              <ul>
                  <li>Full-time Labor Arbitrator since 2014, hearing public and private sector grievance disputes throughout California</li>
                  <li>Published author of two books on Labor Arbitration</li>
                  <li>Lecturer at Berkeley Law School (2022-present)</li>
                  <li>Former partner at Weinberg, Roger & Rosenfeld, representing unions and trust funds</li>
                  <li>Northern California National Coordinator for Coalition of Kaiser-Permanente Unions</li>
              </ul>

              <h5>Community Leadership</h5>
              <ul>
                  <li>Alternate member of Oakland Police Commission (2017-2019), focusing on police reform and accountability</li>
                  <li>President and Treasurer of Oakland Technical High School PTSA (2020-2024)</li>
                  <li>Safety Leader at Oakland and Richmond Kaiser Foundation Hospitals</li>
                  <li>Oversaw AFL-CIO Voter Protection Project in Nevada during 2008 election</li>
                  <li>Former candidate for Alameda County Democratic Central Committee (2008)</li>
              </ul>

              <h5>Areas of Focus</h5>
              <ul>
                  <li>Labor rights and workplace justice</li>
                  <li>Police reform and accountability</li>
                  <li>Public education advocacy</li>
                  <li>Healthcare worker safety</li>
                  <li>Democratic Party engagement</li>
              </ul>`,
        statement: "As your ADEM delegate, I will bring my extensive experience in labor relations, police reform, and education advocacy to strengthen our Democratic Party. I'll use my skills as a mediator and dispute resolution professional to build consensus while fighting for workers' rights, police accountability, and strong public schools."
    },
    {
        name: "Susan Wengraf",
        title: "Former Berkeley Vice Mayor & Environmental Leader",
        image: "images/AD-14 Candidate Headshots/Susan Wengraf.jpg",
        shortBio: "Veteran Berkeley City Council member and wildfire safety champion, leading regional initiatives for climate resilience, housing affordability, and public safety.",
        bio: `<p>A seasoned public servant with 16 years on Berkeley City Council, focusing on environmental protection, public safety, and government transparency.</p>
              
              <h5>Public Service</h5>
              <ul>
                  <li>16 years of service on Berkeley City Council</li>
                  <li>Former Berkeley Planning Commission member</li>
                  <li>Former President of Berkeley Democratic Club</li>
                  <li>Chair and founding member of East Bay Wildfire Coalition of Governments</li>
                  <li>Leader in regional wildfire safety initiatives</li>
              </ul>

              <h5>Environmental Leadership</h5>
              <ul>
                  <li>Led regional approach to wildfire safety across two counties</li>
                  <li>Advanced climate resilience policies</li>
                  <li>Championed environmental protection measures</li>
                  <li>Promoted sustainable development practices</li>
                  <li>Advocated for green infrastructure</li>
              </ul>

              <h5>Policy Focus</h5>
              <ul>
                  <li>Strengthening wildfire prevention and safety</li>
                  <li>Expanding affordable housing access</li>
                  <li>Enhancing public safety measures</li>
                  <li>Promoting government accountability</li>
                  <li>Advancing gun violence prevention</li>
              </ul>`,
        statement: "As your ADEM delegate, I will bring my extensive experience in local government and environmental protection to advance comprehensive wildfire safety, affordable housing, and public safety initiatives. I am committed to transparent governance and practical solutions that address our climate crisis while ensuring community safety and accessibility."
    },
    {
        name: "Cesar Zepeda",
        title: "Richmond City Councilmember & LGBTQ+ Leader",
        image: "images/AD-14 Candidate Headshots/Cesar Zepeda.jpg",
        shortBio: "First openly gay Richmond City Council member, Vice Mayor, and champion for affordable housing, economic development, and LGBTQ+ rights.",
        bio: `<p>A groundbreaking leader in Richmond politics and a tireless advocate for affordable housing, economic development, and LGBTQ+ rights. Currently serving as Vice Mayor of Richmond.</p>
              
              <h5>Political Leadership</h5>
              <ul>
                  <li>First openly gay man elected to Richmond City Council (2022)</li>
                  <li>Vice Mayor of Richmond (2025)</li>
                  <li>President of Hilltop District Neighborhood Council</li>
                  <li>Founder and President of Hilltop District Homeowners & Stakeholders Association</li>
                  <li>Co-founder of Richmond Rainbow Pride, the city's first LGBTQ+ organization</li>
              </ul>

              <h5>Key Achievements</h5>
              <ul>
                  <li>Led completion of Vista Del Mar Park after 16 years of disrepair</li>
                  <li>Secured $100,000 for "Bring Back Music to Richmond Schools" campaign</li>
                  <li>Implemented cost-saving Parks Yard initiative, saving $80,000 annually</li>
                  <li>Secured Hilltop Mall redevelopment project</li>
                  <li>Championed affordable housing initiatives throughout Richmond</li>
              </ul>

              <h5>Policy Priorities</h5>
              <ul>
                  <li>Expanding affordable housing opportunities</li>
                  <li>Promoting local hiring and economic development</li>
                  <li>Advancing LGBTQ+ rights and inclusion</li>
                  <li>Improving public safety and community relations</li>
                  <li>Enhancing environmental protection measures</li>
              </ul>`,
        statement: "As your ADEM delegate, I will continue fighting for affordable housing, economic opportunity, and LGBTQ+ rights. My experience as Richmond's first openly gay councilmember and now Vice Mayor has shown me the importance of representation and the power of community-driven change. I am committed to making our Democratic Party more inclusive while addressing the critical issues of housing affordability, economic development, and social justice."
    },
    {
        name: "Nick Pilch",
        title: "Former Albany Mayor & Transportation Professional",
        image: "images/AD-14 Candidate Headshots/Nick Pilch.jpeg",
        shortBio: "Former Albany Mayor and current BART operator championing sustainable transportation, housing justice, and environmental protection with extensive experience in local government.",
        bio: `<p>A dedicated public servant combining hands-on transportation experience with extensive local government leadership, focusing on sustainable development and environmental protection.</p>
              
              <h5>Public Service</h5>
              <ul>
                  <li>Former Council Member and Mayor of Albany</li>
                  <li>Current Planning & Zoning Commissioner</li>
                  <li>Sierra Club California Executive Committee member</li>
                  <li>Co-founder of Albany Strollers & Rollers</li>
                  <li>Former Software Engineering Manager turned BART Train Operator</li>
              </ul>

              <h5>Policy Achievements</h5>
              <ul>
                  <li>Led development of Albany's Housing Element</li>
                  <li>Spearheaded San Pablo Avenue Specific Plan</li>
                  <li>Established Albany's Policing Commission</li>
                  <li>Advanced LGBTQ+ rights initiatives</li>
                  <li>Implemented sustainable transportation policies</li>
              </ul>

              <h5>Current Focus</h5>
              <ul>
                  <li>Improving public transportation systems</li>
                  <li>Expanding affordable housing opportunities</li>
                  <li>Strengthening labor rights and worker protections</li>
                  <li>Advancing environmental sustainability</li>
                  <li>Promoting social justice and equity</li>
              </ul>`,
        statement: "As your ADEM delegate, I will combine my experience in local government with my current role as a BART operator to fight for better public transportation, affordable housing, and environmental protection. I understand both policy and practical implementation, and I'm committed to creating more sustainable, equitable, and inclusive communities."
    },
    {
        name: "Sarah Bell",
        title: "Housing Advocate & Labor Organizer",
        image: "images/AD-14 Candidate Headshots/Sarah Bell.jpg",
        shortBio: "Progressive housing advocate and tech worker organizer leading East Bay YIMBY, fighting for affordable housing near transit and workers' rights.",
        bio: `<p>A dynamic housing advocate and labor organizer combining technical expertise with grassroots organizing to advance progressive housing policies and workers' rights.</p>
              
              <h5>Housing Leadership</h5>
              <ul>
                  <li>Lead organizer for East Bay YIMBY</li>
                  <li>Board of Stewards member for East Bay for Everyone</li>
                  <li>Chair of Sierra Club Northern Alameda County Housing Committee</li>
                  <li>Berkeley Housing Advisory Commission member</li>
                  <li>Champion for transit-oriented development</li>
              </ul>

              <h5>Labor Organizing</h5>
              <ul>
                  <li>Founding member of Alphabet Workers Union</li>
                  <li>Former chair of AWU Legislative Political Committee</li>
                  <li>Software Engineer advocating for tech worker rights</li>
                  <li>Leader in workplace organizing initiatives</li>
                  <li>Advocate for ethical technology practices</li>
              </ul>

              <h5>Policy Priorities</h5>
              <ul>
                  <li>Expanding affordable housing near transit</li>
                  <li>Strengthening worker protections and rights</li>
                  <li>Promoting sustainable urban development</li>
                  <li>Advancing economic justice initiatives</li>
                  <li>Supporting inclusive housing policies</li>
              </ul>`,
        statement: "As your ADEM delegate, I will fight for a California where working families can thrive, with affordable housing near jobs and transit, strong worker protections, and inclusive communities. My experience in both housing advocacy and labor organizing gives me a unique perspective on building coalitions for progressive change."
    },
    {
        name: "Laura Babitt",
        title: "Education Champion & Former School Board Director",
        image: "images/AD-14 Candidate Headshots/Laura Babitt.JPG",
        shortBio: "Accomplished education advocate who transformed Berkeley schools through improved teacher pay, expanded programs, and enhanced student outcomes over 16 years of service.",
        bio: `<p>A dedicated education advocate with 16 years of experience creating equitable and effective public schools in Berkeley, delivering concrete improvements in teacher compensation and student success.</p>
              
              <h5>Educational Leadership</h5>
              <ul>
                  <li>Led initiative resulting in 30% average increase in educator pay and benefits</li>
                  <li>Expanded career technical education programming</li>
                  <li>Improved college eligibility rates across student populations</li>
                  <li>Developed BUSD's comprehensive climate resilience plan</li>
                  <li>Championed equity-focused budget allocation</li>
              </ul>

              <h5>Key Achievements</h5>
              <ul>
                  <li>Prioritized funding for most vulnerable student populations</li>
                  <li>Enhanced sustainability initiatives in school operations</li>
                  <li>Strengthened teacher retention programs</li>
                  <li>Improved academic support services</li>
                  <li>Advanced equity-based educational policies</li>
              </ul>

              <h5>Vision for Change</h5>
              <ul>
                  <li>Reducing California's poverty rates through education</li>
                  <li>Strengthening public education funding</li>
                  <li>Expanding youth development programs</li>
                  <li>Promoting educational equity and access</li>
                  <li>Supporting educator professional growth</li>
              </ul>`,
        statement: "As your ADEM delegate, I will bring my proven track record of educational transformation to fight for stronger public schools and reduced poverty rates. I am committed to supporting organizations that positively impact youth while ensuring our education system works for all students, particularly those most vulnerable in our communities."
    },
    {
        name: "Dan Kalb",
        title: "Environmental Champion & Former Oakland Councilmember",
        image: "images/AD-14 Candidate Headshots/Dan Kalb.jpeg",
        shortBio: "Veteran Oakland City Council member and environmental policy leader, championing climate action, affordable housing, and sustainable development for 25 years.",
        bio: `<p>A proven environmental champion and policy leader with 12 years of experience on the Oakland City Council, advancing groundbreaking climate legislation and progressive reforms.</p>
              
              <h5>Environmental Leadership</h5>
              <ul>
                  <li>Authored Oakland's landmark ban on coal storage and handling</li>
                  <li>Led legislation requiring all-electric new construction</li>
                  <li>Spearheaded city's divestment from fossil fuel companies</li>
                  <li>Past chair of East Bay Community Energy, providing 100% renewable electricity</li>
                  <li>Championed food waste diversion and composting requirements</li>
              </ul>

              <h5>Policy Achievements</h5>
              <ul>
                  <li>Passed legislation banning harmful pesticides and gas-powered leaf blowers</li>
                  <li>Authored requirements for sustainable food packaging</li>
                  <li>Led initiatives for urban greening and expanded tree canopy</li>
                  <li>Advanced equitable climate resilience in Oakland's General Plan</li>
                  <li>Implemented progressive housing and tenant protection policies</li>
              </ul>

              <h5>Priority Areas</h5>
              <ul>
                  <li>Accelerating climate action and environmental justice</li>
                  <li>Expanding affordable housing opportunities</li>
                  <li>Strengthening public safety and gun violence prevention</li>
                  <li>Promoting government transparency and accountability</li>
                  <li>Supporting sustainable transportation solutions</li>
              </ul>`,
        statement: "As your ADEM delegate, I will bring my extensive experience in environmental policy and progressive governance to advance bold climate action, affordable housing, and public safety initiatives. I am committed to building on my record of practical solutions that address our climate crisis while ensuring social and economic justice for all communities."
    },
    {
        name: "Anthony Caro",
        title: "Education Advocate & US Army Veteran",
        image: "images/AD-14 Candidate Headshots/Anthony Caro.jpg",
        shortBio: "Education advocate, US Army veteran, and founder of Citizens Power Network, dedicated to improving public schools and civic engagement.",
        bio: `<p>A passionate education advocate and military veteran committed to improving public education and civic engagement in our communities. Currently pursuing studies at UC Berkeley while serving in the National Guard.</p>
              
              <h5>Military Service & Education</h5>
              <ul>
                  <li>Current UC Berkeley student majoring in Political Science, Philosophy, and History</li>
                  <li>4 years active duty in the U.S. Army, serving in South Korea and Kuwait</li>
                  <li>Current Sergeant in the National Guard</li>
                  <li>Graduate of Los Angeles public schools</li>
              </ul>

              <h5>Education Leadership</h5>
              <ul>
                  <li>Founder and Director of Citizens Power Network, focusing on K-12 civic engagement</li>
                  <li>Candidate for Contra Costa County Board of Education Area 1 (2024)</li>
                  <li>Former candidate for West Contra Costa Unified School District board (2018)</li>
                  <li>Led successful voter registration drives for WCCUSD students</li>
                  <li>Active collaborator with Healthy Richmond and RYSE Center youth initiatives</li>
              </ul>

              <h5>Policy Priorities</h5>
              <ul>
                  <li>Implementing comprehensive school safety measures</li>
                  <li>Expanding community schools model</li>
                  <li>Improving teacher retention and support</li>
                  <li>Enhancing college and career readiness programs</li>
                  <li>Strengthening school-community partnerships</li>
              </ul>`,
        statement: "I am running to be your ADEM delegate to fight for quality public education, safe schools, and youth civic engagement. Drawing from my experience as a veteran, education advocate, and community organizer, I will work to ensure our Democratic Party prioritizes educational equity, supports our teachers, and creates pathways to success for all students."
    },
    {
        name: "Teddy Gray King",
        title: "Former Piedmont Mayor & Regional Transportation Leader",
        image: "images/AD-14 Candidate Headshots/Teddy Gray King.jpg",
        shortBio: "Former Piedmont Mayor who championed climate action, housing expansion, and regional transportation solutions, with a strong record of environmental leadership.",
        bio: `<p>An accomplished public servant with a strong track record in environmental policy, housing development, and regional transportation planning. Proud UC Berkeley graduate and mother of three.</p>
              
              <h5>Mayoral Achievements</h5>
              <ul>
                  <li>Led adoption of historic housing element expanding home construction</li>
                  <li>Passed two climate action plans reducing greenhouse gas emissions</li>
                  <li>Implemented all-electric public facilities legislation</li>
                  <li>Advanced regional transportation initiatives</li>
                  <li>Championed sustainable development policies</li>
              </ul>

              <h5>Regional Leadership</h5>
              <ul>
                  <li>Member of Alameda County Transportation Commission</li>
                  <li>Coordinated with AC Transit and BART on transportation solutions</li>
                  <li>Led inter-agency collaboration efforts</li>
                  <li>Advanced regional housing strategies</li>
                  <li>Promoted cross-jurisdictional climate initiatives</li>
              </ul>

              <h5>Professional Experience</h5>
              <ul>
                  <li>Public affairs consultant with extensive policy expertise</li>
                  <li>Former Congressional aide</li>
                  <li>Former chief of staff at San Francisco Board of Supervisors</li>
                  <li>Active Democratic Party organizer</li>
                  <li>Experienced coalition builder</li>
              </ul>`,
        statement: "As your ADEM delegate, I will leverage my experience in local government and regional planning to advance bold climate action, housing expansion, and sustainable transportation solutions. I am committed to building on my record of practical achievements while ensuring our policies promote social justice and environmental sustainability."
    },
    {
        name: "Gabe Sandoval",
        title: "State Senate Staff Member & Planning Commissioner",
        image: "images/AD-14 Candidate Headshots/Gabe Sandoval.jpg",
        shortBio: "Dedicated public servant working in the State Senate and serving as Pinole Planning Commissioner, focused on housing accessibility and equitable transit solutions.",
        bio: `<p>A committed public servant with extensive experience in state government and local planning, working to improve housing accessibility and public transit for all communities.</p>
              
              <h5>Government Experience</h5>
              <ul>
                  <li>Current State Senate staff member for Senator Jesse Arreguín</li>
                  <li>Former staff member for State Senator Nancy Skinner</li>
                  <li>Pinole Planning Commissioner, advancing housing and transit initiatives</li>
                  <li>Led California Rental Assistance Program casework during COVID-19</li>
                  <li>Active coordinator with regional transit agencies and partners</li>
              </ul>

              <h5>Policy Expertise</h5>
              <ul>
                  <li>Housing policy and rental assistance programs</li>
                  <li>Public transportation planning and development</li>
                  <li>Community engagement and constituent services</li>
                  <li>Local government planning and zoning</li>
                  <li>Social justice and equity initiatives</li>
              </ul>

              <h5>Community Impact</h5>
              <ul>
                  <li>Helped residents navigate housing assistance during pandemic</li>
                  <li>Advanced affordable housing projects through Planning Commission</li>
                  <li>Improved coordination between transit agencies</li>
                  <li>Advocated for equitable development policies</li>
                  <li>Strengthened community engagement in planning processes</li>
              </ul>`,
        statement: "As your ADEM delegate, I will bring my direct experience in state government and local planning to fight for housing accessibility, improved public transit, and social justice. My work with constituents has given me firsthand knowledge of our community's needs, and I am committed to advancing policies that create more equitable and accessible communities for all."
    }
];

// Function to create candidate cards
function createCandidateCard(candidate) {
    const article = document.createElement('article');
    article.className = 'candidate-card';
    article.setAttribute('role', 'listitem');
    
    // Add custom image positioning classes
    let imageClass = 'candidate-image';
    if (candidate.name === 'Connie Taylor-Smith') {
        imageClass += ' connie-image';
    } else if (candidate.name === 'Dilli Bhattarai') {
        imageClass += ' dilli-image';
    }
    
    article.innerHTML = `
        <img src="${candidate.image}" alt="${candidate.name}" class="${imageClass}">
        <div class="candidate-info">
            <h3 class="candidate-name">${candidate.name}</h3>
            <p class="candidate-title">${candidate.title}</p>
            <p class="candidate-bio">${candidate.shortBio}</p>
            <button class="read-more" aria-label="Read more about ${candidate.name}">Read More</button>
        </div>
    `;

    // Add click handler for the entire card
    article.addEventListener('click', (e) => {
        // Don't trigger twice if clicking the Read More button
        if (!e.target.classList.contains('read-more')) {
            showCandidateModal(candidate);
        }
    });

    // Add click handler for the read more button
    const readMoreBtn = article.querySelector('.read-more');
    readMoreBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent double-triggering with card click
        showCandidateModal(candidate);
    });

    return article;
}

// Function to show candidate modal
function showCandidateModal(candidate) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'modal-title');
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-header-content">
                    <img src="${candidate.image}" alt="${candidate.name}" class="modal-candidate-image">
                    <div class="modal-title-group">
                        <h2 id="modal-title" class="modal-title">${candidate.name}</h2>
                        <p class="modal-subtitle">${candidate.title}</p>
                        <a href="https://docs.google.com/document/d/1ZMa8lVLAsc6mMSspWeUPIzzCoasGhtpAkSOEfQYc-GU/edit?tab=t.0" target="_blank" rel="noopener noreferrer" class="statement-button">
                            View Candidate Statement
                            <span class="visually-hidden">for ${candidate.name} (Opens in new tab)</span>
                        </a>
                    </div>
                </div>
                <button class="modal-close" aria-label="Close">×</button>
            </div>
            <div class="modal-body">
                <div class="candidate-statement">
                    ${candidate.bio}
                </div>
            </div>
        </div>
    `;

    // Add close functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
            document.removeEventListener('keydown', closeOnEscape);
        }
    });

    document.body.appendChild(modal);
    // Trigger animation after append
    setTimeout(() => modal.classList.add('active'), 10);
}

// Initialize the candidate grid
function initializeCandidateGrid() {
    const grid = document.querySelector('.candidates-grid');
    candidates.forEach(candidate => {
        grid.appendChild(createCandidateCard(candidate));
    });
}

// Get the scroll-to-top button and nav brand link
const scrollTopBtn = document.getElementById("scrollTopBtn");
const navBrandLink = document.querySelector(".nav-brand-link");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add click handler for nav brand link
navBrandLink.addEventListener('click', function(e) {
    e.preventDefault();
    scrollToTop();
});

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCandidateGrid); 