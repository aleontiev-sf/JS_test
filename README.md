## Full Stack Flask and JavaScript Test Application
<p>This bare-bones code is meant to demonstrate how to write a full stack (client and server components) Flask and JavaScript based app that renders a text input field (client), passes the user input to a Flask end point service (server), and receives a jsonified string from this end point.

### Files and directories
app.py:  Python script which contains the code for the Flask end points
<br>templates folder: contains index.html (template HTML file)
<br>static folder: contains app.js which is the JavaScript code for the “submit” event (when user enters data)
<p>To run the app follow these steps:

1.	From the directory where app.py resides, run the script: python app.py
<br> you should see: Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
2.	From a browser tab, access localhost:5000
3.	Activate viewing of console log messages (for Chrome, choose “Developer Tools” under “More Tools” menu option)
4.	Enter some text and observe the sequence of events:

* Event handler for submit action is invoked and displays “My code runs!”

* It then prints the text entered into the text input field

* Finally, it prints the string returned by the /send end point function, which in this case returns the string “success”
<br> You can build upon this working skeleton framework by adding more code/logic to various modules.
