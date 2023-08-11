// Constructor function 
function Professor(name, dob, address, phoneNumber, department, yearOfJoining,qualification, salary) {
        this.name = name;
        this.dob = dob;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.department = department;
        this.yearOfJoining = yearOfJoining;
        this.qualification = qualification;
        this.salary = salary;
        this.updateAddress = function(newAddress){
            this.address = newAddress;

        }
        this.updatePhoneNumber = function(newPhoneNumber){
            this.phoneNumber = newPhoneNumber;
            
        }
       
    }
