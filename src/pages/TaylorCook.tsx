
const TaylorCook = () => {
  return (
    <div className="p-20">
        {/* Top */}
      <div className="space-y-4 pb-8 border-b-2 ">
        <h1 className="text-6xl font-medium tracking-widest">Taylor <br />Cook</h1>
        <p className="text-black/50 font-medium">Programmer</p>
      </div>
      <div className="  pr-4 grid grid-cols-5 items-start justify-center ">
        {/* left */}
        <div className="border-r-2 col-span-2 space-y-10">
          {/* Details */}
          <div className="space-y-5 pt-10">
            {/* Address */}
              <h3 className="text-3xl tracking-wider uppercase">Details</h3>
            <div className="">
                <h3 className="font-semibold">Address</h3>
              <p className="text-black/60 font-medium">UniteStates</p>
            </div>
            {/* Phone */}
            <div className="">
              <h3 className="font-semibold">Phone</h3>
              <p className="text-black/60">+0123456</p>
            </div>
            {/* Email */}
            <div className="">
              <h3 className="font-semibold">Email</h3>
              <p className="text-black/60">taylorcook@gmail.com</p>
            </div>
            {/* Nationality */}
            <div className="">
              <h3 className="font-semibold">Nationality</h3>
              <p className="text-black/60">American</p>
            </div>
          </div>
          {/* Skills */}
          <div className="">
            <h2 className="text-3xl uppercase">Skills</h2>
            <div className="">
                <h3 className="font-semibold">Performance Optimization</h3>
            </div>
            <div className="">
                <h3 className="font-semibold">Troubleshooting and solutions Deployment</h3>
            </div>
            <div className="">
                <h3 className="font-semibold">Analytical Thinking Skills</h3>
            </div>
            <div className="">
                <h3 className="font-semibold">Software Design and Development</h3>
            </div>
            <div className="">
                <h3 className="font-semibold">Coding and Scripting</h3>
            </div>
          </div>
          {/* Language */}
          <div className="">
            <h2 className="text-3xl uppercase">Languages</h2>
            <div className="">
                <h3 className="">English</h3>
            </div>
            <div className="">
                <h3>French</h3>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="col-span-3">
            {/* Profile */}
        <div className="">
            <h2>Profile</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In harum sunt ipsum perferendis perspiciatis, doloribus, tenetur autem iure nostrum animi ipsam labore accusamus deleniti eum et, id nulla nobis minima. Suscipit debitis molestiae distinctio itaque earum, quaerat perspiciatis est, aspernatur accusamus totam ad magnam? Maiores soluta illo magnam iste sed consequuntur veritatis, aspernatur quo beatae at neque facilis placeat! Velit distinctio facilis placeat minus cumque ducimus quidem sequi quae eum doloremque, aperiam, nemo voluptas. Atque voluptas consequatur maxime, at necessitatibus laboriosam libero inventore! Quibusdam omnis in fuga sed repellat quidem, ipsum distinctio natus, unde nemo similique corporis voluptatum perferendis. Eos.</p>
        </div>

        {/* Employment History  */}
        <div className="">

            <h2>Employment History</h2>
                {/* Section */}
            <div className="">
            <div className="">
            <div className="">
            <h3>Programmer,Johannes Initiative</h3>
            <p>Dec 2015 - Present</p>
            </div>
            <p>Paulo Alto</p>
            </div>
            {/* Work Details */}
            <div className="">
                <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor autem amet dolores cumque sed! Quos laborum blanditiis facilis debitis. Porro!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor autem amet dolores cumque sed! Quos laborum blanditiis facilis debitis. Porro!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor autem amet dolores cumque sed! Quos laborum blanditiis facilis debitis. Porro!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor autem amet dolores cumque sed! Quos laborum blanditiis facilis debitis. Porro!</li>
                </ul>
            </div>

            </div>
            {/* Section 2 */}
            <div className="">
            <div className="">
            <div className="">
            <h3>Programmer,Johannes Initiative</h3>
            <p>Dec 2015 - Present</p>
            </div>
            <p>Paulo Alto</p>
            </div>
            {/* Work Details */}
            <div className="">
                <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor autem amet dolores cumque sed! Quos laborum blanditiis facilis debitis. Porro!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor autem amet dolores cumque sed! Quos laborum blanditiis facilis debitis. Porro!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor autem amet dolores cumque sed! Quos laborum blanditiis facilis debitis. Porro!</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor autem amet dolores cumque sed! Quos laborum blanditiis facilis debitis. Porro!</li>
                </ul>
            </div>

            </div>
        </div>

{/* Education */}
        <div className="">
            <div className="">
        <h3>Master of Computer Science,Boston College</h3>
        <p>Boston</p>
            </div>
            <p>Aug 2001- Jun 2004</p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default TaylorCook;
