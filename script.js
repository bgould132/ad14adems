// Candidate data in ballot order
const candidates = [
    {
        name: "Andrea Dooley",
        title: "Labor Arbitrator & Community Leader",
        image: "images/AD-14 Candidate Headshots/Andrea Dooley.jpg",
        bio: `<p>A distinguished labor arbitrator and community leader with extensive experience in dispute resolution and public service.</p>
              <h5 class="mt-4">Current Roles</h5>
              <ul>
                  <li>Labor Arbitrator hearing public and private sector grievance disputes throughout California</li>
                  <li>Member of the National Academy of Arbitrators</li>
                  <li>Published author of two books on Labor Arbitration</li>
              </ul>
              <h5 class="mt-4">Key Experience</h5>
              <ul>
                  <li>Former Oakland Police Commissioner (2017-2019)</li>
                  <li>President and Treasurer of Oakland Technical High School PTSA (2020-2024)</li>
                  <li>Former partner at Weinberg, Roger & Rosenfeld, representing unions and trust funds</li>
                  <li>Northern California National Coordinator for Coalition of Kaiser-Permanente Unions</li>
                  <li>Safety Leader at Oakland and Richmond Kaiser Foundation Hospitals</li>
                  <li>Oversaw AFL-CIO Voter Protection Project in Nevada (2008)</li>
              </ul>
              <h5 class="mt-4">Priorities</h5>
              <ul>
                  <li>Labor relations and workers' rights</li>
                  <li>Police reform and accountability</li>
                  <li>Education system improvement</li>
                  <li>Dispute resolution and mediation</li>
              </ul>`,
        statement: "Committed to bringing expertise in labor relations, police reform, and education to serve AD-14. Skilled mediator focused on resolving complex disputes and building consensus for progressive change."
    },
    {
        name: "Anthony Caro",
        title: "Education Policy Advocate",
        image: "images/AD-14 Candidate Headshots/Anthony Caro.jpg",
        bio: `<p>A dedicated education advocate and community organizer with military service experience and a strong commitment to public education.</p>
              <h5 class="mt-4">Background</h5>
              <ul>
                  <li>US Army Sergeant and Non-commissioned Officer</li>
                  <li>Treasurer of West County Democratic Club</li>
                  <li>Experienced education policy advocate</li>
              </ul>
              <h5 class="mt-4">Priorities</h5>
              <ul>
                  <li>Improving public education systems</li>
                  <li>Supporting teachers and education professionals</li>
                  <li>Advancing career readiness programs</li>
                  <li>Implementing community schools model</li>
              </ul>`,
        statement: "Champion for education system improvement, worker's rights, and universal healthcare. Advocates for progressive education policies, supporting teachers, career readiness, and community schools model."
    },
    {
        name: "Cesar Zepeda",
        title: "Richmond City Councilmember",
        image: "images/AD-14 Candidate Headshots/Cesar Zepeda.jpg",
        bio: `<p>A groundbreaking leader in Richmond politics and a champion for LGBTQ+ rights and community development.</p>
              <h5 class="mt-4">Leadership Roles</h5>
              <ul>
                  <li>First openly gay man on Richmond City Council</li>
                  <li>Co-founder and president of Richmond Rainbow Pride</li>
                  <li>Co-founder of Somos Latin@s</li>
                  <li>Founder of Hilltop District Homeowners & Stakeholders Association</li>
              </ul>
              <h5 class="mt-4">Key Initiatives</h5>
              <ul>
                  <li>Challenging oil company pollution</li>
                  <li>Raising minimum wage</li>
                  <li>Implementing rent control</li>
                  <li>Improving community policing</li>
              </ul>`,
        statement: "Progressive leader focused on challenging oil company pollution, raising minimum wage, implementing rent control, and improving community policing. Dedicated to empowering residents and community development."
    },
    {
        name: "Connie Taylor-Smith",
        title: "Community Advocate",
        image: "images/AD-14 Candidate Headshots/Connie Taylor-Smith.jpg",
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
    article.innerHTML = `
        <img src="${candidate.image}" alt="${candidate.name}" class="candidate-image">
        <div class="candidate-info">
            <h3 class="candidate-name">${candidate.name}</h3>
            <p class="candidate-title">${candidate.title}</p>
            <p class="candidate-bio">${candidate.bio}</p>
            <button class="read-more" aria-label="Read more about ${candidate.name}">Read More</button>
        </div>
    `;

    // Add click handler for the read more button
    article.querySelector('.read-more').addEventListener('click', () => {
        showCandidateModal(candidate);
    });

    return article;
}

// Function to show candidate modal
async function showCandidateModal(candidate) {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'modal-title');
    
    // Try to fetch the full statement
    let statement = '';
    try {
        const response = await fetch(candidate.statement);
        if (response.ok) {
            statement = await response.text();
        }
    } catch (e) {
        console.error('Error loading candidate statement:', e);
    }

    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal" aria-label="Close">×</button>
            <div class="modal-header">
                <img src="${candidate.image}" alt="${candidate.name}" class="modal-image">
                <div class="modal-title-group">
                    <h2 id="modal-title">${candidate.name}</h2>
                    <p class="modal-subtitle">${candidate.title}</p>
                </div>
            </div>
            <div class="modal-body">
                <div class="candidate-statement">
                    ${statement || candidate.bio}
                </div>
            </div>
        </div>
    `;

    // Add close functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', closeOnEscape);
        }
    });

    document.body.appendChild(modal);
}

// Initialize the candidate grid
function initializeCandidateGrid() {
    const grid = document.querySelector('.candidates-grid');
    candidates.forEach(candidate => {
        grid.appendChild(createCandidateCard(candidate));
    });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCandidateGrid); 