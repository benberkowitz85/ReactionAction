import profilePic from "public\x0291246777_10160306275047342_1044029494535076259_n.jpg";

function About() {
  return (
    <div>
      <h1 className="mx-4 mt-2">About Me</h1>
      {/* styling for About Me section- using flex wrap on mobile devices so picture and text sections stack. Desktop screens will see my picture and text side by side. */}
      <div className="flex flex-wrap lg:flex-nowrap p-3">
      <img src={profilePic} alt="Anders Newgard" className="w-1/2 lg:w-1/5 rounded-lg shadow-lg m-4" />
        <div className="m-3 text-xl font-medium leading-loose p-1">
          <p><strong>Hello there!</strong> I am Ben Berkowitz, I am a student at the UNC Coding Bootcamp, hoping to graduate in Feburary 2024.</p>
      </div>
    </div>
    </div>
  );
}

export default About;