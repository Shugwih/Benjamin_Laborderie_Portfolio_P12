import { useState, useEffect } from 'react';
import Section from '../../Components/Section';
import Data from '../../Data/owner_data.json';
import sectionData from '../../Data/section_data.json';
import styles from './Home.module.scss';
import Button from '../../Components/button/';
import Bar from '../../Components/Bar/';

function Home() {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        const personalInfoSection = {
            id: 'hero',
            title: (
                <>
                    {Data.lastName} <br /> {Data.firstName}
                </>
            ),
            content: (
                <div>
                    <p className={styles.intro}>DÉVELOPPEUR WEB</p>
                    <p className={styles.intro}>De la conception responsive initiale à l&apos;optimisation et au référencement de votre site.</p>
                </div>
            )
        };

        const dataMapping = {
            skills: Data.skills
        };

        const updatedSections = sectionData.map(section => {
            let sectionContent = (
                <div className='center'>
                    <p>{section.content}</p>
                    {section.id === 'contact' && (
                        <Button to={`mailto:${Data.emailAddress}`} className={styles.contactButton}>CONTACTEZ-MOI</Button>
                    )}
                </div>
            );

            if (dataMapping[section.id]) {
                sectionContent = (
                    <div>
                        <p>{section.content}</p>
                        <Bar data={dataMapping[section.id]} />
                    </div>
                );
            }

            return {
                ...section,
                content: sectionContent,
                formFields: section.formFields || [],
                data: section.data || []
            };
        });

        setSections([personalInfoSection, ...updatedSections]);
    }, []);

    const blackBackgroundSections = ['presentation', 'skills', 'contact'];

    return (
        <main>
            {sections.map((section, index) => (
                <Section
                    key={index}
                    id={section.id}
                    title={section.title}
                    content={section.content}
                    galleryItems={section.galleryItems || []}
                    withLinks={section.withLinks}
                    className={blackBackgroundSections.includes(section.id) ? 'blackBackground' : ''}
                    data={section.data || []}
                    formFields={section.formFields || []}
                />
            ))}
        </main>
    );
}

export default Home;
