import React from 'react';

import Footer from '../components/Footer/Footer';
import JobCard from '../components/JobCard/JobCard';

const SearchJobs = () => {
    const jobData = [
        {
            title : "Engineering Manager, Studio Engineering - Digital Content Production",
            location: "Los Angeles, California",
            division: "Core Engineering"
        },
        {
            title : "Coordinator, Production Strategy & Sourcing",
            location: "Los Angeles, California",
            division: "Production Management"
        },
        {
            title : "Senior Product Manager - Security Experience",
            location: "Los Gatos, California",
            division: "Security"
        },
        {
            title : "Senior Analytics Engineer - Payments & Partnerships",
            location: "Los Gatos, California",
            division: "Data Science and Engineering"
        },
        {
            title : "Manager, Transportation",
            location: "Los Angeles, California",
            division: "Facilities, Workplace Services and Real Estate"
        },
    ];

    return(
        <>
            <main>
                <JobCard dataJob={
                    jobData.map((data) =>
                        <div className="jobCard bg-white pl-5 pt-4 pb-4">
                            <a href="/"><h4>{data.title}</h4></a>
                            <ul className="d-flex">
                                <li className="mr-4 mt-1">
                                    <span>
                                        <svg><path fill="#696868" fill-rule="evenodd" d="M.314 7.58C.11 6.988 0 6.35 0 5.684 0 2.544 2.462 0 5.5 0S11 2.544 11 5.683c0 .665-.11 1.304-.314 1.898h.02l-.074.154c-.166.44-.383.856-.644 1.236-1.21 2.19-2.702 4.2-4.478 6.03-2.306-2.163-4.048-4.636-5.225-7.42h.03zm5.186.376c1.215 0 2.2-1.018 2.2-2.273 0-1.255-.985-2.273-2.2-2.273-1.215 0-2.2 1.018-2.2 2.273 0 1.255.985 2.273 2.2 2.273z"></path></svg>
                                        {data.location}
                                    </span>
                                </li>
                                <li className="mr-4 mt-1">
                                    <span>
                                        <svg style={{width: "1.13rem"}}><path fill="#696868" fill-rule="evenodd" d="M14.09 8.41c.073.206.11.425.11.646 0 1.074-.87 1.944-1.943 1.944H5.772c-.292 0-.58-.066-.843-.192-.906-.434-1.32-1.475-.994-2.4h-2.77c-.17 0-.336-.036-.49-.106-.584-.27-.84-.962-.57-1.547.594-1.293 1.606-1.94 3.033-1.94 1.14 0 2.017.413 2.632 1.237.875-.62 1.952-.928 3.23-.928 1.286 0 2.37.313 3.252.94.61-.833 1.487-1.25 2.632-1.25 1.424 0 2.438.645 3.043 1.932.072.156.11.325.11.496 0 .645-.52 1.167-1.166 1.167H14.09zM9.023 5.044c-1.39 0-2.517-1.13-2.517-2.522S7.633 0 9.023 0s2.517 1.13 2.517 2.523c0 1.393-1.127 2.522-2.517 2.522zm-5.87-.278c-.84 0-1.52-.69-1.52-1.542 0-.853.68-1.543 1.52-1.543s1.52.69 1.52 1.545c0 .852-.68 1.542-1.52 1.542zm11.746 0c-.84 0-1.52-.69-1.52-1.542 0-.853.68-1.543 1.52-1.543s1.52.69 1.52 1.545c0 .852-.68 1.542-1.52 1.542z"></path></svg>
                                        {data.division}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    )
                }/>
            </main>
            <Footer />
        </>
    );
}

export default SearchJobs;