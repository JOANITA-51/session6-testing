/**
 * @jest-environment jsdom
 */
 const  doLoginOnClick = require("../src/login.js");

 test("Must be function", () => {
 
    /** document.body.innerHTML = `
         <form onSubmit="doLogin(event)" action="https://url/path/to/php/script"  method="POST">
             <div>
                 <label>Username</label>
                 <input type="text" id="username" name="username" class="form-field" />
             </div>
             <div>
                 <label>Password</label>
                 <input type="password" id="password" name="password" class="form-field" />
             </div>
             <div>
                 <input type="submit" id="submit" name="submit" value="Submit" class="form-field" />
             </div>
         </form>
         `;
     
     document.getElementById('submit').click() */ 
 
     expect(doLoginOnClick).toBeDefined();
     expect(typeof doLoginOnClick).toBe('object');
 });