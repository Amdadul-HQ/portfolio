import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabsPage = () => {
  return (
    <div className="w-fit text-white mt-5 font-normal lg:font-medium text-sm lg:text-xl">
      <Tabs>
        <TabList className='flex'>
          <Tab>Project Experience</Tab>
          <Tab>Personal Info</Tab>
          <Tab>Education And Certification</Tab>
        </TabList>

        <TabPanel>
          <h1 className="text-xl mt-4 text-purple-400 font-medium">
            More than 15+ projects experience.
          </h1>
          <ul className="text-sm list-disc font-light mt-4 space-y-2 ml-5">
            <li>Experience in building full-stack projects for the assignment purpose where scored full marks.</li>
            <li>In my projects I experimented with express.js, mongodb, mongoose, react.js, bootstrap, next.js , stripe, tailwind css, metarial ui, firebase and some popular npm packages json web token, bcrypt, validator etc.</li>
            <li>Provided services related to web design to some of my friends.</li>
          </ul>
        </TabPanel>
        <TabPanel>
          <div className="text-base mt-4 space-y-2">
          <p>Name : AMDADUL HAQUE BHUIYAN</p>
          <p>Age : 22</p>
          <p>Phone Number : +880 1756-171239</p>
          <p>Langue :  Native-Bangle | Fluent-English | Fluent-Hindi</p>
          <p>Address : Feni, Bangladesh</p>
          <p>Nationality : Bangladesh</p>
          <p>Email : rimonamdadul301@gmail.com</p>
          </div>
        </TabPanel>
        <TabPanel>
          <h1 className="text-xl text-purple-400 font-medium">Education</h1>
          <p>Feni Polytechnic Institute</p>
          <p>Diploma In Electrical Engineering</p>
          <p>Session : 2019-2020</p>
          <h1 className="text-xl mt-4 text-purple-400 font-medium">Courses</h1>
          <p>Programming Hero</p>
          <p>Complete Web Development Course</p>
          <p>Dec 2023 - June 2024</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsPage;
