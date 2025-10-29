export const migrationData = [
  {
    country: "Australia",
    visaTypes: [
      {
        type: "Skilled Work Visas",
        visas: [
          {
            name: "Skilled Independent (subclass 189)",
            slug: "skilled-independent-189",
            content: "A points-based permanent residency visa for invited skilled workers and eligible New Zealand citizens. Allows you to live and work permanently anywhere in Australia without needing employer or state sponsorship. Must score at least 65 points and receive an invitation through SkillSelect."
          },
          {
            name: "Skilled Nominated (subclass 190)",
            slug: "skilled-nominated-190",
            content: "A permanent residency visa for skilled workers nominated by an Australian state or territory government. Requires state nomination (adds 5 points to your score) and commitment to live and work in the nominating state for at least 2 years. Must score at least 65 points including nomination."
          },
          {
            name: "Skilled Work Regional (Provisional) (subclass 491)",
            slug: "skilled-work-regional-491",
            content: "A 5-year provisional visa for skilled workers nominated by a state/territory government or sponsored by eligible family member. Allows you to live, work, and study in designated regional Australia. Pathway to PR through subclass 191 after 3 years of living and working in regional areas."
          }
        ]
      },
      {
        type: "Employer Sponsored Visas",
        visas: [
          {
            name: "Employer Nomination Scheme (subclass 186)",
            slug: "employer-nomination-scheme-186",
            content: "Permanent residency visa for skilled workers nominated by an approved Australian employer. Three streams: Direct Entry (for applicants with skills assessment and less Australian experience), Temporary Residence Transition (for 482 visa holders with 2-3 years work experience), and Labour Agreement stream. Requires competent English (IELTS 6 each band)."
          },
          {
            name: "Skills in Demand (subclass 482)",
            slug: "skills-in-demand-482",
            content: "Temporary work visa (formerly TSS) introduced December 2024 to address labour shortages. Allows employers to sponsor skilled workers for 2-4 years. Three streams: Specialist Skills, Core Skills, and Essential Skills. Requires IELTS 5 each band unless exempted. Can transition to 186 visa after meeting work period requirements."
          },
          {
            name: "Temporary Work (Short Stay Specialist) (subclass 400)",
            slug: "temporary-work-short-stay-400",
            content: "For highly specialized short-term work (usually 3-6 months). For skilled people invited to do specific non-ongoing work that can't be filled by Australian workers. Can be pathway to PR through 407 → 482 → 186 transition."
          }
        ]
      },
      {
        type: "Training & Temporary Activity Visas",
        visas: [
          {
            name: "Temporary Activity (subclass 408)",
            slug: "temporary-activity-408",
            content: "For temporary activities including cultural exchange, research, sporting events, entertainment, or government-endorsed events. Valid for up to 2 years depending on activity. Work rights limited to the specific activity. Used extensively during COVID-19 for essential workers."
          },
          {
            name: "Training (subclass 407)",
            slug: "training-407",
            content: "For workplace-based training or professional development up to 2 years. Suitable for gaining registration/licensing, enhancing skills, or participating in structured workplace training. Employer must submit training plans to authorities. Can build Australian experience for transition to 482 → 186."
          }
        ]
      },
      {
        type: "Partner & Family Visas",
        visas: [
          {
            name: "Partner (subclass 820/801) - Onshore",
            slug: "partner-820-801",
            content: "Two-stage visa for partners of Australian citizens, PR holders, or eligible NZ citizens applying from within Australia. Subclass 820 (temporary) granted first, followed by 801 (permanent) after approximately 2 years. Relationship must be registered with state government (e.g., NSW). Full work and study rights from temporary stage."
          },
          {
            name: "Partner (subclass 309/100) - Offshore",
            slug: "partner-309-100",
            content: "Two-stage visa for partners applying from outside Australia. Subclass 309 (temporary) allows entry to Australia with full work rights and Medicare access. Subclass 100 (permanent) assessed approximately 2 years after lodging 309 application. No separate application needed for second stage."
          }
        ]
      },
      {
        type: "Graduate & Study Visas",
        visas: [
          {
            name: "Temporary Graduate (subclass 485)",
            slug: "temporary-graduate-485",
            content: "Post-study work visa for international graduates (2-5 years depending on qualification and study location). Two streams: Graduate Work stream and Post-Study Work stream. Duration proportional to length of Australian studies. Allows full-time work rights to gain Australian experience."
          },
          {
            name: "Visitor (subclass 600)",
            slug: "visitor-600",
            content: "For tourism, visiting family/friends, or short business activities (3-12 months). Not for long-term work or study. Can transition to subclass 186 or 482 if circumstances change and employer sponsorship is obtained."
          }
        ]
      },
      {
        type: "Protection & Review",
        visas: [
          {
            name: "Protection (subclass 866)",
            slug: "protection-866",
            content: "For people in Australia seeking asylum or refugee protection. If approved, grants permanent residency. Managed by Department of Home Affairs with review rights through Administrative Review Tribunal (ART)."
          }
        ]
      }
    ]
  },
  {
    country: "Canada",
    visaTypes: [
      {
        type: "Express Entry Programs",
        visas: [
          {
            name: "Federal Skilled Worker Program (FSWP)",
            slug: "federal-skilled-worker-fswp",
            content: "Points-based program through Express Entry for skilled professionals with foreign work experience. Requires minimum 67/100 points on FSW grid before entering Express Entry pool. Scored on Comprehensive Ranking System (CRS) based on age, education, work experience, and language skills (English/French). Highest-ranking candidates receive Invitation to Apply (ITA) for PR."
          },
          {
            name: "Federal Skilled Trades Program (FSTP)",
            slug: "federal-skilled-trades-fstp",
            content: "For skilled tradespeople (electricians, welders, plumbers, etc.) with qualifications and work experience in eligible trade occupations. Must have valid job offer or certificate of qualification from Canadian province/territory. Processed through Express Entry system."
          },
          {
            name: "Canadian Experience Class (CEC)",
            slug: "canadian-experience-class-cec",
            content: "For skilled workers with at least 1 year of Canadian work experience. Ideal for temporary foreign workers and international graduates already in Canada. No foreign work experience required. Processed through Express Entry with typically lower CRS score requirements than FSWP."
          }
        ]
      },
      {
        type: "Provincial Nominee Programs (PNP)",
        visas: [
          {
            name: "Express Entry - PNP Stream",
            slug: "express-entry-pnp-stream",
            content: "Each province (Ontario, Alberta, BC, etc.) nominates skilled workers based on local labour market needs. Provincial nomination adds 600 CRS points, virtually guaranteeing ITA for PR. Different provinces have different occupation lists and requirements. Popular streams include Ontario Immigrant Nominee Program (OINP), BC PNP, and Alberta Advantage Immigration Program (AAIP)."
          },
          {
            name: "PNP Base Stream (Non-Express Entry)",
            slug: "pnp-base-stream",
            content: "Direct provincial nomination outside Express Entry system. Longer processing time than Express Entry-linked PNP. Each province has unique eligibility criteria, occupation lists, and application processes. Suitable for workers not eligible for Express Entry or preferring specific province."
          }
        ]
      },
      {
        type: "Rural & Community Immigration",
        visas: [
          {
            name: "Rural Community Immigration Program (RCIP)",
            slug: "rural-community-immigration-rcip",
            content: "Launched 2025, replacing RNIP. Direct pathway to PR for skilled workers in 14 designated rural communities. Requires job offer from designated employer, community recommendation, minimum 1 year (1,560 hours) work experience, language proficiency (CLB 4-6 depending on NOC), and high school diploma with ECA. Settlement funds required unless already working in Canada with valid permit. Each community has limited annual allocations."
          }
        ]
      },
      {
        type: "Work Permits",
        visas: [
          {
            name: "Post-Graduation Work Permit (PGWP)",
            slug: "post-graduation-work-permit-pgwp",
            content: "Open work permit for international graduates of eligible Canadian institutions (DLI). Duration based on program length (8 months to 3 years maximum). New restrictions from November 2024: only available to public college graduates in labour shortage fields; bachelor's, master's, and doctoral graduates remain eligible regardless of field. Pathway to Canadian Experience Class."
          },
          {
            name: "Labour Market Impact Assessment (LMIA) Work Permit",
            slug: "lmia-work-permit",
            content: "Employer-specific work permit requiring positive LMIA from Employment and Social Development Canada (ESDC). Employer must prove no qualified Canadian/PR available for position. Can provide 50-200 additional CRS points if supporting Express Entry application. Duration varies based on job offer and LMIA approval."
          }
        ]
      },
      {
        type: "Family Sponsorship",
        visas: [
          {
            name: "Spousal/Common-law Partner Sponsorship",
            slug: "spousal-sponsorship",
            content: "For Canadian citizens and PR holders to sponsor spouse or common-law partner. Two options: Inland (applicant in Canada with temporary status) or Outland (applicant outside Canada or in Canada without status). Inland applicants receive open work permit while application processes. Processing time: 12-18 months."
          },
          {
            name: "Parent & Grandparent Sponsorship",
            slug: "parent-grandparent-sponsorship",
            content: "Canadian citizens and PR holders can sponsor parents/grandparents. Requires meeting Minimum Necessary Income (MNI) for 3 consecutive years (30% above LICO). Limited annual intake through lottery system. Processing time: 20-24 months. Super Visa available as temporary alternative."
          }
        ]
      }
    ]
  },
  {
    country: "United Kingdom",
    visaTypes: [
      {
        type: "Work Visas",
        visas: [
          {
            name: "Skilled Worker Visa",
            slug: "skilled-worker-visa-uk",
            content: "Points-based visa requiring 70 points minimum. Must have job offer from UK Home Office approved sponsor (20 points), job at appropriate skill level RQF3+ (20 points), and English language B1/B2 level (10 points). Minimum salary £38,700 annually from April 2024 (20 points tradeable). Valid up to 5 years, renewable. Pathway to Indefinite Leave to Remain (ILR) after 5 years. New 2025 rule: B2 English required for new applications."
          },
          {
            name: "Global Talent Visa",
            slug: "global-talent-visa-uk",
            content: "For leaders and potential leaders in academia, research, arts, culture, and digital technology. Two routes: Exceptional Talent (established leaders) and Exceptional Promise (emerging leaders). Requires endorsement from designated competent body. No job offer needed. 5-year validity, pathway to ILR after 3 years for Exceptional Talent or 5 years for Exceptional Promise."
          },
          {
            name: "Health and Care Worker Visa",
            slug: "health-care-worker-visa-uk",
            content: "For healthcare professionals with eligible health/social care job offers in UK. Faster processing and reduced fees compared to Skilled Worker visa. Exemption from Immigration Health Surcharge. Must meet same points requirement (70) but specific NHS/care sector pathway. Can bring dependents."
          },
          {
            name: "Senior or Specialist Worker Visa",
            slug: "senior-specialist-worker-visa-uk",
            content: "For overseas workers of multinational companies being transferred to UK branch. Requires 60 points based on sponsorship, skill level, and salary (minimum £48,500 or £73,900 depending on circumstances). Maximum 5 years for senior roles, 2 years for specialist workers. No direct pathway to settlement."
          }
        ]
      },
      {
        type: "Graduate & Student Routes",
        visas: [
          {
            name: "Graduate Visa",
            slug: "graduate-visa-uk",
            content: "For international students who completed eligible UK degree. Allows 2 years work rights (3 years for PhD graduates). No job offer or sponsorship needed. Cannot be extended but can switch to Skilled Worker visa if secure appropriate employment. Must apply before current student visa expires."
          },
          {
            name: "High Potential Individual Visa",
            slug: "high-potential-individual-visa-uk",
            content: "For graduates from top 50 global universities (past 5 years). Allows 2-3 years stay (depending on qualification level) to work or look for work without sponsor. New 2025 rule: requires B2 English language proficiency. No direct pathway to settlement but can switch to Skilled Worker visa."
          }
        ]
      },
      {
        type: "Business & Investor Visas",
        visas: [
          {
            name: "Innovator Founder Visa",
            slug: "innovator-founder-visa-uk",
            content: "For experienced businesspeople wanting to establish innovative business in UK. Requires endorsement from approved endorsing body, minimum £50,000 investment funds. Initially 3 years, extendable. Pathway to ILR after 3 years if business criteria met. Replaced Innovator and Start-up visas in April 2023."
          }
        ]
      },
      {
        type: "Visitor Visas",
        visas: [
          {
            name: "Standard Visitor Visa",
            slug: "standard-visitor-visa-uk",
            content: "For tourism, business visits, medical treatment, or academic conferences. Valid 6 months (can apply for 2, 5, or 10-year multiple entry). Cannot work or access public funds. Can study up to 30 days. Most common short-term visa for non-visa-national visitors."
          }
        ]
      },
      {
        type: "Family & Settlement",
        visas: [
          {
            name: "Family Visa (Spouse/Partner)",
            slug: "family-visa-uk",
            content: "For partners of British citizens or settled persons. Requires minimum income threshold £29,000 (increasing based on children). English language A1 level initially, A2 for extension, B1 for ILR. Initially 33 months, then 30-month extension. ILR eligible after 5 years."
          }
        ]
      }
    ]
  },
  {
    country: "United States",
    visaTypes: [
      {
        type: "Employment-Based Green Cards",
        visas: [
          {
            name: "EB-1: Priority Workers",
            slug: "eb1-priority-workers",
            content: "First preference for persons of extraordinary ability in sciences, arts, education, business, or athletics; outstanding professors and researchers; multinational executives and managers. No labor certification required. Fastest employment-based green card. Can self-petition (EB-1A). Current priority date typically current for most countries except India and China."
          },
          {
            name: "EB-2: Advanced Degree Professionals",
            slug: "eb2-advanced-degree",
            content: "For professionals with advanced degrees (Master's or higher) or Bachelor's with 5 years progressive experience, and persons of exceptional ability. Requires labor certification (PERM) unless National Interest Waiver (NIW) granted. Long wait times for India (10-12 years) and China (2-3 years). July 2012 priority dates currently processing for India EB-2."
          },
          {
            name: "EB-3: Skilled Workers & Professionals",
            slug: "eb3-skilled-workers",
            content: "For professionals with Bachelor's degrees, skilled workers with minimum 2 years training/experience, and other workers (unskilled). Requires PERM labor certification. Processing time 2-5 years depending on country. Generally shorter wait times than EB-2 for Indian nationals currently."
          }
        ]
      },
      {
        type: "Nonimmigrant Work Visas",
        visas: [
          {
            name: "H-1B: Specialty Occupation",
            slug: "h1b-specialty-occupation",
            content: "For specialty occupations requiring Bachelor's degree or higher. Annual cap: 65,000 regular + 20,000 with US Master's or higher. Lottery system (March registration). Initial 3 years, extendable to 6 years. Can extend beyond 6 years if green card in process. Dual intent visa allowing green card pursuit. Requires Labor Condition Application (LCA) approval."
          },
          {
            name: "L-1: Intracompany Transfer",
            slug: "l1-intracompany-transfer",
            content: "For employees of international companies transferring to US office. L-1A for managers/executives (up to 7 years), L-1B for specialized knowledge workers (up to 5 years). Must have worked for company abroad for 1 continuous year in past 3 years. No annual cap. L-1A pathway to EB-1C green card."
          },
          {
            name: "O-1: Extraordinary Ability",
            slug: "o1-extraordinary-ability",
            content: "For individuals with extraordinary ability in sciences, arts, education, business, athletics, or extraordinary achievement in motion picture/TV. Requires extensive documentation of national/international acclaim. Initially 3 years, unlimited 1-year extensions. No annual cap. Common for researchers, artists, athletes, business leaders."
          }
        ]
      },
      {
        type: "Family-Based Immigration",
        visas: [
          {
            name: "Immediate Relative (IR): Spouses, Parents, Children",
            slug: "immediate-relative-ir",
            content: "For immediate relatives of US citizens: spouses (IR-1/CR-1), unmarried children under 21 (IR-2), parents of US citizens over 21 (IR-5). No annual quota or wait time. Fastest family-based immigration category. Process time: 12-24 months."
          },
          {
            name: "Family Preference Categories (F1-F4)",
            slug: "family-preference-f1-f4",
            content: "F1: Unmarried adult children of US citizens (7+ years). F2A: Spouses and children of green card holders (2-3 years). F2B: Unmarried adult children of green card holders (7+ years). F3: Married children of US citizens (10+ years). F4: Siblings of adult US citizens (15+ years). All subject to annual quotas and significant wait times."
          }
        ]
      },
      {
        type: "Visitor & Business Visas",
        visas: [
          {
            name: "B-1/B-2: Business & Tourism",
            slug: "b1-b2-visitor",
            content: "B-1 for business activities (meetings, conferences, negotiations). B-2 for tourism, medical treatment, visiting family. Usually granted for 6 months per entry, can request extension. Multiple-entry visas valid up to 10 years common. Cannot work or study full-time. Visa Waiver Program (VWP) available for 40 countries allowing 90-day stays without visa."
          }
        ]
      },
      {
        type: "Student & Exchange Visas",
        visas: [
          {
            name: "F-1: Academic Student",
            slug: "f1-student-visa",
            content: "For academic studies at accredited US institutions. Duration of Status (D/S) - valid for program length plus Optional Practical Training (OPT). Can work on-campus, off-campus with authorization. STEM graduates eligible for 24-month OPT extension (total 36 months). Pathway to H-1B through employer sponsorship."
          },
          {
            name: "J-1: Exchange Visitor",
            slug: "j1-exchange-visitor",
            content: "For educational and cultural exchange programs: students, interns, trainees, professors, research scholars. Duration varies by category. Some categories subject to 2-year home residence requirement. Common for medical residents and research scholars."
          }
        ]
      }
    ]
  },
  {
    country: "New Zealand",
    visaTypes: [
      {
        type: "Residence Visas",
        visas: [
          {
            name: "Skilled Migrant Category Resident Visa",
            slug: "skilled-migrant-resident-nz",
            content: "Points-based pathway requiring Expression of Interest (EOI). Must have job or job offer from accredited employer and score minimum 6 points for skills and work experience. Points awarded for qualifications (4-10 points), skilled employment (3-6 points), work experience (1-10 points), and bonus points for partner qualifications, close family in NZ, or current NZ work experience. Median wage requirement: NZ$31.61/hour (2024-25)."
          },
          {
            name: "Residence from Work - Green List",
            slug: "residence-from-work-green-list-nz",
            content: "Fast-tracked residence for occupations on Green List. Two pathways: Straight to Residence (immediate eligibility) and Work to Residence (after 2 years). Requires job offer from accredited employer in Green List occupation at or above median wage. Green List includes healthcare, engineering, ICT, construction, and education roles. Exemption from Skilled Migrant Category EOI process."
          }
        ]
      },
      {
        type: "Work Visas",
        visas: [
          {
            name: "Accredited Employer Work Visa (AEWV)",
            slug: "accredited-employer-work-visa-nz",
            content: "Employer-led work visa requiring job offer from accredited employer. Employer must complete job check before offering position. Valid 3-5 years depending on role and occupation level. 87 new occupations added November 2024 under National Occupation List (NOL). Can lead to residence through Green List or Skilled Migrant Category. Changes from March 2025: Work rights on interim visas for most applicants."
          },
          {
            name: "Specific Purpose or Event Work Visa",
            slug: "specific-purpose-work-visa-nz",
            content: "For specific temporary work situations: religious workers, charitable work, events, voluntary work, or specific projects. Duration varies based on purpose (up to 3 years). Replaced several previous work visa categories. Does not generally lead to residence unless transitioning to another visa category."
          },
          {
            name: "Working Holiday Visa",
            slug: "working-holiday-visa-nz",
            content: "For young people (18-30 or 18-35 depending on country) from partner countries to work and travel. Duration: 12-23 months depending on nationality. Must not work for same employer more than 3-6 months. Popular pathway to gain NZ work experience before applying for AEWV or Skilled Migrant Category."
          }
        ]
      },
      {
        type: "Family & Partnership Visas",
        visas: [
          {
            name: "Partnership-based Residence Visa",
            slug: "partnership-residence-visa-nz",
            content: "For partners (married, civil union, or de facto) of NZ citizens or residents. Must prove genuine and stable relationship (12 months minimum for de facto). No language or income requirements. Initially temporary visa, can apply for residence after demonstrating ongoing relationship. Processing time: 12-24 months."
          },
          {
            name: "Parent Residence Visa",
            slug: "parent-residence-visa-nz",
            content: "Two categories: Parent Category (requires adult children in NZ meeting income threshold of NZ$106,080 annually) and Parent Retirement Category (requires NZ$1 million settlement funds and NZ$60,000 annual income). Limited annual numbers through Expression of Interest selection. Very long wait times currently suspended for most applications."
          }
        ]
      },
      {
        type: "Student & Graduate Visas",
        visas: [
          {
            name: "Student Visa",
            slug: "student-visa-nz",
            content: "For full-time study at approved New Zealand education providers. Can work part-time (20 hours/week) during study, full-time during scheduled holidays. Duration matches course length plus additional time for results. Can bring partner and dependent children (partner receives open work visa if studying at Level 7+ for 2+ years)."
          },
          {
            name: "Post-Study Work Visa",
            slug: "post-study-work-visa-nz",
            content: "For graduates of NZ qualifications. Duration depends on qualification level and location: Level 4-6 (1 year), Level 7 Bachelor/Graduate Diploma (2-3 years), Level 8+ (3 years). Additional year for qualifications completed outside Auckland. Open work rights. Pathway to Skilled Migrant Category or AEWV."
          }
        ]
      },
      {
        type: "Visitor Visas",
        visas: [
          {
            name: "Visitor Visa",
            slug: "visitor-visa-nz",
            content: "For tourism, visiting family/friends, or business activities up to 9 months. No work rights unless specific conditions met. Can study for up to 3 months. Visa Waiver agreements with 60+ countries allow visits without visa (including Australia, UK, USA, most EU countries). Electronic Travel Authority (NZeTA) required for visa waiver visitors and cruise ship passengers."
          }
        ]
      }
    ]
  },
  {
    country: "Europe (Schengen Zone)",
    visaTypes: [
      {
        type: "Work & Residence Visas",
        visas: [
          {
            name: "EU Blue Card",
            slug: "eu-blue-card",
            content: "Long-term residence permit for highly-qualified non-EU workers across EU Member States. Requires higher education qualification (3+ years or ISCED 2011 level 6+) or 5 years professional experience at comparable level, and employment contract minimum 12 months at 1-1.6x average gross salary in host country. Valid minimum 24 months or contract duration plus 3 months. After 12 months, can move to different EU country for highly-qualified work. Easier family reunification and faster path to EU long-term residence."
          },
          {
            name: "Germany Job Seeker Visa",
            slug: "germany-job-seeker-visa",
            content: "Allows entry to Germany to search for employment for 6 months. Requires recognized degree equivalent to German qualification or 5 years professional experience, and proof of financial means (€947/month - blocked account). No work permitted during job search (except trial work with potential employer ~10 hours/week). B2 German language recommended though not required. Must switch to work visa/EU Blue Card if job found. Processing: 6-12 weeks."
          },
          {
            name: "Germany Skilled Immigration Act Visa",
            slug: "germany-skilled-immigration-visa",
            content: "For qualified professionals with vocational training or academic degree. Requires recognized qualification, concrete job offer from German employer, and German language skills (B1 level for vocational, A1-B1 for academic depending on field). Salary must meet minimum threshold. Initial permission 4 years, can apply for settlement permit (permanent residence) after 4 years."
          },
          {
            name: "National Work Permits",
            slug: "national-work-permits-europe",
            content: "Each EU country has national work permit schemes with different requirements. Generally require job offer from employer in that country, proof of qualifications, and sometimes language proficiency. Duration and pathways to permanent residence vary by country. Popular destinations: Netherlands (highly skilled migrant), France (Talent Passport), Spain (work permit), Italy (subordinate work). Note: Liechtenstein imposes quotas on all EU nationals."
          }
        ]
      },
      {
        type: "Schengen Short-Stay Visas",
        visas: [
          {
            name: "Schengen Visa (Type C)",
            slug: "schengen-visa-short-stay",
            content: "Allows travel in 27 Schengen countries for up to 90 days within 180-day period. For tourism, business meetings, short training, or family visits. Single, double, or multiple-entry options. Does not permit work or long-term stay. Must apply at consulate of main destination country. Common requirements: valid passport, travel insurance (€30,000 minimum), proof of accommodation and financial means."
          },
          {
            name: "Airport Transit Visa (Type A)",
            slug: "airport-transit-visa",
            content: "Required for certain nationalities transiting through Schengen airport international zones without entering Schengen area. Allows passage through airport to non-Schengen destination. Requirements and fees vary by country. Not needed for nationals of most countries or if holding valid Schengen visa."
          }
        ]
      },
      {
        type: "Student & Training Visas",
        visas: [
          {
            name: "Long-Stay Student Visa (Type D)",
            slug: "student-visa-europe",
            content: "National visa for studies longer than 90 days at recognized education institutions. Requirements vary by country but generally include university admission letter, proof of funds, health insurance, and accommodation. Can work part-time (typically 10-20 hours/week). Can transition to job seeker visa or work permit after graduation in many countries (e.g., Germany 18-month job seeker visa, France temporary residence for job search)."
          }
        ]
      },
      {
        type: "Family & Special Categories",
        visas: [
          {
            name: "Family Reunification Visa",
            slug: "family-reunification-europe",
            content: "For family members of legal residents/EU Blue Card holders in EU countries. More favorable conditions for EU Blue Card holders (faster processing, simultaneous applications). Requirements: stable income, adequate accommodation, health insurance. Language requirements may apply. Processing time typically 3-6 months, faster for Blue Card families."
          },
          {
            name: "EU Long-Term Residence Permit",
            slug: "eu-long-term-residence",
            content: "After 5 years legal residence in EU country (can be cumulative for Blue Card holders across different countries). Provides rights almost equal to EU citizens: work, study, residency across EU. Requires stable income, accommodation, and health insurance. Can be withdrawn if holder leaves EU for 12+ consecutive months or 18+ months total."
          }
        ]
      }
    ]
  },
  {
    country: "Gulf Region",
    visaTypes: [
      {
        type: "UAE Work & Residence Visas",
        visas: [
          {
            name: "UAE Employment Visa",
            slug: "uae-employment-visa",
            content: "Standard work visa issued to foreign nationals with job offers from UAE employers. Employer must obtain work permit and labour card. Duration: 2-3 years renewable. Salary requirements vary by emirate and job type. Allows family sponsorship if salary meets minimum threshold (typically AED 4,000-10,000 depending on emirate). Processing: 2-4 weeks."
          },
          {
            name: "UAE Golden Visa (10-year)",
            slug: "uae-golden-visa",
            content: "Long-term residence visa (10 years) for investors, entrepreneurs, specialized talents, researchers, outstanding students, and professionals in key sectors. Categories: Real estate investors (AED 2 million), business investors (AED 10 million minimum), specialized talents (doctors, engineers, scientists, artists), outstanding students and graduates. Allows family sponsorship regardless of income. Valid work permit still required for employment since October 2024."
          },
          {
            name: "UAE Green Visa (5-year)",
            slug: "uae-green-visa",
            content: "Self-sponsored residence visa without need for employer/family sponsor. Categories: Skilled employees (meeting salary criteria), freelancers, investors (AED 100,000 minimum in property/business). Allows holder to sponsor parents and extended family. Provides 6 months grace period after cancellation. More flexibility than standard employment visa."
          },
          {
            name: "UAE Freelance Permit",
            slug: "uae-freelance-permit",
            content: "For self-employed professionals in various sectors. Can be obtained through free zones or mainland (various emirate-specific programs). Duration: 1-3 years. Allows multiple clients, no sponsor needed. Popular free zones: Dubai Creative City, Abu Dhabi SHAMS. Cost: AED 7,500-15,000 depending on free zone. Can sponsor family if income sufficient."
          }
        ]
      },
      {
        type: "Saudi Arabia Work & Residence",
        visas: [
          {
            name: "Saudi Employment Visa & Iqama",
            slug: "saudi-employment-visa-iqama",
            content: "Two-stage process: Entry visa followed by Iqama (residence permit). Employer sponsors worker through Saudi foreign ministry. Iqama duration: Typically 1-5 years renewable. New skill-based work permit system (2024-25): Five criteria - education, experience, professional skills, wage level, and age. Minimum age: 18-60 years. Nitaqat and Saudization compliance required for employers. Kafala system reforms allowing job changes without sponsor consent implemented in late 2025."
          },
          {
            name: "Saudi Premium Residency (Golden Visa)",
            slug: "saudi-premium-residency",
            content: "Long-term residence (1-5 years renewable) without Saudi sponsor. Four categories: Gifted (exceptional talent), Property Investment (minimum SAR 4 million real estate), Deposit (SAR 4 million bank deposit), Exceptional Competence (specialized professionals). Benefits: No sponsor needed, can own business, purchase property, sponsor family members, own housemaid visa. Costs: SAR 100,000 (permanent) or SAR 800,000 (one-year). 8,000+ permits issued in 2024, mostly Exceptional Competence category."
          },
          {
            name: "Saudi Temporary Work Visit Visa (TWVV)",
            slug: "saudi-temporary-work-visa",
            content: "Multiple-entry visa valid 1 year for short-term work assignments. Introduced 2021. Employers can buy quota and sponsor expats. Suitable for project-based work, consultants, or seasonal employment. No Iqama required. Worker can exit/re-enter multiple times. Duration per entry: up to 6 months. Faster processing than standard work visa."
          }
        ]
      },
      {
        type: "Qatar Work & Residence",
        visas: [
          {
            name: "Qatar Employment Visa & Work Permit",
            slug: "qatar-employment-visa",
            content: "Employer-sponsored work permit for foreign nationals. Two types: Temporary (1 year, short-term contracts) and Permanent (2 years, long-term employment). Employer obtains work permit approval from Ministry of Labour, then processes residence permit. Includes medical examination and Qatar ID (Resident Permit). Allows family sponsorship meeting minimum salary requirements. Processing: 3-5 weeks."
          },
          {
            name: "Qatar Mustaqel Visa (5-year)",
            slug: "qatar-mustaqel-visa",
            content: "Self-sponsored residence permit launched February 2024 for talented individuals and entrepreneurs. Processed by Jusour (government manpower company). Allows work without sponsor, business ownership, and family sponsorship. Eligibility: Specialized professionals meeting criteria for talent or entrepreneurship. Fee structure and exact requirements being finalized. Similar concept to UAE Golden Visa."
          },
          {
            name: "Qatar Golden Visa Program",
            slug: "qatar-golden-visa-residence",
            content: "Long-term residence through real estate investment or special contribution. Investor track requires minimum QAR 730,000 property investment. Grants 5-year renewable residence. Allows family sponsorship and business establishment. Can exit/re-enter without additional permits. Does not require local sponsor. Processing through Ministry of Interior."
          }
        ]
      },
      {
        type: "GCC General Categories",
        visas: [
          {
            name: "GCC Visit Visa",
            slug: "gcc-visit-visa",
            content: "For GCC residents to visit other Gulf countries. Typically 30-90 days. Requirements vary by country and visitor's GCC residence visa type. Some countries offer visa-on-arrival for certain GCC residents. Business visit visas available for commercial activities. Cannot convert to work visa without leaving and re-entering on employment visa."
          },
          {
            name: "Tourist Visa (Gulf Countries)",
            slug: "gulf-tourist-visa",
            content: "Short-term visas for tourism. UAE: 30/60/90-day tourist visas, visa-on-arrival for 50+ countries. Saudi: e-Visa or visa-on-arrival for 66 countries, valid 1 year multiple entry with 90-day maximum stay. Qatar: Visa-free for 95 countries (30-180 days depending on nationality) or visa-on-arrival. Bahrain, Kuwait, Oman: Similar visa-on-arrival schemes. Cannot work on tourist visa."
          }
        ]
      }
    ]
  }
];