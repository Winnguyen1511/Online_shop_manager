Sign up page new:
1) Feature:  
- Similar to the old signup and login page.

2) Technology:  
	a) I re-organize the structure of the file, all js files are in /js,  
	all css files are in /css.  
	b) I also turn the valid-info.js into module, so we can load it just when we need.  
	c) The main script js is also set as module, it import required modules.  
	e) A database is added, using Promise() to call and to update the 'username.json'.  
	- To read the .json file, we need an AJAX call, and JSON parse it into the object  
	in our program.  
	- The Promise is involved to handle the AJAX asynchronous request.
3) Research:
- AJAX
- Asynchronous programming.
- Promise ES6.

# Hope this help !
