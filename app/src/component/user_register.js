import './user_register.css';
function User_register(){
    return(
    <div id="r_box">
       

      <form id="r_form">
      <div id="Center">  <h1>Register</h1></div>
        <div class="mb-3">
            <label for="name" class="form-label">Full name</label>
            <input type="full name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
           
        </div>
        <div class="mb-3">
            <label for="number" class="form-label">Number</label>
            <input type="number" class="form-control"/>
        </div>

        <div class="mb-3">
            <label for="adhar" class="form-label">Adhar number</label>
            <input type="number" class="form-control"/>
        </div>
        
        <div class="mb-3">
            <label for="adhar" class="form-label">Address</label>
            <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        
        
        <div class="form-check">

        <h4> Gender </h4>
             <br/>
            <input class="form-check-input" type="radio" name="Gender" id="flexRadioDefault1"/>
            <label class="form-check-label" for="Male">
                Male
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="Gender" id="flexRadioDefault2" checked />
            <label class="form-check-label" for="female">
                Female
            </label>
            </div>
            <br/>
          



            <h4> Type of addiction </h4>
             <br/>
            
                         
             <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Alochol" id="Alochol"/>
                <label class="form-check-label" >
                Alochol
                </label>

                </div>
                <br/>
          
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Tabaco" id="Tabaco" />
                <label class="form-check-label" >
                    Tabaco
                </label>
            </div>
            <br/>
            
            
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Tabaco" id="Drugs"  />
                <label class="form-check-label" >
                    Druggs
                </label>
            </div>
            <br/>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Tabaco" id="Other"  />
                <label class="form-check-label" >
                    Tabaco
                </label>
            </div>
            <br/>        
            <button class="btn btn-primary" type="button">Button</button>
        </form>

    </div>
       
    
    )
}
export default User_register