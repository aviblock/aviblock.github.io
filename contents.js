var resume_text = "<strong>Education</strong><br/>"
        + "<ul><li><i>Tufts University (2019-2020)</i></li>"
		+"<ul><li>M.S.: Human-Robotic Interaction</li>"
		+"<li>Noteworthy Courses: Reinforcement Learning, Advanced Robotics, Assistive Algorithms, Probabilistic Robotics</li>"
		+"<li>GPA: 4.0</li></ul>"
	+"<li><i>Tufts University (2015-2019)</i></li>"
                + "<ul><li>Major(s): Computer Science, Cognitive and Brain Sciences</li>"
                + "<li>Academic Interests: Front-end programming, UX/UI design, Human-computer Interaction, AI, AI Ethics</li>"
                + "<li>Noteworthy Courses: Cognition of Society and Culture, Statistics for Behavioral Scientists, "
                + "Experimental Psychology, Introduction to Cognitive and Brain Sciences"
                + "<br/>Data Structures, Object Oriented Programming for GUIs, Machine Structure and Programming, "
                + "Web Programming, Algorithms</li>"
                + "<li>GPA: 3.69</li></ul>"
        + "<li><i> University of Otago, NZ (February – June 2018)</i></li>"
                + "<ul><li> Single semester study abroad program </li></ul>"
        + "<li><i>Concord Carlisle Regional High School (2011-2015)</i></li>"
        + "</ul></ul><br/><br/>"
        + "<strong>Experience</strong><br/>"
	+ "<ul><li><i>Professional</i></li>"
                + "<ul><li>Human-Robot Interaction - Motional (February 2022 - December 2022)"
                + "<br/>First ever full-time HRI-focused hire at top five autonomous vehicle company"
                + "<br/>Led multiple research projects analyzing effective methods for autonomous vehicles to effectively interact with external road users (i.e., pedestrians, cyclists, human drivers)"
		+ "<li>Staff Research Programmer - Boston Fusion Corp. (November 2020 - Present)"
		+ "<br/>Implemented a number of complex ML algorithms for research into advanced realtime decision making and sensor processing, using PyTorch and Deep RL frameworks</li>"
        	+ "<li>Customer Service Representative - Tufts Technology Services (September 2016 - Present)</li>"
		+ "<li>Caller – Tufts Telefund (November 2015 – May 2016)</li>"
	        + "<li>Brand Strategist - Harvard Launch Lab Startup App \"GetMii\" (April - May 2016)</li></ul></ul>"
	+ "<ul><li><i>Academic Research</i></li>"
                + "<ul><li>Human Robotic Interaction Lab - Dr. Matthias Scheutz, Tufts University <br/> (May - August 2019)</li>"
		+ "<li>Human Robotic Interaction Lab - Dr. Matthias Scheutz, Tufts University <br/> (May - August 2017)</li>"
		+ "<li>CARES Robotics in Healthcare Lab - Dr. Elizabeth Broadbent, University of Auckland (June - August 2018)</li>"
                + "<li>Synesthesia Lab - Dr. Ariel Goldberg, Tufts University (June – August 2015)</li>"
                + "<li>Spatial Cognition Lab – Dr. Holly Taylor, Tufts University <br/>(September 2016 – May 2017)</li>"
                + "<li>Drug Efficacy Lab at School of Pharmacology - Fudan University (Agusut 2014)</li>"
                + "<li>Boston University CityLab Biotechnology Summer Course (June 2013)</li></ul>"
	 + "<br/><li><i>Leadership</i></li>"
                + "<ul><li>Tufts Wilderness Orientation Leader (August 2017, August 2018)</li>"
		+ "<li> Music Director at WMFO, Tufts' Freeform Radio Station (January – December 2017) </li>"
                + "<li>Tufts ExCollege Explorations and Perspectives Teacher (August – December 2017)</li></ul>"
        + "</ul><br/><br/>"
        + "<strong>Achievements</strong><br/>"
        + "<ul><li><i> Magna Cum Laude Honors - Tufts University (2015-2019)</i></li>"
	+ "<li><i> Petra 2020 Full Length Paper:</i> Emotion Expression in a Socially Assistive Robot for Persons with Parkinson's Disease</li>"
	+ "<li><i> HRI 2019 Late Breaking Report:</i> Teaching Social Robotics to Motivate Women into Engineering and Robotics Careers</li>"
	+ "<li><i>Dean’s List – Tufts University (Fall 2015 - Spring 2019)</i></li>"
        + "<li><i>Participated in Tufts Undergraduate Research and Scholarship Symposium 2017</i></li>"
        + "<li><i>National Honor Society</i</li>"
        + "</ul></ul><br/><br/>"
        + "</i><strong>Skills</strong><br/>"
        + "<ul><li><i>Basic C/C++, Java, JavaScript, HTML, CSS, Python, Android, LaTex, R, D3</i></li>"
	+ "<li><i>RL Algorithms, SciKit, Weka, OpenCV, Raspberry Pi, MatLab, Choregraphe</i></li>"
        + "<li><i>Microsoft Office Suite, Adobe Photoshop, SPSS</i></li>"
        + "<li><i>Collaboration and Team Leadership</i></li></ul><br/><br/><br/> ";
var about = "<br/><br/><br/><strong>Hey!</strong><br/><br/>"
        + "My name is Avram Block, but I usually go by Avi. My pronouns are He/Him/His. I graduated from Tufts University in 2020 with a MSc degree in Human-Robot Interaction. I also received my undergraduate BSc degree from Tufts University with a double major in Cognitive and Brain Sciences and Computer Science. Academically, my interests lie at the intersection of these two fields. I wish to develop products which expand the possibilities of humans existing in close proximity or even in harmony with different kinds of intelligent agents. Whether this is through effective UX design, software development, or experimental psychology style research, I am eager to explore any avenue towards building my skills and achieving this goal.<br/><br/>"
        + "Outside of my academic interests, I also have a number of personal hobbies which motivate me and keep me learning and growing creatively. I recently have begun to explore the potential of programming microcontrollers such as Raspberry Pi and have begun some personal projects in this vein as well. In my free time, I ski, play bass guitar, and enjoy drawing and embroidery. I also love to read!"
        + "<br/><br/><br/>I'm currently reading: <br/><br/><a href=\"https://www.goodreads.com/en/book/show/247000\" target=\"_blank\" rel=\"noopener noreferrer\"> The Mezzanine </a> by Nicholson Baker";
var contact = "<font size=\"+2\"> <br/><br/><br/><a href=\"mailto:aviblock@msn.com\">Email: aviblock@msn.com</a><br/>"
        + "<br/><br/><a href=\"https://www.linkedin.com/in/avram-block/\" target=\"_blank\" rel=\"noopener noreferrer\">LinkedIn</a><br/>"
        + "<br/><br/>Phone (US): +1 978-505-2641<br/></font>";
var projects = {}
projects["academic"] = "Naturalistic Robotic Emotion Expression and Transition: <br/><br/>"
+ "For this project, completed at the Tufts HRI Lab, I developed a system for facilitating smooth transitions between emotional expressions and natural expressive decay over time in a Nao robot. "
+ "I accomplished this by modelling the robot's emotional state as a mass at the end of a spring, upon which an external force was applied via emotional human speech. The physical model introduced smooth transitions between speech input states, and the restorative force of the spring caused a decay towards neutrality in the absence of such input. <br/><br/>"
+ "<br/> This project was published as a <a href=\"https://dl.acm.org/doi/10.1145/3389189.3389190\" target=\"_blank\" rel=\"noopener noreferrer\">full-length paper</a> for the (virtual) Petra 2020 Conference!<br/><br/>"
+ "___________________________________________"
+ "<br/><br/>Tree-climbing Robot: <br/><br/>"
+ "For this project, the final assignment of Tufts Mechanican Engineering course Advanced Robotics, teams of three were tasked with designing and producing (from scratch) a robot able to support its own weight as it climbed vertically up a manmade tree. "
+ "My team accomplished this by designing pieces in SolidWorks for laser-cutting and 3D printing. We then controlled the motors in the gripping actuators with a Raspberry Pi, using grip distance data from ultrasonic sensors onboard the robot. "
+ "An additional aspect of the assignment included labelling and adapting to the various materials surrounding the tree at different points along its trunk. To accomplish this, we installed a camera on the Pi which used an OpenCV SVM model to classify input into 5 material types. "
+ "As lead programmer on the team, I was responsible for implementing all of these algorithms in Python in such a way so as to be robust to sensor noise, motor imprecision, and mechanical failure.<br/><br/>"
+ "___________________________________________"
+ "<br/><br/>BS Card Playing Agent: <br/><br/>"
+ "For this project, the final assignment of Tufts Computer Science course Probabilistic Robotics, myself and a team of two other programmers produced a text-based RL agent capable of playing the card game BS. "
+ "In this game, players race to get rid of all of their cards by placing them face down and claiming that they are of the appropriate numerical value. However, players are encouraged to lie in order to place more cards when possible, and their opponents are encouraged to accuse them of lying in order to slow their progress. "
+ "Thus, we implemented an agent in Python using a Monte-Carlo Tree Search algorithm which allowed it to both decide when to lie and decide when to accuse its opponents (human or bot) of having lied.<br/><br/>"
+ "In the end, we were able to produce a successful, non-deterministic agent which could compete in this game at the human level.<br/><br/>"
+ "___________________________________________"
+ "<br/><br/>Human-in-the-loop RL Agent Encouragement: <br/><br/>"
+ "For this project, my group designed and implemented an augmented reinforcement learning process for intelligent agents. Using an agent designed to learn the Mountain Car Problem, we incorporated real-time human aid into the learning process. "
+ "We did this by analyzing the valence of human audio input in real-time while the agent learned. The agent then incorporated the results of this audio analysis as a positive or negative update to its goal-achievement progress metric.<br/><br/>"
+ "___________________________________________"
+ "<br/><br/>Pervasive Computing Workout App: <br/><br/>"
+ "For this project, I built a rudimentary workout app in Android. The app includes a trained k-Nearest Neighbors model for classifying physical activity based on accelerometer and gyroscope data. "
+ "When in use, the app supplies a workout to perform for a given duration, and the time remaining before moving to the next activity only decreases when the app detects that the user is in fact performing the instructed activity.<br/><br/>"
+ "___________________________________________"
+ "<br/><br/> High School STEM Engagement Info Sessions: <br/><br/>"
+ "During my time working for the CARES Robotics Laboratory at University of Auckland, my team and I designed and delivered an hour-long informational session on the emerging field of social robotics at high schools around Auckland. "
+ "The goal of these sessions was specifically to introduce high school girls with interests in STEM to the concept of social robotics as an alternative to the traditionally male-dominated and male-marketed mechanical robotics field.<br/><br/>"
+ "This project was presented as a <a href=\"https://dl.acm.org/doi/10.5555/3378680.3378766\" target=\"_blank\" rel=\"noopener noreferrer\">late-breaking report</a> at the 2019 HRI Conference in Daegu, South Korea! <br/><br/>"
+ "___________________________________________"
+ "<br/><br/>Human-Robotic Touch Study: <br/><br/>"
+ "While working in the Tufts University Human-Robotic Interaction Lab, I helped to design and prepare a study on the human response to robotic touch. "
+ "Specifically, the study aimed to assess whether a brief pat on the back from a robot to a human influences the human participant's estimation of the robot's 'mood'.<br/><br/> "
+ "<br/><br/><br/>  ";
projects["professional"] = "Autonomous Vehicle Design Factors for Communicating Pedestrian Awareness: <br/><br/>"
+ "While at Motional, I led a virtual reality study assessing successful design factors for allowing an AV to provide pedestrians at crosswalks with a sense of comfort and safety in the absence of social interaction with a human driver. "
+ "The results of this study suggest that the ability for a pedestrian to specifically identify themselves in HMI display on the vehicle's exterior. <br/><br/>"
+ "<br/> This project was published as a <a href=\"https://dl.acm.org/doi/10.1145/3568294.3580107\" target=\"_blank\" rel=\"noopener noreferrer\">late-breaking report</a> at the HRI 2023 Conference!<br/><br/>"
+ "___________________________________________"
+ "<br/><br/>First Responder Assistance During Inspection of an Autonomous Vehicle: <br/><br/>"
+ "While at Motional, I supported a project in which we interviewed first responders from across the country about their potential concerns and information needs when inspecting a damaged or degreed AV which has pulled over. "
+ "Upon learning these needs, we conducted follow-up interviews to provide preliminary findings on effective ways of satisfying these needs. "
+ "The results of this project suggest that first responders have concerns regarding whether an autonomous vehicle is capable of spontaneously self-driving away in the middle of an inspection. "
+ "In the follow-up interviews, we established that this concern is best assuaged by providing explicit, textual signage aimed towards the first responder's direction of approach. <br/><br/>"
+ "<br/> This project was published as a <a href=\"https://dl.acm.org/doi/10.1145/3568294.3580114\" target=\"_blank\" rel=\"noopener noreferrer\">late-breaking report</a> at the HRI 2023 Conference!<br/><br/>"
+ "___________________________________________"
+ "<br/><br/>Dense Pedestrian Crowd Navigation for Autonomous Vehicles: <br/><br/>"
+ "While at Motional, I conducted preliminary research on the optimal motion dynamics for an AV to employ in order to safely, effectively create a gap in a dense pedestrian crowd. "
+ "I assessed this problem by running simulations in ROS which made use of the social force model of pedestrian behavior. "
+ "The results of this project suggest that an optimal approach speed exists which compels pedestrians to move out of the vehicle's way without jeopardizing their safety. <br/><br/>"
+ "___________________________________________"
+ "<br/><br/>Improving Situational Awareness for Remote Vehicle Assistance: <br/><br/>"
+ "While at Motional, I conducted quantitative research on effective user experience design for the terminals used for employes to remotely assist an autonomous vehicle in scenarios which it is unable to navigate on its own. "
+ "This project involved gaining expertise in the field of situational awareness, as well as human-machine teaming and trust in HCI systems. "
+ "In order to improve these aspects of the UX, I designed and carried out multiple experiments to provide data-driven recommendations for interface improvements in support of these goals. <br/><br/>";

projects["personal"] = "<br/><br/>.WavBar 1.0: Tactile-based Speaker Controller: <br/><br/>"
+ "This was a personal project in which I created a prototype version of a speaker controller which does not have any digital interface, and is controlled through quick movements of the device along any flat surface. "
+ "The program is housed on a Raspberry Pi with a 9-DOF IMU, which detects the lateral and rotational acceleration of the device. This data is then categorized into gestures, which were processed as commands to an open-source wrapper of the Sonos and Spotify APIs. "
+ "In this first iteration, a swift slide to the right or left translates to a skip/previous track action, sliding up and down translates to pause/resume, and rotating the device to the right or left translates to volume change."
+ "This project represents my first exploration into the rich world of embedded and ubiquitous computing, which I hope will only continue to expand in coming years, as innocuous devices throughout our environments continue to be imbued with smart, digital capabilities.<br/><br/>"
+ "___________________________________________"
+ "<br/><br/>.WavBar 2.0: Touchless-based Speaker Controller: <br/><br/>"
+ "For v2 of this personal project, I created a version of the controller which is both screenless and touchless. "
+ "This program is also housed on a Raspberry Pi, and two ultrasonic sensors, which detect the presence and height of the user's hand. "
+ "In this second iteration, a wave of the hand to the right or left translates to skip/previous track, a hovering hand over either sensor translates to pause/resume, and raisng or lowering a hand over either sensor translates to volume change. <br/><br/>"
+ "___________________________________________"
+ "<br/><br/>.WavBar 3.0: Vision-based Speaker Controller: <br/><br/>"
+ "For v3 of this project, I created a version of the controller which is screenless and touchless, and uses computer vision to analyze hand gestures. "
+ "This program is also housed on a Raspberry Pi, with a 12MP camera, which detects the presence and pose of the user's hand. Landmarks on the hand are determined using the MediaPipe library, and their 3D coordinates are classified jointly using a support vector machine. "
+ "In this third iteration, pointing to the left or right translates to skip/previous track, an open palm translates to pause/resume, and pointing up or down translates to incremental volume change. "
+ "With computational efficiency and camera quality improvements, my goal with this iteration is to create a truly ambient interface, in which the device is able to monitor a room, and detect the appropriate gestures without ever requiring direct interaction with the device. The goal is for the end user to feel as though they are controlling the music playback directly, unmediated by any technological middlemen.<br/><br/><br/><br/><br/><br/>";
let contents = {};
contents["resume"] = resume_text;
contents["aboutme"] = about;
contents["contact"] = contact;
contents["projects"] = projects;


export default contents;