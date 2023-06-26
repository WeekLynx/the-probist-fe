
# Functional Requirements:
## 1. A user should be able to create an account:
	* The user can provide their Auth0 to login and make an account.
	* The system should validate the provided information and create a unique account for the user.
## 2. An authenticated user should be able to create an interview simulation:
	* The user can enter the subject of the interview and provide relevant information about the subject and the goals of the interview.
	* The system should store this information in a structured manner, associating it with the user's account.
## 3. The interview simulation output should be savable as a JSON file:
	* After creating an interview simulation, the user should have the option to save it as a JSON file.
	* The system should store the JSON file within the database, associating it with the user's account for later retrieval.
## 4. The user should be able to download the interview simulation as a .md or .pdf file:
	* Once a simulation is saved, the user should have the ability to download it as either a .md or .pdf file format.
	* The system should generate the appropriate file format from the stored JSON data and allow the user to download it.
## 5. A user should be able to view their saved interview simulations:
	* The user should have access to a list of all their saved interview simulations.
	* The system should retrieve and display the simulations, providing an overview of each.
## 6. The user should be able to select and view a specific interview simulation:
	* Upon selecting a saved interview simulation from the list, the user should be able to view its details.
	* The system should present the stored information in a readable format for the user to review.

# Data Flow:

## 1. User Registration and Account Creation:
	* User visits the app's registration page.
	* User enters their desired username, email, and password.
	* App validates the provided information and creates a new user account.
	* User is redirected to the login page.
## 2. User Login:
	* User enters their username and password on the login page.
	* App verifies the entered credentials.
	* If the credentials are valid, the user is authenticated and granted access to the app's dashboard.
	* If the credentials are invalid, the user is shown an error message and prompted to re-enter the correct information.
## 3. Dashboard and Interview Simulation Creation:
	* Once logged in, the user is presented with the app's dashboard.
	* User selects the option to create a new interview simulation.
	* App displays a form where the user can input the subject, information, and goals of the interview.
	* User submits the form.
	* App processes the entered data and stores it in the database, associating it with the user's account.
	* App generates a unique identifier for the interview simulation.
## 4. Saving the Interview Simulation as a JSON File:
	* After creating the interview simulation, the user can choose to save it as a JSON file.
	* User selects the option to save the simulation.
	* App retrieves the stored simulation data from the database.
	* App converts the data into a JSON file format.
	* App saves the JSON file within the database, associating it with the user's account.
## 5. Downloading the Interview Simulation:
	* User can select the saved interview simulation from the dashboard.
	* App retrieves the stored JSON file for the selected simulation.
	* User can choose to download the simulation as either a .md or .pdf file.
	* App generates the appropriate file format based on the stored JSON data.
	* User is prompted to save the downloaded file to their local device.
## 6. Viewing Saved Interview Simulations:
	* User can access the dashboard to view all their saved interview simulations.
	* App retrieves the list of saved simulations associated with the user's account.
	* User can see an overview of each simulation, including the subject and goals.
## 7. Selecting and Viewing a Specific Interview Simulation:
	* User selects a specific interview simulation from the list on the dashboard.
	* App retrieves the detailed information of the selected simulation from the database.
	* User is presented with the detailed information of the simulation, such as subject, information, and goals, in a readable format.

# Non - Functional:


## 1. Security:
	* The application will implement secure authentication and authorization using Auth0. User accounts will be created and managed through Auth0’s identity platform, which offers industry-standard security measures and protocols.
	* User data will be securely transmitted and stored, following best practices for data encryption and protection. The application will leverage Auth0’s security features to safeguard user information and prevent unauthorized access.

## 2. Usability:
	* The application will prioritize usability to deliver an intuitive and user-friendly experience. The user interface will be designed with a focus on simplicity, clarity, and ease of navigation.
	* Consistent layouts, clear visual cues, and logical workflows will guide users through the application, reducing user confusion and enhancing usability.
	* Error handling and feedback mechanisms will be implemented to provide helpful messages and guidance to users in case of incorrect inputs or unexpected errors.
