# CS472 Group 1 Project

Project Overview:

This is the UW-Madison Intramural Sports Website, this is the project we decided to do since the fusion app was very laggy and not very user friendly. In our website we include the ability to:
1. View intermural sports 
2. Creates teams for certain sports including customizablity in team name and for what sport the team will be
3. Join teams by adding your name and choosing from already existing teams.
4. Viewing what teams you are on already by typing in your name.
5. Viewing a schedule for sports using a drop down bar.
6. An esports introduction page.
7. Finally an admin page that requires a password (admin123) to enter where you can delete and view teams.

Pages and Purpose:

index.html --> Home: The firt page is index.html which is our homepage. This our starter page where there is a sort of introduction for the user and a very accessible button that takes the user 
directly to the registration page. This page also includes a nav bar that can bring you to any of the other pages and a logo from the recreational wellbeing center at UW-Madison.

teams.html --> Team Registration: This page is made for team registration and it allows users to create new teams by entering a name and choosing a sport. It also allows users to put their name to join existing teams 
and displays a dynamic list of teams and their members.This uses local storage to save information on teams and their members. Also includes the logo and footer at bottom of page.

myTeam.html --> My Team: In this section of the website the user is able to enter their name and view which teams they are part of. This gives the ability to users to leave teams that they are part of and displays
current team membership in a dynamic way. This utilizes the local storage to get data. This page also includes the footer and logo at the bottom of the page.

schedule.html --> Schedule: This part of the website allows users to select a sport from teh drop down and displays a schedule for them. The data in this section is static and could be an improvement 
that we implement into the website. Logo and footer are also at the bottom of this page.

admin.html --> Admin Page: In this section the content is protected by the admin password which is (admin123) and will not allow the page content to be displayed unless password is typed correctly. Once a 
user is into the admin page, the admin can view all of the created teams and delete them as well. The team deletion on this page erases data from the local storage. The logo and footer are also included on this page.

Esports.html --> Esports Info: This page displays the information about esports game and has a hidden hyperlink in text that brings user to registration page to join or create an esports team. The logo
and footer are also included at the bottom of this page.

creators.html --> About Us: Displays the group members description and an image of them. The bio is hidden and can be revealed or re-hidden by utilizing the bio button on the page.


Global Style Sheet: Our global style sheet was style.css and controlled the overall style of the pages. Most of the styling was handled with a bootstrap for convenience due to formatting errors at the end of 
the project.

Javascript: Our js page was called script.js with each page having a script tag directly in them. This handled creating teams, joining/leaving teams, dynamic schedules, updating lists, and admin deletion.

Conclusion: Our group does believe that there is room for improvement on our website including a dynamic schedule and refining some of our javascript functions and styling of the pages including structure as well. Overall though we believe that this a very well functioning website that includes many features from the Fusion App that in our opinion are more refined. Thank you!!



