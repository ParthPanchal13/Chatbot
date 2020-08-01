-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 31, 2020 at 08:46 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bot`
--

-- --------------------------------------------------------

--
-- Table structure for table `bitrix`
--

CREATE TABLE `bitrix` (
  `id` int(100) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bitrix`
--

INSERT INTO `bitrix` (`id`, `question`, `answer`) VALUES
(1, 'Is it ok to clock-out before an hour is completed if the tasks are completed? Do we need to clock-in and compulsorily complete 7 hours a week even if the tasks are completed? ', 'If the tasks are completed, there is no need to clock-in and clock-out unnecessarily for hours. However, you should keep a track of all the updates of the internship being posted on the groups.'),
(2, 'What do we do in the work report? ', 'As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on \"send to supervisor\".'),
(3, 'I m not able to access my Bitrix24 account? ', 'Go to https://cloudcounselage24.bitrix24.com/ On the Login page, In the, ‘Enter the phone number or email’, type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’. In case the problem persists, please write a mail to hrsupport@cloudcounselage.in'),
(4, 'How can we check our weekly hours? ', 'In the menu select \'time and reports\' ->worktime and then you could see your worktime or click on this link once you’re logged in to Bitrix24; https://cloudcounselage24.bitrix24.com/timeman/timeman.php'),
(5, 'By when will we receive access to Bitrix24?', 'If you have submitted the ‘New Joinee Form’ after the 1st of March, please wait till the 31st of March to receive your access.'),
(6, 'I am trying to complete social media tasks. I completed that day and clicked finish but it didn\'t show finished in the task menu. What should I do? ', 'Our team will verify and then only your task shall be accepted as completed. Please wait till the verification\'s complete.'),
(7, 'My Efficiency is 0% what should I do? ', 'Ensure that you have clicked ‘Start’ when you resume a task, the ‘Finish’ button gets active only after the task is started. Once you complete the task you can then click on ‘Finish’ and then the efficiency is updated in the system. However, please raise this issue with the Cloud Counselage HR, as they will look at it on a case to case basis.'),
(8, 'Is it necessary to clock-in if I am done with my tasks? ', 'Yes, it is mandatory to do, we are trying to include some more tasks due to the current scenarios, but adherence to clock-in/ clock-out policy is utterly important.'),
(9, 'I forgot to clock in for a few days, will this affect my internship?', 'This could have an adverse effect on your internship, please contact Cloud Counsealge HR and provide a genuine reason to miss clock in/ clock out. Also, please start performing your clock in/ clock out now.'),
(10, 'I have not got the acknowledgment from you regarding the weekly report ?', 'Once you submit your weekly report, your supervisor and the HR team shall take the cognizance. They would reach out to you in case of discrepancies, so you need not worry about the confirmation'),
(11, 'In my work time I can see one exclamation mark?/ What does the remaining time mean? ', 'It is showing the remaining time because it\'s configured for 8 working hours per day. Our interns need to only make sure that they are online for 1 hour per day or 7 hours a week.');

-- --------------------------------------------------------

--
-- Table structure for table `general`
--

CREATE TABLE `general` (
  `id` int(100) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `general`
--

INSERT INTO `general` (`id`, `question`, `answer`) VALUES
(1, 'Unable to access the quiz', 'Please retry after some time in an incognito window'),
(2, 'Which Browser I should use', 'Google Chrome is recommended.'),
(3, 'The web pages on mobile are not showing properly', 'They are purposefully only configured for Desktops/ Laptops. In an emergency, you can use the \"show as desktop\" mode of your browser.'),
(4, 'One of my friends had applied for the IP but she didn\'t receive any further updates', 'Please ask them to send a mail to hrsupport@cloudcounselage.in and wait till 30th April 2020 for a reply.'),
(5, 'I have opted for a blockchain internship, can I also learn about AI and do an internship in both', ') You can learn both the technologies using Learning Path 2 (LP2) which will begin after the 2nd week of March, but your internship will only be continuing with the one you are selected for.'),
(6, 'Will you provide mentorship or doubt clearing sessions in this internship', 'As this is an internship you’re expected to do self-learning, mentorship is not part of an internship. However, we have created forums to resolve your doubts in the form of workgroups. As an intern ensure that you are part of relevant workgroups, i.e. ‘202003 - IP’ and your resp. Technology workgroup. In case, you are not a part of these workgroups, please reach out to ‘Cloud Counselage HR’ on Bitrix24 Chat.'),
(7, 'What to do when our university exams start', 'We have provided our interns with preparatory leave from the exam season, nevertheless, you are free to work on your LP3 assignment, but we suggest to concentrate on your exams first.'),
(8, 'Is it okay to mention this internship as ongoing for college records', 'Yes, we\'ll provide every intern a joining letter as soon as all interns are inducted.'),
(9, 'Can we do another internship with IP', 'Yes, you can do another internship outside of Cloud Counselage but please ensure to provide 1 hour a day or 7 hours a week for IP'),
(10, 'I have not been added to the technology I preferred to work on', 'We do understand that you might be interested in other technologies and are eager to learn more, but we have prescribed the technologies based on your first inputs and cannot change your base technology. Nevertheless, you do have the opportunity to go through the training of all the technologies.'),
(11, 'What are the company policies for IP interns', 'The company policies will be published on www.cloudcounselage.co.in/ippolicies');

-- --------------------------------------------------------

--
-- Table structure for table `live`
--

CREATE TABLE `live` (
  `id` int(100) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `live`
--

INSERT INTO `live` (`id`, `question`, `answer`) VALUES
(1, 'What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects?', 'Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage. The actual problem statements will only be given when the LP3/ Live Project phase is in progress to keep the interns focused on LP1/ LP2.'),
(2, 'Live Project/ LP3 has to be submitted individually or it will be a group project? ', 'All the LP3/ Live Projects are on an individual scale.'),
(3, 'Problem statements of the Live Project will be chosen by the intern or will be provided by Cloud Counselage?', 'Live Projects will be provided by Cloud Counselage as these are the ongoing projects of Cloud Counselage and your opportunity to create an impact in the organisation.'),
(4, 'Will Live Projects have only one technology or a mixture of technologies?', 'Live Projects will have only your part of technology even if there are multiple technologies that are a part of the project, you will be working only on the part that covers your technology.'),
(5, 'Live project\'s use case will be provided or can we have our own use case? ', 'Live project\'s use case will strictly be provided by Cloud Counselage and you cannot choose your own use case.'),
(6, 'I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this? ', 'As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)');

-- --------------------------------------------------------

--
-- Table structure for table `lp1`
--

CREATE TABLE `lp1` (
  `id` int(100) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lp1`
--

INSERT INTO `lp1` (`id`, `question`, `answer`) VALUES
(1, 'Not able to access the LP1 page with my token', 'Please watch the videos shared with the invite and you should not face any problems in accessing the training. Please follow the protocol shown in the videos.'),
(2, 'Login issues with training for every module of LP1/ LP2, do we have to register again for access to the content', 'Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you\'ll have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode.'),
(3, 'I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do', 'For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode.'),
(4, 'I did follow the instructions given in the video, but still, I\'m not able to log in for the LP1 task ', 'Ensure you\'re using the right token'),
(5, 'I tried it 3-4 times and have to enter token each time I visit it.', 'We understand that it sometimes becomes tedious to access the training and we highly appreciate your support in making the training possible. We only do this for security reasons and we\'re trying to find a way to minimise the token use. For now, please note that in LP1 there are 3 types tokens: 1. One for each technology, you\'re a part of. 2. The lp1 home page. 3. The 6 tokens (one for each step)');

-- --------------------------------------------------------

--
-- Table structure for table `lp2`
--

CREATE TABLE `lp2` (
  `id` int(100) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lp2`
--

INSERT INTO `lp2` (`id`, `question`, `answer`) VALUES
(1, 'What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level', 'The main focus of LP2 is to provide you with a basic foundation of the technology you\'re interested in. The training is also handpicked in such a way that they enable you to work on LP3 assignments which interim gives you the beginning to start your study for the selected technology and in no terms is the only/ final training you should look into. Please keep learning after your LP2 is complete, that is the only way to grow in your technology of choice.'),
(2, 'Why only this training for LP2', 'They are our training partners and we have handpicked this training to cover a certain topic for you. These training cover from the very basic to intermediate level and is the perfect medium for you to have a starting point'),
(3, 'Can I do certification for the training provided in LP2', 'Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the advantage of the corporate benefits at \'no profit no loss\' basis for Cloud Counselage, that we receive from the partnership. Being our interns, you can get huge discounts on the certifications you choose to enrol for through Cloud Counselage and Edureka. In case you want to know more about the discounts offered, please reach out to ‘Cloud Counselage HR’ or write to hrsupport@cloudcounselage.in.'),
(4, 'The videos of LP2 are taking too much time to load', 'We have uploaded the videos of the highest quality and best resolution which has resulted in some videos being over 1 GB as they are of hours in duration. To experience these high definition videos we request you to wait at least 5 minutes or more; depending on your computer\'s RAM and internet connection.');

-- --------------------------------------------------------

--
-- Table structure for table `lp3`
--

CREATE TABLE `lp3` (
  `id` int(100) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lp3`
--

INSERT INTO `lp3` (`id`, `question`, `answer`) VALUES
(1, 'What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level?', 'LP3 will be assignment based and its execution and content vary from technology to technology. This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers.'),
(2, 'What to do after LP3?', 'You\'ll be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June.'),
(3, 'Live Project/ LP3 has to be submitted individually or it will be a group project? ', 'All the LP3/ Live Projects are on an individual scale.'),
(4, 'Where do we push the code in LP3?', 'Please push you to code in a public repo of your GitHub account if required by your LP3 assignment.'),
(5, 'I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?', 'As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)'),
(6, 'I have a query with respect to LP3, what should I do and whom should I ask?', 'As mentioned in the \'202003-IP\' workgroup, please ask all queries related to LP3 in your technology workgroup only and tag Jayanth G S in your message.'),
(7, 'Will these training be enough for us to complete the LP3 ', 'The set of training is not exhaustive and you are required to keep learning about the technology on your own to excel in your Live Project.'),
(8, 'For some reason, I\'m unable to download my LP3 assignment problem statement document shared on LP3 page, is there any other way I can get it? ', 'Since some of you are not able to download, please find the same document in your technology drive in the folder LP3. We have made an announcement in your respective technology workgroup as well, please check.');

-- --------------------------------------------------------

--
-- Table structure for table `onboard`
--

CREATE TABLE `onboard` (
  `id` int(100) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `onboard`
--

INSERT INTO `onboard` (`id`, `question`, `answer`) VALUES
(1, 'I didn\'t get my appointment letter yet', 'If you had not attended the live induction and have registered in the pre-recorded session after 4 PM, 31st March. Then you\'ll get your joining letter by 30th April 2020. If you have otherwise, please a mail to hrsupport@cloudcounselage.in or ping \'Cloud Counselage HR\' in B24.'),
(2, 'I have got another attachment called ‘noname’ or ‘win.dat’ with my Appointment letter, what should I do about it? Will it cause any harm? ', 'We have observed that there is such an attachment for a few mailing service providers like Gmail and yahoo, please ignore this attachment. It won’t cause any harm to your system.'),
(3, 'I could not attend the induction last time, can I get an online induction again?/ I want some points said in the introduction, where can I get them', 'We have created a separate page with a pre-recorded induction, please visit it; https://www.cloudcounselage.co.in/ipinduction'),
(4, 'Is the induction online or offline?', 'As a precautionary measure to safeguard our intern’s health, we have decided to conduct all the inductions online.'),
(5, 'When will we get a joining letter?', 'Joining letter to all the interns will be provided on or before the 31st of March 2020.'),
(6, 'Can my friends still apply for the Internship Program (IP) - Maharashtra? Can we create awareness about this internship? Can we be the representative for Cloud Counselage in our college? ', 'Yes, your friends can apply till the 30th of March 2020; https://www.cloudcounselage.com/ipmaharashtra/. To be a student representative of Cloud Counselage, please contact Cloud Counselage HR.');

-- --------------------------------------------------------

--
-- Table structure for table `others`
--

CREATE TABLE `others` (
  `id` int(100) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `others`
--

INSERT INTO `others` (`id`, `question`, `answer`) VALUES
(1, 'Do I need to pass with the certificate in training', 'No, but please ensure you complete the training.'),
(2, 'What do I do after completing the quiz? how to complete the entire lp1 ', 'There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it. If you are done with LP3 please wait for Live Projects to begin.'),
(3, 'Do I need to register every time I do different tasks of lp1', 'There are codes in the LP1 assignment, and each time you have to register also, please check your task description'),
(4, 'I have complete one training, I didn\'t find any options to continue my training', 'Go back to the technology Page. Enter the respective tokens and then work. follow the same process every time.'),
(5, 'I am not getting results of the training', 'They are just for your practice and not for our record, so you don\'t need the results of LP1 and LP2 training.'),
(6, 'Unable to access the quiz', 'Please retry after some time in an incognito window'),
(7, 'I had press finished button of LP1 task but want to resume the task, how to do that', 'You can go back to that task and then click on \'More\' and then \'resume\' to restart that task.'),
(8, 'Can you help me by telling how can I get to know about my progress of LP 1 ', 'There is no metric to score your progress in any learning paths as it will be at a different pace for every individual.'),
(9, 'Is it necessary to attend LP1 for other domains as well if we want to take its training.', 'LP1 training is common across all the technologies'),
(10, 'If my technology is IOT/ AI/ ML/ etc., do I still have to complete the mandatory training for LP1 \"Cloud Computing\"', 'Yes, you\'ll need to complete the mandatory training as cloud computing is fundamental to many technologies and this additional knowledge will help you in your career.');

-- --------------------------------------------------------

--
-- Table structure for table `postip`
--

CREATE TABLE `postip` (
  `id` int(100) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `postip`
--

INSERT INTO `postip` (`id`, `question`, `answer`) VALUES
(1, 'When will we get an internship completion letter?', 'This is a three (3) month internship conducted in the month of March, June & July 2020. You will receive your internship experience letter in August during the convocation only if you successfully submit your Live Project'),
(2, 'Can we be a part of your future development team?/ Can we be hired by Cloud Counselage after this internship?', 'All our current interns if performing well in our internship programs can be offered an opportunity to interview for various positions in Cloud Counsealge. Many of our now full-time employees were interns in Cloud Counselage.'),
(3, 'Can we extend this internship? ', 'Yes, you can extend your internship by being part of our other online programs like, ‘Online Career Program’.'),
(4, 'What to do after Live Projects? Are we getting an offer letter/Stipend? ', 'Submit your project and once it\'s reviewed as successful, collect your internship letter. Your internship is complete after this. There is no stipend for live projects. If your work is sublime and we have a vacancy in the position you\'re interested in, you may be offered a chance for interviews and can get an offer letter from Cloud Counselage Pvt. Ltd.');

-- --------------------------------------------------------

--
-- Table structure for table `workgroup`
--

CREATE TABLE `workgroup` (
  `id` int(100) NOT NULL,
  `question` varchar(1000) NOT NULL,
  `answer` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workgroup`
--

INSERT INTO `workgroup` (`id`, `question`, `answer`) VALUES
(1, 'Not able to see the task as not part of the IP workgroup', 'Please message ‘Cloud Counselage HR’ in Bitrix24'),
(2, 'How many workgroups will an intern be a part of?/ How many workgroups should I be in?', 'Every intern should be a part of 2 workgroups. 1. \"202003-IP\" -- This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup. 2. \"202003-IP-Technology\" -- This is a technology-specific workgroup. You\'ll be added to the technology you had enrolled for. For example \"202003-IP-Python\" for students who enrolled for python.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
