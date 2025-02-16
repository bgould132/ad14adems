// Candidate data in ballot order
const candidates = [
    {
        name: "Andrea Dooley",
        title: "Labor Arbitrator & Community Leader",
        image: "images/AD-14 Candidate Headshots/Andrea Dooley.jpg",
        shortBio: "Experienced labor arbitrator and community leader with over 20 years in dispute resolution and public service.",
        bio: `<p>A distinguished labor arbitrator and community leader with over two decades of experience in labor relations, dispute resolution, and public service.</p>
              
              <h5>Professional Experience</h5>
              <ul>
                  <li>Full-time Labor Arbitrator since 2014, handling grievance arbitrations, civil service hearings, and fact-finding hearings</li>
                  <li>Lecturer at Berkeley Law School, University of California (2022-present)</li>
                  <li>Member of Federal Mediation and Conciliation Service (FMCS) panels</li>
                  <li>Author of "The Labor Arbitration Career" (2022)</li>
                  <li>Former partner at Weinberg, Roger & Rosenfeld, representing unions and trust funds</li>
              </ul>

              <h5>Public Service & Leadership</h5>
              <ul>
                  <li>Oakland Police Commissioner (2017-2019), focusing on police reform and accountability</li>
                  <li>President and Treasurer of Oakland Technical High School PTSA (2020-2024)</li>
                  <li>Northern California National Coordinator for Coalition of Kaiser-Permanente Unions</li>
                  <li>Safety Leader at Oakland and Richmond Kaiser Foundation Hospitals</li>
                  <li>AFL-CIO Voter Protection Project Leader in Nevada (2008)</li>
              </ul>

              <h5>Areas of Expertise</h5>
              <ul>
                  <li>Contract interpretation and disciplinary issues</li>
                  <li>Employment law and representation issues</li>
                  <li>Healthcare, entertainment, building trades, and public sector arbitration</li>
                  <li>ERISA and occupational safety and health</li>
                  <li>Mentoring and supporting new arbitrators</li>
              </ul>`,
        statement: "As your ADEM delegate, I will bring over 20 years of experience in labor relations and dispute resolution to fight for workers' rights, fair labor practices, and police accountability. My background in healthcare, education, and public service has given me a deep understanding of the challenges facing our communities. I am committed to advancing progressive policies that protect workers, improve public education, and ensure accountability in our institutions."
    },
    {
        name: "Anthony Caro",
        title: "Education Advocate & US Army Veteran",
        image: "images/AD-14 Candidate Headshots/Anthony Caro.jpg",
        shortBio: "Education advocate, US Army veteran, and founder of Citizens Power Network, dedicated to improving public schools and civic engagement.",
        bio: `<p>A passionate education advocate and military veteran committed to improving public education and civic engagement in our communities.</p>
              
              <h5>Education & Military Service</h5>
              <ul>
                  <li>UC Berkeley student majoring in Political Science, Philosophy, and History</li>
                  <li>Served 4 years active duty in the U.S. Army (South Korea and Kuwait)</li>
                  <li>Current Sergeant in the National Guard</li>
                  <li>Graduate of Los Angeles public schools</li>
              </ul>

              <h5>Community Leadership</h5>
              <ul>
                  <li>Founder of Citizens Power Network, focusing on K-12 civic engagement</li>
                  <li>Candidate for Contra Costa County Board of Education Area 1 (2024)</li>
                  <li>Former candidate for West Contra Costa Unified School District board (2018)</li>
                  <li>Organized voter registration drives for WCCUSD students</li>
                  <li>Collaborated with Healthy Richmond and RYSE Center on youth initiatives</li>
              </ul>

              <h5>Key Initiatives</h5>
              <ul>
                  <li>Organizing for school safety and gun violence prevention</li>
                  <li>Advocating for community schools model implementation</li>
                  <li>Working to improve teacher retention and support</li>
                  <li>Enhancing college and career readiness programs</li>
                  <li>Building partnerships between schools and community organizations</li>
              </ul>`,
        statement: "I am running to be your ADEM delegate to fight for quality public education, safe schools, and civic engagement. Drawing from my experience as a veteran, education advocate, and community organizer, I will work to ensure our Democratic Party prioritizes educational equity, supports our teachers, and creates pathways to success for all students. Together, we can build stronger community schools and prepare our youth for the challenges ahead."
    },
    {
        name: "Cesar Zepeda",
        title: "Richmond City Councilmember & LGBTQ+ Leader",
        image: "images/AD-14 Candidate Headshots/Cesar Zepeda.jpg",
        shortBio: "First openly gay Richmond City Council member, co-founder of Richmond Rainbow Pride, and champion for affordable housing and LGBTQ+ rights.",
        bio: `<p>A groundbreaking leader in Richmond politics and a tireless advocate for LGBTQ+ rights, affordable housing, and community development.</p>
              
              <h5>Historic Leadership</h5>
              <ul>
                  <li>First openly gay man elected to Richmond City Council (2022)</li>
                  <li>Co-founder and President of Richmond Rainbow Pride</li>
                  <li>President of Hilltop District Neighborhood Council</li>
                  <li>Co-founder of Somos Latin@s</li>
              </ul>

              <h5>Housing & Community Development</h5>
              <ul>
                  <li>Leading initiatives to create affordable housing throughout Richmond</li>
                  <li>Advocating for removal of bureaucratic barriers to housing development</li>
                  <li>Proposed $300,000 contribution for tiny house project to house homeless youth</li>
                  <li>Successfully completed Vista Del Mar Park infrastructure project</li>
                  <li>Working to utilize city-owned land for affordable housing development</li>
              </ul>

              <h5>Policy Achievements</h5>
              <ul>
                  <li>Established Richmond as a welcoming city for LGBTQ+ residents and businesses</li>
                  <li>Advanced environmental justice initiatives against industrial pollution</li>
                  <li>Supported minimum wage increases and worker protections</li>
                  <li>Implemented rent control measures</li>
                  <li>Enhanced community policing programs</li>
              </ul>`,
        statement: "As your ADEM delegate, I will continue fighting for affordable housing, environmental justice, and LGBTQ+ rights. My experience as Richmond's first openly gay councilmember has shown me the importance of representation and the power of community-driven change. I am committed to making our Democratic Party more inclusive while addressing the critical issues of housing affordability, environmental protection, and economic justice."
    },
    {
        name: "Connie Taylor-Smith",
        title: "Community Advocate",
        image: "images/AD-14 Candidate Headshots/Connie Taylor-Smith.jpg",
        shortBio: "Progressive community advocate working to advance social justice and empower local voices in Assembly District 14.",
        bio: `<p>A dedicated community advocate working to advance progressive values in Assembly District 14.</p>
              <h5 class="mt-4">Focus Areas</h5>
              <ul>
                  <li>Community engagement and empowerment</li>
                  <li>Progressive policy advocacy</li>
                  <li>Local community development</li>
              </ul>`,
        statement: "Committed to representing community interests and advancing progressive policies in the California Democratic Party."
    },
    {
        name: "Dan Kalb",
        title: "Environmental Advocate",
        image: "images/AD-14 Candidate Headshots/Dan Kalb.jpeg",
        shortBio: "Environmental policy leader with 12 years on Oakland City Council. Champion for climate action, affordable housing, and gun violence prevention.",
        bio: `<p>A seasoned environmental policy leader with extensive experience in local government and progressive reform.</p>
              <h5 class="mt-4">Experience</h5>
              <ul>
                  <li>12 years on Oakland City Council</li>
                  <li>Environmental Policy Director</li>
                  <li>Progressive Reform Leader</li>
              </ul>
              <h5 class="mt-4">Key Accomplishments</h5>
              <ul>
                  <li>Led affordable housing initiatives</li>
                  <li>Championed climate change policies</li>
                  <li>Developed anti-gun violence programs</li>
                  <li>Advanced emergency preparedness measures</li>
                  <li>Supported public education improvements</li>
              </ul>`,
        statement: "Champion for affordable housing, climate action, gun violence prevention, and public education. Advocates for Green New Deal, Medicare for All, and standing against hate and bigotry."
    },
    {
        name: "Dilli Bhattarai",
        title: "Hercules City Councilmember",
        image: "images/AD-14 Candidate Headshots/Dilli Bhattarai.jpg",
        shortBio: "Hercules City Council member and finance expert advocating for sustainable transportation and inclusive community development.",
        bio: `<p>A passionate advocate for sustainable transportation and regional connectivity, bringing extensive experience in both public service and finance.</p>
              <h5 class="mt-4">Current Roles</h5>
              <ul>
                  <li>Hercules City Council Member</li>
                  <li>Mayor for 2028</li>
              </ul>
              <h5 class="mt-4">Experience</h5>
              <ul>
                  <li>Former Vice President of PTO at Hercules High School</li>
                  <li>Former Planning Commissioner</li>
                  <li>20+ years managing large-scale finances in Silicon Valley</li>
              </ul>
              <h5 class="mt-4">Priorities</h5>
              <ul>
                  <li>Sustainable transportation development</li>
                  <li>Regional connectivity improvement</li>
                  <li>Economic development</li>
                  <li>Inclusive community building</li>
              </ul>`,
        statement: "Voice for progress, justice, and community-driven change. Priorities include affordable housing, sustainable transportation, universal healthcare, and LGBTQ+ & immigrant rights."
    },
    {
        name: "Gabe Sandoval",
        title: "Planning Commissioner",
        image: "images/AD-14 Candidate Headshots/Gabe Sandoval.jpg",
        shortBio: "State Senate staff member and Pinole Planning Commissioner working to improve housing accessibility and public transit.",
        bio: `<p>A dedicated public servant with extensive experience in state government and community service.</p>
              <h5 class="mt-4">Current Roles</h5>
              <ul>
                  <li>California State Senate staff member under Senator Jesse Arreguín</li>
                  <li>Pinole Planning Commissioner</li>
              </ul>
              <h5 class="mt-4">Experience</h5>
              <ul>
                  <li>Former staff member for State Senator Nancy Skinner</li>
                  <li>Managed California Rental Assistance Program casework</li>
                  <li>Coordinates with regional transit partners</li>
              </ul>
              <h5 class="mt-4">Focus Areas</h5>
              <ul>
                  <li>Housing accessibility</li>
                  <li>Public transit improvement</li>
                  <li>Social justice</li>
                  <li>Economic opportunity</li>
              </ul>`,
        statement: "Dedicated to equity, social justice, and economic opportunity. Committed to meeting housing needs and improving public transit access. Strong advocate for community concerns."
    },
    {
        name: "Laura Babitt",
        title: "Former School Board Director",
        image: "images/AD-14 Candidate Headshots/Laura Babitt.JPG",
        shortBio: "Education advocate who improved teacher pay by 30% and expanded career programs. Champion for educational equity and youth empowerment.",
        bio: `<p>A dedicated education advocate with 16 years of experience creating just and equitable public schools in Berkeley.</p>
              <h5 class="mt-4">Key Accomplishments</h5>
              <ul>
                  <li>Improved educator pay and benefits by average of 30%</li>
                  <li>Enhanced college eligibility rates</li>
                  <li>Expanded career technical programming</li>
                  <li>Improved BUSD's climate resilience & sustainability plan</li>
                  <li>Prioritized spending for vulnerable students</li>
              </ul>
              <h5 class="mt-4">Priorities</h5>
              <ul>
                  <li>Lowering California's poverty rates</li>
                  <li>Improving public schools</li>
                  <li>Supporting youth-focused organizations</li>
                  <li>Advancing educational equity</li>
              </ul>`,
        statement: "Champion for quality education, affordable housing, and sustainable healthcare. Dedicated to lowering poverty rates and supporting organizations that impact youth positively."
    },
    {
        name: "Neil Tsutsui",
        title: "Environmental Scientist & Professor",
        image: "images/AD-14 Candidate Headshots/Neil Tsutsui.jpg",
        shortBio: "UC Berkeley professor and environmental scientist leading research on climate change and forest conservation. Former chair of multiple environmental committees.",
        bio: `<p>A distinguished environmental scientist and educator with extensive experience in environmental leadership and conservation.</p>
              <h5 class="mt-4">Current Roles</h5>
              <ul>
                  <li>Professor of Environmental Science, Policy, and Management at UC Berkeley</li>
                  <li>Director of UC Berkeley Central Sierra Field Research Stations</li>
              </ul>
              <h5 class="mt-4">Leadership Positions</h5>
              <ul>
                  <li>Former Chair of Parks Advisory Committee for East Bay Regional Park District</li>
                  <li>Former Chair of El Cerrito Environmental Quality Committee</li>
                  <li>Former Vice Chair of West Contra Costa County Sierra Club</li>
              </ul>
              <h5 class="mt-4">Research Focus</h5>
              <ul>
                  <li>Environmental conservation</li>
                  <li>Forest management</li>
                  <li>Climate change impacts</li>
                  <li>Ecological research</li>
              </ul>`,
        statement: "Champion for science, education, and environmental protection. Working to protect California forests, reduce wildfire risk, and support public education system."
    },
    {
        name: "Nick Pilch",
        title: "Former Mayor, Albany",
        image: "images/AD-14 Candidate Headshots/Nick Pilch.jpeg",
        shortBio: "Former Albany Mayor and current BART operator championing transportation equity and housing justice. Leader in environmental protection and LGBTQ+ rights.",
        bio: `<p>An experienced local government leader and environmental advocate with a strong track record in transportation and housing policy.</p>
              <h5 class="mt-4">Experience</h5>
              <ul>
                  <li>Former Council Member and Mayor of Albany</li>
                  <li>Current Planning & Zoning Commissioner</li>
                  <li>Co-founder of Albany Strollers & Rollers</li>
                  <li>Sierra Club California Executive Committee member</li>
              </ul>
              <h5 class="mt-4">Key Accomplishments</h5>
              <ul>
                  <li>Worked on Albany's Housing Element</li>
                  <li>Developed San Pablo Avenue Specific Plan</li>
                  <li>Initiated Albany's Policing Commission</li>
                  <li>Advanced LGBTQ+ rights initiatives</li>
              </ul>
              <h5 class="mt-4">Professional Background</h5>
              <ul>
                  <li>Current BART Train Operator</li>
                  <li>Member of Amalgamated Transit Union 1555</li>
                  <li>Former Software Engineering Manager</li>
              </ul>`,
        statement: "Advocate for environmental protection, housing justice, transportation equity, and social justice. Initiated Albany's Policing Commission and supported LGBTQ+ rights."
    },
    {
        name: "Sarah Bell",
        title: "Housing Advocate",
        image: "images/AD-14 Candidate Headshots/Sarah Bell.jpg",
        shortBio: "Housing advocate and labor organizer leading East Bay YIMBY. Tech worker organizing for workers' rights and affordable housing near transit.",
        bio: `<p>A dedicated housing advocate and labor organizer with a strong commitment to progressive values and community development.</p>
              <h5 class="mt-4">Current Roles</h5>
              <ul>
                  <li>Lead of East Bay YIMBY</li>
                  <li>Board of Stewards member for East Bay for Everyone</li>
                  <li>Chair of Sierra Club Northern Alameda County Housing Committee</li>
                  <li>Berkeley Housing Advisory Commission member</li>
              </ul>
              <h5 class="mt-4">Professional Experience</h5>
              <ul>
                  <li>Software Engineer</li>
                  <li>Founding member of Alphabet Workers Union</li>
                  <li>Former chair of AWU Legislative Political Committee</li>
              </ul>
              <h5 class="mt-4">Focus Areas</h5>
              <ul>
                  <li>Housing affordability</li>
                  <li>Workers' rights</li>
                  <li>Transit-oriented development</li>
                  <li>Labor organizing</li>
              </ul>`,
        statement: "Fighting for sustainable California where working families thrive. Champion for housing near jobs and transit, workers' rights, healthcare, and civil rights."
    },
    {
        name: "Susan Wengraf",
        title: "Former Vice Mayor and Councilmember",
        image: "images/AD-14 Candidate Headshots/Susan Wengraf.jpg",
        shortBio: "16-year Berkeley City Council veteran leading regional wildfire safety initiatives. Champion for housing affordability and government transparency.",
        bio: `<p>A seasoned public servant with extensive experience in local government and environmental protection.</p>
              <h5 class="mt-4">Experience</h5>
              <ul>
                  <li>16 years on Berkeley City Council</li>
                  <li>Former Planning Commission member</li>
                  <li>Former President of Berkeley Democratic Club</li>
              </ul>
              <h5 class="mt-4">Leadership Roles</h5>
              <ul>
                  <li>Chair and founding member of East Bay Wildfire Coalition of Governments</li>
                  <li>Led regional approach to wildfire safety in Alameda and Contra Costa counties</li>
              </ul>
              <h5 class="mt-4">Priority Areas</h5>
              <ul>
                  <li>Housing affordability</li>
                  <li>Public safety</li>
                  <li>Gun violence prevention</li>
                  <li>Wildfire mitigation</li>
                  <li>Government transparency</li>
              </ul>`,
        statement: "Advocate for wildfire mitigation, healthcare access, affordable housing, and government transparency. Focus on safety, climate resilience, and accountability."
    },
    {
        name: "Teddy Gray King",
        title: "Former Mayor, Piedmont",
        image: "images/AD-14 Candidate Headshots/Teddy Gray King.jpg",
        shortBio: "Former Piedmont Mayor who passed climate action plans and expanded housing. Transportation commissioner advancing regional solutions.",
        bio: `<p>An accomplished public servant with a strong track record in housing, environmental policy, and transportation planning.</p>
              <h5 class="mt-4">Key Accomplishments as Mayor</h5>
              <ul>
                  <li>Adopted historic housing element for increased home construction</li>
                  <li>Passed two climate action plans reducing greenhouse gases</li>
                  <li>Implemented legislation for all-electric public facilities</li>
                  <li>Advanced regional transportation initiatives</li>
              </ul>
              <h5 class="mt-4">Professional Experience</h5>
              <ul>
                  <li>Member of Alameda County Transportation Commission</li>
                  <li>Public affairs consultant</li>
                  <li>Former Congressional aide</li>
                  <li>Former chief of staff at San Francisco Board of Supervisors</li>
              </ul>
              <h5 class="mt-4">Education</h5>
              <ul>
                  <li>UC Berkeley graduate</li>
              </ul>`,
        statement: "Promoting sustainable, just, and secure future. Champion for progressive values, climate action, and housing expansion. Passionate advocate for immigrant communities."
    },
    {
        name: "Y'Anad Burrell",
        title: "Health Equity Advocate",
        image: "images/AD-14 Candidate Headshots/Y_Anad Burrell.jpg",
        shortBio: "Mental Health Commissioner and environmental justice leader improving health outcomes in Richmond and Contra Costa County.",
        bio: `<p>A dedicated health equity advocate with extensive experience in community health and environmental justice.</p>
              <h5 class="mt-4">Current Roles</h5>
              <ul>
                  <li>Mental Health Commissioner for Contra Costa County</li>
                  <li>Richmond Housing Commissioner</li>
                  <li>Communications co-chair for Healthy Contra Costa</li>
              </ul>
              <h5 class="mt-4">Leadership Experience</h5>
              <ul>
                  <li>Community Steering Committee member for Richmond, North Richmond, and San Pablo</li>
                  <li>Co-chair of Path To Clean Air Implementation Plan (2020-2023)</li>
                  <li>Former instructor at San Francisco State University</li>
                  <li>Freelance journalist with Post News Group</li>
              </ul>
              <h5 class="mt-4">Key Achievements</h5>
              <ul>
                  <li>Led development of strategies to reduce harmful air pollution</li>
                  <li>Advanced community health initiatives</li>
                  <li>Improved mental health resource access</li>
              </ul>`,
        statement: "Champion for health equity, quality healthcare access, and breaking systemic barriers. Focused on improving health outcomes for children, youth, and families."
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