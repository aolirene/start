const Name = document.getElementById("name");
const nin = document.getElementById("NIN");
const mobile = document.getElementById("Mobile");
const dueAmount = document.getElementById("DueAmount");
const salesAgent = document.getElementById("SalesAgent");
const produceName = document.getElementById("ProduceName");
const produceType = document.getElementById("ProduceType");
const tonnage = document.getElementById("Tonnage");
const form = document.getElementById("Form");

console.log(Name, nin, mobile, date, dueAmount, salesAgent, dueDate, produceName, produceType, tonnage, dispatch)

// add advent listeners
Name.addEventListener("blur", validatename);
nin.addEventListener("blur", validateNIN);
mobile.addEventListener("blur", validateMobile);
produceName.addEventListener("blur", validateProduceName);
dueAmount.addEventListener("blur", validateDueAmount);
salesAgent.addEventListener("blur", validateSalesAgent);
produceType.addEventListener("blur", validateProduceType);
tonnage.addEventListener("blur", validateTonnage);
//create validation functions
function validatename() {
    const regEx_name = 
    ///^[a-zA-Z]{2,20}( )[a-zA-Z]{2,20}(()[a-zA-Z]{2,20})$/;
    /^[a-z\d]{2,20}( )[a-z\d]{2,20}(( )[a-z\d]{2,20})?$/i;

    if (!regEx_name.test(Name.value)) {
        notValid(Name);
    }
    else {
       Valid(Name)
     }
    }
//NIN
    function validateNIN() {
        const regEx_NIN = /^[CM|CF][0-9]{14}$/;
        
    
        if (!regEx_NIN.test(nin.value)) {
            notValid(nin);
        }
        else {
           
            Valid(nin);
         }
        }

        //mobile
        function validateMobile() {
            const regEx_Mobile = /^[0]\d{9}$/;
            
        
            if (!regEx_Mobile.test(mobile.value)) {
                notValid(mobile);
            }
            else {
               
              Valid(mobile)
              
             }
            }
            //produce name
            function validateProduceName() {
                const regEx_ProduceName = /[0-9]{2,}/;
                
            
                if (!regEx_ProduceName.test(produceName.value)) {
                    notValid(produceName);
                }
                else {
                    Valid(produceName);
                }
            //dueAmount
            function validateDueAmount() {
                const regEx_DueAmount = /^[a-z\d]{5,}$/i;
                
            
                if (!regEx_DueAmount.test(dueAmount.value)) {
                    notValid(dueAmount);
                }
                else {
                   
                    Valid(dueAmount);
                 }
                }
                //sales agent
                function validateSalesAgent() {
                    const regEx_SalesAgent = /^[a-z\d]{2,20}( )[a-z\d]{2,20}(( )[a-z\d]{2,20})?$/i;
                    
                    if (!regEx_SalesAgent.test(salesAgent.value)) {
                        notValid(salesAgent);
                    }
                    else {
                       
                        Valid(salesAgent);
                     }
                    }
                    // produce name
                    function validateProduceName() {
                        const regEx_ProduceName = /[0-9]{2,}/;
                        
                    
                        if (!regEx_ProduceName.test(produceName.value)) {
                            notValid(produceName);
                        }
                        else {
                           
                            Valid(produceName);
                         }
                        }

                        // produce type
                    function validateProduceType() {
                        const regEx_ProduceType= /[0-9]{2,}/;
                        
                    
                        if (!regEx_ProduceType.test(produceType.value)) {
                            notValid(produceType);}
                        else {
                           
                            Valid(produceType);
                         }
                        }
         // produce type
                  
                        //tonnage
                    function validateTonnage() {
                        const regEx_Tonnage= /[0-9]{2,}/;
                        
                    
                        if (!regEx_Tonnage.test(tonnage.value)) {
                            notValid(tonnage);
                        }
                        else {
                           
                            Valid(tonnage);
                         }
                        }
                    }
                    document.querySelector("form").addEventListener("submit",(e) => {
                        e.preventDefault();
                        validateForm();
                    });
                    function validateForm() {
                        const inputs = document.querySelectorAll("form input");
                        console.log(inputs);
                    
                    if (
                        Name.classList.contains("Valid") &&
                        nin.classList.contains("Valid") &&
                        mobile.classList.contains("Valid") &&
                        dueAmount.classList.contains("Valid") && 
                        salesAgent.classList.contains("Valid") && 
                        produceName.classList.contains("Valid") && 
                        produceType.classList.contains("Valid") &&
                        tonnage.classList.contains("Valid") 
                        
                    ) 
                    {
                         document.querySelectorAll("form").submit();  
                     }else{
                        alert("validate all fields");
                        return;
                     }
                    }

