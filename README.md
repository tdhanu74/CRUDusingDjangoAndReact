# CRUDusingDjangoAndReact

## Description
Performing CRUD Operations using the **Django Framework** and **React**. The Django Framework is a MVT framework which is used to divide the frontend and the backend. React is used to develop the frontend of the project

## Installation
1. Download the Repository
2. Create a database and user with the following details\
    *Schema_Name*: 'djangodatabase'\
    *User*: 'dbadmin'\
    *Password*: '12345'\
Or change these details in the `backend/backend/settings.py` file
3. Run the backend by using `python manage.py runserver` inside the backend folder
4. Install the dependencies of frontend using `npm install` inside the frontend folder
5. Run the frontend using `npm start` inside the frontend folder

## Main Page
The main page consists of an `Add Data` Button and List of Data that has been already stored on the database
![Main Page](/images/Start.png)

## Inserting Data
To insert data, click on the `Add Data` button and fill the required data in the Modal and click on Save
![Inserting Data](/images/Insert_Modal.png)\
![Data Inserted](/images/Inserted.png)

## Editing Data
To edit data, click on `Edit` Button next to the data to be edited, change the required data and click on Save

![Editing Data](/images/Edit_Modal.png)\
![Data Edited](/images/Edited.png)

## Deleting Data 
To delete data, click on `Delete` Button next to the data to be deleted

![Data Deleted](/images/Deleted.png)
