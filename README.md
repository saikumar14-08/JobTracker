# JobTracker

What should our Job Tracker absolutely be able to do on Day 1? Just list 3 must-have features.
A.  1. Adding a job.
	2. removing a job.
	3. changing the status of job.
	
We now know what we’re building. Based on the feature set, we decide which tools/libraries are best suited—balanced between speed, scalability, and what you already know.
A.	Frontend: React
	Backend: Node js
	DB: AWS RDS
	Insights: AWS quick sight
	Hoisting: Docker and kubernates with ECS.
	
What tech stack are we going to use?
A.	Think about scalability, maintainence and usage insights.
	Frontend, Backend, Database, Hosting.
  Frontend: React+vite
  Backend: Node JS
  DB: AWS RDS
  Hosting: Docker+kubernates with aws lambda

Project Structure and what tools we are going to use.
A.	

Q1. What command will you use to create a modern React app with Vite?
A. npm create vite@latest client -- --template react
Q2. What are the minimum states your React app needs to track jobs (adding, listing, status change)?
A. We can create a single state array variable with object and add our data into it. The state object has the fields like: company name, job title, location, status(viewed | applied | seleccted | rejected)





Personal notes:
-> To create an application first think about frontend and how are we going to handle the state changes.
-> Once you confirm your state changes then you mock the state and see whether the data is rendered properly or not.
-> After this you have to create a form for the user to enter inputs?
-> The form handling should be proper whether to use controlled or uncontrolled components.
-> Controlled components: These are the components whose values are managed by react itself.
    => We use form, select, textarea elements here,
-> Uncontrolled components: Here the values are handled directly by the DOM.
    => We use useRef here to directly access the DOM.
  


So let me explain the working of our form.
-> Form is used to handle the controlled components.
-> First we have to set the value of our form elements so we add value attr to the input tag which maps to out form state variable.
-> Then we have to handleChange in our input fields, in our handleChange function we set the setForm values to save values to our state variable.

1. Use controlled input. For this have a state variable separate for formFields and vals.
2. Have value attr and handleChange function for handling the textbox changes.
3. Include name attr(enables generic handler to update ip val) if you're using multiple fields.
4. Form should have onSubmit which performs preventdefault, saves the data to the state variable, sets the fields values to "" after you submit.
5.