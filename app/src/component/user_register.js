
import { useState } from 'react';
import './user_register.css';
import axios from "axios";
function User_register(){


    let [firstname,setfirstname]=useState("")
    let [secondname,setsecondname]=useState("")
    let [dob,setdob]=useState(0)
    let [age,setage]=useState(0)
    let [adhar,setadhar]=useState(0)
    let [number,setnumber]=useState(0)
    let [address, setAddres]=useState("")
    let [city,setcity]=useState("")
    let [pincode,setpincode]=useState(0)
    let [Gender,setgender]=useState("")
    let [Alcohol,setalcohol]=useState("")
    let [Tabaco,settabaco]=useState("")
    let [Druggs,setdrugs]=useState("")
    let [Other,setother]=useState("")

    async function submit(e) {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:8000/login", {
          
          firstname,
          secondname,
          dob,
          age,
          adhar,
          number,
          address,
          city,
          pincode
          ,Gender,
          Alcohol, 
          Tabaco,
          Druggs, 
          Other
          });
    
          if (response.data === "exists") {
            alert(`Alredy submited form`)
            
            
             
          } else if (response.data === "notexists") {
            alert("sucessfully submited form");
          }
        } catch (error) {
          alert("Wrong details");
          console.error(error);
        }
      }
      


    const displaySelectedImage = (event, elementId) => {
        const selectedImage = document.getElementById(elementId);
        const fileInput = event.target;

        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                selectedImage.src = e.target.result;
            };

            reader.readAsDataURL(fileInput.files[0]);
        }
    };

    return(
    <div id="r_box">
       
     
      <form id="r_form">
      <div id="Center">  <h1>Register</h1></div>
        <div class="mb-3">
            <label for="name_first" class="form-label">First name</label>
            <input onChange={(e)=>{setfirstname(e.target.value)}} type="First name" name="firstname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
           
        </div>

        
        <div class="mb-3">
            <label for="name_second" class="form-label">Second name</label>
            <input onChange={(e)=>{setsecondname(e.target.value)}} type="Second name" name="secondname" class="form-control" />
           
        </div>

        <div class="mb-3">
            <label for="name_second" class="form-label">Date of birth</label>
            <input onChange={(e)=>{setdob(e.target.value)}} id="dob" name="dob" type="Date" class="form-control" />
           
        </div>

        <div class="mb-3">
            <label for="Age" class="form-label">Age</label>
            <input onChange={(e)=>{setage(e.target.value)}} name="age" type="number" class="form-control"  />
           
        </div>

     

        <div class="mb-3">
            <label for="adhar" class="form-label">Adhar number</label>
            <input onChange={(e)=>{setadhar(e.target.value)}}  name="adhar" type="number" class="form-control"/>
        </div>
        
        <div class="mb-3">
            <label for="phone" class="form-label">Phone number</label>
            <input onChange={(e)=>{setnumber(e.target.value)}}  name="number" type="number" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="adhar" class="form-label">Address</label>
            <textarea onChange={(e)=>{setAddres(e.target.value)}} name="address" class="form-control" aria-label="With textarea"></textarea>
        </div>
        
        <div class="mb-3">
            <label for="city" class="form-label">City</label>
            <input onChange={(e)=>{setcity(e.target.value)}} name="city" class="form-control" aria-label="With textarea"></input>
        </div>
        
        <div class="mb-3">
            <label for="city" class="form-label">Pincode</label>
            <input onChange={(e)=>{setpincode(e.target.value)}} name="pincode" class="form-control" aria-label="With textarea"></input>
        </div>
        
        <div class="form-check">

        <h4> Gender </h4>
             <br/>
            <input onChange={(e)=>{setgender(e.target.value)}} value="Male" class="form-check-input" type="radio" name="Gender" id="flexRadioDefault1"/>
            <label class="form-check-label" for="Male">
                Male
            </label>
            </div>
            <div class="form-check">
            <input onChange={(e)=>{setgender(e.target.value)}} value="female" class="form-check-input" type="radio" name="Gender" id="flexRadioDefault2" checked />
            <label class="form-check-label" for="female">
                Female
            </label>
            </div>
            <br/>
          



            <h4> Type of addiction </h4>
             <br/>
            
                         
             <div class="form-check">
                <input onChange={(e)=>{setalcohol(e.target.value)}}name="Alcohol" class="form-check-input" type="checkbox" value="Alochol" id="Alochol"/>
                <label class="form-check-label" >
                Alochol
                </label>

                </div>
                <br/>
          
                <div class="form-check">
                <input onChange={(e)=>{settabaco(e.target.value)}} name="Tabaco" class="form-check-input" type="checkbox" value="Tabaco" id="Tabaco" />
                <label class="form-check-label" >
                    Tabaco
                </label>
            </div>
            <br/>
            
            
            <div class="form-check">
                <input onChange={(e)=>{setdrugs(e.target.value)}} name="Druggs"  class="form-check-input" type="checkbox" value="Druggs" id="Drugs"  />
                <label class="form-check-label" >
                    Druggs
                </label>
            </div>
            <br/>
            <div class="form-check">
                <input onChange={(e)=>{setother(e.target.value)}} name="Other" class="form-check-input" type="checkbox" value="other" id="Other"  />
                <label class="form-check-label" >
                    Other
                </label>
            </div>

            <br/> 
            <h4>Patient Image</h4>

            <div className="d-flex justify-content-center mb-4">
                <img
                    id="selectedAvatar"
                    src="data:image/png;base64,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"
                    className="rounded-circle"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                    alt="example placeholder"
                />
            </div>
            <div className="d-flex justify-content-center">
                <div className="btn btn-primary btn-rounded">
                    <label className="form-label text-white m-1" htmlFor="customFile2">
                        Choose file
                    </label>
                    <input
                        type="file"
                        className="form-control d-none"
                        id="customFile2"
                        onChange={(event) => displaySelectedImage(event, 'selectedAvatar')}
                    />
                </div>
            </div>
            
        <br/>       
            <button onClick={submit} class="btn btn-primary" type="button">Submit</button>
        </form>

    </div>
       
    
    )
}
export default User_register