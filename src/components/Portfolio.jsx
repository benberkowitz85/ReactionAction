import { useState } from 'react';
import Project from './Project.jsx';

function Portfolio() {
    const [projects] = useState([
        // Providing the name, description, and link for each project object

        {
            name: 'Flavorful Finds Recipe Finder',
            description: 'Search for recipes by ingredient and save your favorites!',
            link: "https://anewgard41.github.io/Flavor-Finds-Recipe-Finder/"
        },


    Return (
        <section className='p-4 my-8'>
            <h1 className='font-bold mb-4'>Portfolio</h1>
            {/* using columns for responsiveness on this page */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* mapping each project */}
                {projects.map((project, i) => (
                    <Project project={project} key={'project' + i} />
                ))}
            </div>
        </section>
    );
}


export default Portfolio;