## README

Civic Seed, "Growing Change, Cultivating Communities."


## Presentation Link
https://docs.google.com/presentation/d/1hvMN8yT33XJfJ3zB7nIGo-f6oOc7UHWzYBOIoym3B7M/edit?usp=sharing

## Video Link
https://drive.google.com/file/d/1_7bWkTFiYMbnOnvAD26_kBGgRchgE6_Q/view?usp=sharing

Implemented a MERN Stack

Samir Hassan
Tasawar Saraf
Ayush Shah
Zeeshan Khan
Arnav Chokshi

Project description:
The purpose of our application is to facilitate community-driven projects by providing a space for residents, local businesses, and municipal representatives to collaborate in the Lehigh Valley. The platform includes features for user registration, project proposal submission, community voting, sponsorship opportunities, real-time funding tracking, community interaction, reporting, and administrative control. 
Our web application can be accessed by three different types of users: 
Lehigh Valley Residents, Funding Organizations, & Admins

Most updated version:
Lehigh Valley Account Users can create an idea they would like to propose to the Lehigh Valley community. Other users can upvote or “bloom” as we called. Or downvote “wither”. Based on a certain threshold the user who proposes the project can be eligible for funding!

Administrators can delete and read reports of the idea posts to monitor if they follow the guidelines.

Funding Organizations can fund projects that meet the criteria of being fundable. 


How our data was created:
Realistic data was created using Mockaroo. We made sure to match data on which users liked which posts and the blooms and withers. We acquired real Lehigh Valley zipcodes using https://www.zillow.com/browse/homes/pa/lehigh-county/. Our ER diagram included four different tables consisting of Interactions, Users, Ideas, and Funding. 
The Interactions table keeps track of the interactions made on a post such as if it was reported, liked, disliked, and on what post by which user.
The Users table keeps track of the users and the usual data while also keeping track of the type of user. This is the Users table generation: https://mockaroo.com/73223b90
The Funding table keeps track of which government official has funded which project. This helps us with real-time tracking of funding data.
The Ideas table keeps track of the idea being made, their respective “blooms” and “withers” (likes and dislikes), the reports done on it, if it is hidden, if it can be funded or not, and what the funding amount is. This is the Ideas table generation: https://mockaroo.com/62b61ce0


Amazon Web Services used:
Amazon DocumentDB for JSON Data Management:
Our team opted for Amazon DocumentDB to handle our JSON data needs. We found that DocumentDB offers enhanced performance compared to MongoDB, making it a superior choice for our application's data handling requirements. Its compatibility with MongoDB workloads allows us to leverage the scalability and agility of AWS while simplifying the JSON data storage and retrieval process.

Elastic Container Registry (ECR) for Efficient Deployment:
Recognizing the limitations of our EC2 instance's computational power, which resulted in prolonged Dockerfile compilation times, we implemented the AWS Elastic Container Registry. This service has enabled us to pre-compile our Docker containers and push them to the registry. Consequently, we can rapidly deploy these containers on our EC2 instance, markedly improving our deployment workflow and saving valuable time.

Amazon EC2 Instance as Our Application's Hub:
Our application resides on an Amazon EC2 instance, serving as a robust and secure hub accessible to the entire internet. We've tailored the ingress and egress traffic rules, including custom TCP rules and port forwarding, to ensure optimal operation and security. Moreover, we've fine-tuned the iptables configuration to further customize our network traffic handling, providing us with the flexibility and control necessary to maintain a secure and efficient online presence.



Samir’s notes
Navigation bar
Browse ideas
Have different filters
Create an idea


My ideas
Voted yes and no on
Search icon for searching all ideas
The title that says CivicSeed 

Our App functionalities

1. User Registration and Profile Management
  Secure sign-up/sign-in functionality.
  Profile management for residents, local businesses, and municipal representatives.
Profile management for USERS too

2. Project Proposal Submission
Form for submitting new projects with title, description, images, budget, timeline, and category tags (e.g., garden, art, public space).

3. **Community Voting Platform:**
   - Mechanism for residents to vote on project proposals.
   - Display of ongoing voting periods with live vote counts.

4. **Sponsorship Interface:**
   - Portal for local businesses and municipalities to offer sponsorships.
   - Options for pledging financial support directly to projects.

5. **Real-Time Funding Status:**
   - Dynamic tracking of current funding levels for each project.
   - Visualization of funding goals and progress.

6. **Project Progress Updates:**
   - Timeline view for project milestones.
   - Blog-style update posts by project organizers.

7. **Community Interaction:**
   - Comment sections for discussion and feedback on projects.
   - Sharing functionality to social media.

8. **Notification System:**
   - Alerts for new projects, voting phases, and funding achievements.
   - Email and in-app notifications based on user preferences.

9. **Reporting and Analytics:**
   - Dashboard for reporting on project success rates, community engagement, and sponsorship levels.
   - Analytics for businesses to track the impact of their sponsorships.

10. **Administrative Portal:**
- Backend control for app administrators to manage content, monitor activity, and handle disputes.


## Draft One Project Charter
Here's a structured approach to building your "Neighborhood Micro-Grants" web application with AWS, detailing the app's features, design considerations, and AWS services that could be utilized. (CIVIC SEED)

### App Features:

1. **User Registration and Profile Management:**
   - Secure sign-up/sign-in functionality.
   - Profile management for residents, local businesses, and municipal representatives.

2. **Project Proposal Submission:**
   - Form for submitting new projects with title, description, images, budget, timeline, and category tags (e.g., garden, art, public space).

3. **Community Voting Platform:**
   - Mechanism for residents to vote on project proposals.
   - Display of ongoing voting periods with live vote counts.

4. **Sponsorship Interface:**
   - Portal for local businesses and municipalities to offer sponsorships.
   - Options for pledging financial support directly to projects.

5. **Real-Time Funding Status:**
   - Dynamic tracking of current funding levels for each project.
   - Visualization of funding goals and progress.

6. **Project Progress Updates:**
   - Timeline view for project milestones.
   - Blog-style update posts by project organizers.

7. **Community Interaction:**
   - Comment sections for discussion and feedback on projects.
   - Sharing functionality to social media.

8. **Notification System:**
   - Alerts for new projects, voting phases, and funding achievements.
   - Email and in-app notifications based on user preferences.

9. **Reporting and Analytics:**
   - Dashboard for reporting on project success rates, community engagement, and sponsorship levels.
   - Analytics for businesses to track the impact of their sponsorships.

10. **Administrative Portal:**
	- Backend control for app administrators to manage content, monitor activity, and handle disputes.

### Design Considerations:

- **User Experience (UX):** The app should have a simple, intuitive, and engaging interface that encourages participation.
- **Accessibility:** Ensure the design is accessible to all users, including those with disabilities.
- **Responsive Design:** The app should be fully functional on both desktop and mobile devices.
- **Branding:** Use a consistent and friendly design language that aligns with the community-focused brand.

### AWS Services for the Application:

- **Amazon Cognito:** For managing user authentication and secure access control.
- **AWS Amplify or AWS Elastic Beanstalk:** To set up and deploy the web application with minimal configuration.
- **Amazon S3 and Amazon CloudFront:** To store and serve static assets and media files with low latency globally.
- **AWS Lambda and Amazon API Gateway:** To create a serverless backend that can scale automatically with the number of requests.
- **Amazon RDS or Amazon DynamoDB:** Depending on whether you need a SQL or NoSQL database solution for storing user data and project details.
- **Amazon SES/SNS:** To handle email and SMS notifications.
- **AWS Elemental MediaConvert:** If you plan to include video updates for projects, for video processing and delivery.
- **AWS CloudWatch:** For monitoring your application's performance and logging.
- **Amazon QuickSight:** For creating business intelligence dashboards and insights for administrative use.

### Security and Compliance:

- **Data Protection:** Use AWS data encryption services to protect sensitive information.
- **Compliance:** Ensure that the app meets the necessary compliance requirements, which may include GDPR, CCPA, or other local data protection laws.

### Development and Deployment Workflow:

- **AWS CodeCommit:** Use as a managed source control service.
- **AWS CodeBuild:** To compile and test code.
- **AWS CodeDeploy:** To automate code deployments to any instance, including EC2, Lambda, and on-premises servers.
- **AWS CodePipeline:** For continuous integration and continuous delivery service.

By using the aforementioned features and AWS services, you can create a comprehensive and scalable web application that facilitates community improvement initiatives through micro-grants and active local engagement.



