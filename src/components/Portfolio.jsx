import { useState } from 'react';
import Project from 'src\components\Project.jsx';

function Portfolio() {
    const [projects] = useState([
        // Providing the name, description, and link for each project object

 <h1>Individually Created Projects</h1>
        
{
    Name: 'Password Generator'
    Description: 'Create a unique password with this web page.'
    Link: "https://benberkowitz85.github.io/PasswordGenerator/"
}

{
    Name: 'Timed Quiz'
    Description: 'A fun and simple Star Wars based quiz.'
    Link: "https://benberkowitz85.github.io/QuizProject/"
}

<h1>Group Projects</h1>
{
     Name: 'Flavorful Finds Recipe Finder',
     Description: 'Search for recipes by ingredient and save your favorites!',
     Link: "https://anewgard41.github.io/Flavor-Finds-Recipe-Finder/"
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
    )]
export default Portfolio;}
